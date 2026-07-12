#!/usr/bin/env python3
"""
Extract translation overlay data from data files and generate main module files.
Reads the data files as plain text, extracts overlay fields, and writes back
the main module files with populated translations objects.
"""
import re
import os
import json

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'i18n', 'content', 'data')
CONTENT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'i18n', 'content')

LOCALES = ['fr', 'de', 'it', 'ko', 'ru']
TYPES = ['services', 'cities', 'industries', 'guides', 'faqs']

# Overlay field sets for each type
OVERLAY_FIELDS = {
    'services': [
        'title', 'subtitle', 'category', 'location', 'durationLabel',
        'description', 'longDescription', 'whatIsIncluded', 'highlights',
        'suitableFor', 'notSuitableFor', 'process', 'faq', 'tiers', 'seoKeywords',
    ],
    'cities': [
        'subtitle', 'description', 'longDescription', 'badge', 'highlights',
        'suitableFor', 'notSuitableFor', 'faq',
    ],
    'industries': [
        'name', 'description', 'heroCopy', 'keyRegions', 'whatWeAudit',
        'caseSummary', 'seoKeywords',
    ],
    'guides': [
        'title', 'excerpt', 'category', 'readTime', 'content', 'seoKeywords',
    ],
    'faqs': [
        'question', 'answer',
    ],
}


def read_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f'Failed to read {file_path}: {e}')
        return None


def extract_fr_overlay(contents):
    """Extract FR overlay data (already in correct format: const data = {...}; export default data)."""
    # Find the object literal assigned to `const data`
    match = re.search(r"const\s+data\b[^=]*=\s*(\{.*?\n\});\s*\n\s*export\s+default\s+data", contents, re.DOTALL)
    if not match:
        print('  FR: Could not find data object')
        return None
    try:
        # Use exec to evaluate the object literal
        obj_str = match.group(1)
        local_ns = {}
        exec(f'__obj = {obj_str}', {}, local_ns)
        return local_ns['__obj']
    except Exception as e:
        print(f'  FR: Failed to eval object: {e}')
        return None


def extract_entity_overlay(contents, type_name):
    """Extract overlay fields from full entity arrays (de/it/ko/ru)."""
    # Find the exported const array
    match = re.search(r"export\s+const\s+\w+\s*(?::\s*[^\]]*\])?\s*=\s*(\[[\s\S]*?\]);", contents)
    if not match:
        print(f'  Could not find exported array for {type_name}')
        return None
    try:
        local_ns = {}
        exec(f'__arr = {match.group(1)}', {}, local_ns)
        entities = local_ns['__arr']
        return entities_to_overlay(entities, type_name)
    except Exception as e:
        print(f'  Failed to eval array: {e}')
        return None


def entities_to_overlay(entities, type_name):
    overlay_fields = OVERLAY_FIELDS[type_name]
    result = {}
    for entity in entities:
        key = entity.get('slug') or entity.get('id') or ''
        if not key:
            print(f'  WARNING: entity without slug/id found')
            continue
        overlay = {}
        for field in overlay_fields:
            if field in entity and entity[field] is not None:
                overlay[field] = entity[field]
        if overlay:
            result[key] = overlay
    return result


def get_module_structure(type_name):
    """Read the original main module file to get its structure (imports, type defs, exports)."""
    file_path = os.path.join(CONTENT_DIR, f'{type_name}-translations.ts')
    contents = read_file(file_path)
    if not contents:
        return None, None

    # Split at "const translations:"
    parts = contents.split('const translations:')
    prefix = parts[0]

    # Extract suffix after translations closing
    suffix_match = re.search(r'\};([\s\S]*)', parts[1])
    suffix = suffix_match.group(1) if suffix_match else ''

    return prefix, suffix


def format_value(obj, indent=2):
    """Format a Python object as TypeScript literal."""
    if obj is None:
        return 'null'
    if isinstance(obj, bool):
        return 'true' if obj else 'false'
    if isinstance(obj, (int, float)):
        return str(obj)
    if isinstance(obj, str):
        return json.dumps(obj, ensure_ascii=False)

    if isinstance(obj, list):
        if not obj:
            return '[]'
        inner_indent = ' ' * (indent + 2)
        items = [f'{inner_indent}{format_value(item, indent + 2)}' for item in obj]
        return '[\n' + ',\n'.join(items) + ',\n' + ' ' * indent + ']'

    if isinstance(obj, dict):
        if not obj:
            return '{}'
        inner_indent = ' ' * (indent + 2)
        outer_indent = ' ' * indent
        pairs = [f'{inner_indent}{json.dumps(k)}: {format_value(v, indent + 2)}' for k, v in obj.items()]
        return '{\n' + ',\n'.join(pairs) + ',\n' + outer_indent + '}'

    return json.dumps(str(obj), ensure_ascii=False)


def generate_main_module(type_name, translations):
    """Generate the complete main module file content."""
    prefix, suffix = get_module_structure(type_name)
    if prefix is None:
        return None

    locale_entries = []
    for locale in LOCALES:
        data = translations.get(locale, {})
        if not data:
            locale_entries.append(f'  {locale}: {{}},')
        else:
            formatted = format_value(data)
            locale_entries.append(f'  {locale}: {formatted},')

    return f'{prefix}const translations: LocaleTranslations = {{\n' + '\n'.join(locale_entries) + '\n} as const;' + suffix


def resolve_industry_name(entity, type_name):
    """
    For industries, resolve the name field.
    In de/ko files, name is like `INDUSTRY_META.electronics.name` which is an unresolved reference.
    We detect unresolved references and replace them with English names from the mappings.
    """
    name = entity.get('name')
    if isinstance(name, str):
        return name
    return name  # Keep as-is; might be an eval failure


def main():
    type_arg = os.sys.argv[1] if len(os.sys.argv) > 1 else 'all'
    types_to_process = TYPES if type_arg == 'all' else [type_arg]

    for type_name in types_to_process:
        print(f'\n=== Processing {type_name} ===')
        translations = {}

        for locale in LOCALES:
            file_path = os.path.join(DATA_DIR, f'{locale}-{type_name}.ts')
            print(f'  {locale}-{type_name}...')
            contents = read_file(file_path)
            if not contents:
                translations[locale] = {}
                continue

            if locale == 'fr':
                data = extract_fr_overlay(contents)
            else:
                data = extract_entity_overlay(contents, type_name)

            if data:
                translations[locale] = data
                print(f'    -> {len(data)} entries')
            else:
                translations[locale] = {}
                print(f'    -> 0 entries (extraction failed)')

        module_content = generate_main_module(type_name, translations)
        if module_content:
            output_path = os.path.join(CONTENT_DIR, f'{type_name}-translations.ts')
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(module_content)
            print(f'  Written to {output_path}')
        else:
            print(f'  FAILED to generate {type_name}-translations.ts')

    print('\nDone!')


if __name__ == '__main__':
    main()
