import { mkdir, writeFile, readFile, readdir, unlink } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DATA_DIR = join(__dirname, '..', '..', 'data', 'linkedin');

export function dataPath(subdir: string, filename: string): string {
  return join(DATA_DIR, subdir, filename);
}

export async function ensureDir(subdir: string) {
  await mkdir(join(DATA_DIR, subdir), { recursive: true });
}

export async function saveJSON(subdir: string, filename: string, data: unknown) {
  await ensureDir(subdir);
  await writeFile(dataPath(subdir, filename), JSON.stringify(data, null, 2), 'utf-8');
}

export async function loadJSON<T>(subdir: string, filename: string): Promise<T | null> {
  try {
    const raw = await readFile(dataPath(subdir, filename), 'utf-8');
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export async function loadKnowledgeBase(filename: string): Promise<string> {
  const kbDir = join(__dirname, 'knowledge-base');
  return await readFile(join(kbDir, filename), 'utf-8');
}

export async function listJSONFiles(subdir: string): Promise<string[]> {
  try {
    const files = await readdir(join(DATA_DIR, subdir));
    return files.filter(f => f.endsWith('.json')).sort();
  } catch {
    return [];
  }
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

export function nextPostDate(index: number = 0): string {
  const d = new Date();
  const day = d.getDay();
  const daysUntilNext = day <= 5 ? 1 + index : (8 - day) + index;
  d.setDate(d.getDate() + daysUntilNext);
  d.setUTCHours(14, 0, 0, 0);
  return d.toISOString();
}

export { DATA_DIR, __dirname as SCRIPTS_DIR };
