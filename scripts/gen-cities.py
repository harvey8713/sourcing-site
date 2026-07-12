#!/usr/bin/env python3
"""Extract city overlay data from data files and generate city-translations.ts."""
import re, json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'i18n', 'content', 'data')
CONTENT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'i18n', 'content')

LOCALES = ['fr', 'de', 'it', 'ko', 'ru']
OVERLAY_FIELDS = ['subtitle', 'description', 'longDescription', 'badge', 'highlights', 'suitableFor', 'notSuitableFor', 'faq']

def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f'Failed to read {path}: {e}')
        return None

def extract_fr_overlay(contents):
    match = re.search(r"const\s+data\b[^=]*=\s*(\{.*?\n\});\s*\n\s*export\s+default\s+data", contents, re.DOTALL)
    if not match:
        return None
    try:
        local_ns = {}
        exec(f'__obj = {match.group(1)}', {}, local_ns)
        return local_ns['__obj']
    except Exception as e:
        print(f'  FR eval failed: {e}')
        return None

def extract_entity_overlay(contents):
    match = re.search(r"export\s+const\s+\w+\s*(?::\s*[^\]]*\])?\s*=\s*(\[[\s\S]*?\]);", contents)
    if not match:
        return None
    try:
        local_ns = {}
        exec(f'__arr = {match.group(1)}', {}, local_ns)
        entities = local_ns['__arr']
        result = {}
        for entity in entities:
            key = entity.get('slug', '')
            if not key:
                continue
            overlay = {}
            for field in OVERLAY_FIELDS:
                if field in entity and entity[field] is not None:
                    val = entity[field]
                    if field == 'highlights' and isinstance(val, list):
                        val = [{'title': h.get('title', ''), 'description': h.get('description', '')} for h in val]
                    overlay[field] = val
            if overlay:
                result[key] = overlay
        return result
    except Exception as e:
        print(f'  Entity eval failed: {e}')
        return None

def format_value(obj, indent=2):
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

def main():
    translations = {}
    for locale in LOCALES:
        path = os.path.join(DATA_DIR, f'{locale}-cities.ts')
        print(f'  {locale}-cities...')
        contents = read_file(path)
        if not contents:
            translations[locale] = {}
            continue
        if locale == 'fr':
            data = extract_fr_overlay(contents)
        else:
            data = extract_entity_overlay(contents)
        if data:
            translations[locale] = data
            print(f'    -> {len(data)} entries')
        else:
            translations[locale] = {}
            print(f'    -> 0 entries')

    # Read original file for prefix and suffix
    main_path = os.path.join(CONTENT_DIR, 'city-translations.ts')
    orig = read_file(main_path)
    if not orig:
        print('FAILED to read main module')
        return

    # Extract suffix: find "export function" after translations close
    suffix_match = re.search(r'const translations: LocaleTranslations = \{[^}]*\};([\s\S]*)', orig)
    if not suffix_match:
        # Try alternative: find first export after translations
        suffix_match = re.search(r'(export function[\s\S]*)', orig)
    suffix = suffix_match.group(1) if suffix_match else ''

    # Find prefix (everything up to translations)
    prefix_match = re.search(r'^(.*?)(const translations: LocaleTranslations = )', orig, re.DOTALL)
    prefix = prefix_match.group(1) if prefix_match else orig.split('const translations')[0]

    # Build translations
    locale_entries = []
    for locale in LOCALES:
        data = translations.get(locale, {})
        if not data:
            locale_entries.append(f'  {locale}: {{}},')
        else:
            formatted = format_value(data)
            locale_entries.append(f'  {locale}: {formatted},')

    translations_str = '\n'.join(locale_entries)
    full = f'{prefix}const translations: LocaleTranslations = {{\n{translations_str}\n}} as const;\n{suffix}'

    with open(main_path, 'w', encoding='utf-8') as f:
        f.write(full)
    print(f'\nWritten {len(full)} chars to city-translations.ts')

if __name__ == '__main__':
    main()
