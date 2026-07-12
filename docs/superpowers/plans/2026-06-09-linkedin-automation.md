# LinkedIn Content Automation System — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a semi-automated LinkedIn content pipeline where AI handles research, writing, and scheduling — the founder only makes judgment calls.

**Architecture:** Modular TypeScript scripts plus markdown knowledge base, orchestrated by a weekly pipeline. Each step produces markdown output for human review. Uses Claude API + WebSearch for research/generation.

**Tech Stack:** TypeScript, Anthropic SDK, Node.js 20+, npx/tsx

---

### Task 1: Knowledge Base — Brand Voice

**Files:**
- Create: `scripts/linkedin/knowledge-base/brand-voice.md`
- Create: `scripts/linkedin/knowledge-base/content-pillars.md`
- Create: `scripts/linkedin/knowledge-base/industry-terms.md`

- [ ] **Step 1: Create brand-voice.md**

```markdown
# OnSite Brand Voice — LinkedIn

## Positioning
- Brand: OnSite — China factory sourcing & due diligence
- Tagline: "On the ground. On your side."
- Founder persona: Building OnSite from scratch, sharing the journey transparently
- Tone: Professional but accessible, educational, honest about being early-stage

## Voice Rules
- Write in first-person plural ("we at OnSite", "our approach")
- Never claim personal years of sourcing experience
- When unsure, say "we're researching this" or "here's what we've found so far"
- Use concrete examples over abstract claims
- End posts with a question or invitation to discuss
- Keep posts 800-1300 characters (LinkedIn sweet spot)

## Content Types
1. Educational — "How to X" guides, checklists, frameworks
2. Research — Industry data, manufacturing trends, city profiles
3. Behind-the-scenes — Building OnSite, service design decisions
4. Engagement — Questions, polls, discussion starters
```

- [ ] **Step 2: Create content-pillars.md**

```markdown
# OnSite LinkedIn Content Pillars

## Pillar 1: Factory Sourcing Methodology
- How OnSite's audit process works
- What to look for in a factory visit
- Red flags when vetting Chinese suppliers
- MOQ negotiation tactics
- Quality control checklist

## Pillar 2: City & Industry Deep Dives
- Shenzhen: Electronics capital
- Foshan: Furniture manufacturing hub
- Yiwu: World's wholesale market
- Guangzhou: Canton Fair & apparel
- Yunnan: Coffee & tea sourcing

## Pillar 3: Practical Guides for Importers
- Cost breakdown: what a factory audit actually costs
- First-time importer checklist
- How to prepare for a China sourcing trip
- Reading supplier audit reports

## Pillar 4: Supply Chain Intelligence
- China manufacturing trends
- Trade policy impacts
- Factory relocation patterns (Vietnam vs China)
- Raw material cost updates
```

- [ ] **Step 3: Create industry-terms.md**

```markdown
# OnSite Industry Terminology

## Core Sourcing Terms
- **Factory Audit**: On-site inspection of a supplier's facilities, processes, and quality systems
- **Due Diligence**: Comprehensive background check on a supplier (ownership, legal standing, capacity)
- **MOQ (Minimum Order Quantity)**: The smallest order a factory will accept
- **OEM (Original Equipment Manufacturer)**: Factory produces to buyer's specifications
- **ODM (Original Design Manufacturer)**: Factory offers its own designs for buyers to brand
- **QC (Quality Control)**: Inspection and testing during/after production
- **AQL (Acceptable Quality Limit)**: Industry standard for defect tolerance
- **SOC (Social Compliance Audit)**: Checks labor conditions, safety, ethics
- **FOB (Free On Board)**: Price includes cost to ship to port of departure
- **CIF (Cost, Insurance, Freight)**: Price includes shipping and insurance to destination port

## China-Specific
- **Canton Fair**: China's largest trade fair, held twice yearly in Guangzhou
- **Yiwu Market**: World's largest wholesale market (75,000+ stalls)
- **Huaqiangbei**: Shenzhen's famous electronics market
- **Cluster Economy**: China's model where entire towns specialize in one industry

## OnSite Service Types
- **Sprint**: 3-day focused sourcing trip to one city/hub
- **Deep Dive**: 5-day comprehensive audit with multiple factory visits
- **Navigator**: Service built around Canton Fair schedule
- **Explorer**: Multi-city sourcing expedition
```

- [ ] **Step 4: Commit knowledge base**

```bash
git add scripts/linkedin/knowledge-base/
git commit -m "feat: add LinkedIn knowledge base (brand voice, pillars, terms)"
```

---

### Task 2: Shared Pipeline Utilities

**Files:**
- Create: `scripts/linkedin/utils.ts`
- Create: `scripts/linkedin/types.ts`

- [ ] **Step 1: Create types.ts**

```typescript
/** LinkedIn post content types */
export type PostFormat = 'text' | 'carousel' | 'poll' | 'question';

export type PostStatus = 'draft' | 'pending_review' | 'approved' | 'scheduled' | 'published';

export interface PostDraft {
  id: string;
  title: string;
  content: string;
  format: PostFormat;
  pillar: string;
  status: PostStatus;
  created: string;
  scheduledFor?: string;
  carouselSlides?: string[];
  imagePrompt?: string;
  notes?: string;
}

export interface TopicBrief {
  title: string;
  hook: string;
  reason: string;
  pillar: string;
  angle: string;
}

export interface WeeklyPlan {
  weekOf: string;
  topics: TopicBrief[];
}

export interface EngagementSuggestion {
  postTitle: string;
  postUrl?: string;
  commentResponses: { trigger: string; response: string }[];
  suggestedDM: string;
}
```

- [ ] **Step 2: Create utils.ts**

```typescript
import { mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const DATA_DIR = join(import.meta.dirname, '..', '..', 'data', 'linkedin');

export function dataPath(subdir: string, filename: string): string {
  return join(DATA_DIR, subdir, filename);
}

export async function ensureDir(subdir: string) {
  await mkdir(join(DATA_DIR, subdir), { recursive: true });
}

export async function saveJSON(subdir: string, filename: string, data: unknown) {
  await ensureDir(subdir);
  await writeFile(dataPath(subdir, filename), JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Saved: ${dataPath(subdir, filename)}`);
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
  const kbDir = join(import.meta.dirname, 'knowledge-base');
  return await readFile(join(kbDir, filename), 'utf-8');
}

export async function listFiles(subdir: string): Promise<string[]> {
  try {
    return await readdir(join(DATA_DIR, subdir));
  } catch {
    return [];
  }
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

export function markdownDraft(post: import('./types').PostDraft): string {
  return `---
Title: ${post.title}
Format: ${post.format}
Pillar: ${post.pillar}
Created: ${post.created}
Status: ${post.status}
---

${post.content}

${post.carouselSlides ? `\n## Carousel Slides\n${post.carouselSlides.map((s, i) => `\n### Slide ${i + 1}\n${s}`).join('\n')}` : ''}

${post.imagePrompt ? `\n## Image Prompt\n${post.imagePrompt}` : ''}

${post.notes ? `\n## Notes\n${post.notes}` : ''}
`;
}
```

- [ ] **Step 3: Commit utils**

```bash
git add scripts/linkedin/utils.ts scripts/linkedin/types.ts
git commit -m "feat: add LinkedIn pipeline shared utilities and types"
```

---

### Task 3: Data Directory Structure

**Files:**
- Create: `data/linkedin/.gitkeep`
- Create: `data/linkedin/queue/pending/.gitkeep`
- Create: `data/linkedin/queue/scheduled/.gitkeep`
- Create: `data/linkedin/published/.gitkeep`

- [ ] **Step 1: Create the directory structure**

```bash
mkdir -p data/linkedin/{queue/{pending,scheduled},published}
touch data/linkedin/.gitkeep
touch data/linkedin/queue/pending/.gitkeep
touch data/linkedin/queue/scheduled/.gitkeep
touch data/linkedin/published/.gitkeep
```

- [ ] **Step 2: Commit**

```bash
git add data/linkedin/
git commit -m "feat: add LinkedIn automation data directories"
```

---

### Task 4: Research Module

**Files:**
- Create: `scripts/linkedin/research.ts`

- [ ] **Step 1: Create research.ts**

```typescript
#!/usr/bin/env tsx
/**
 * Research Module — generates topic briefs for the week
 * Usage: npx tsx scripts/linkedin/research.ts
 *
 * Output: data/linkedin/queue/pending/week-YYYY-MM-DD-topics.json
 */

import { loadKnowledgeBase, saveJSON } from './utils.ts';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error('Error: ANTHROPIC_API_KEY not set');
  process.exit(1);
}

async function researchTopics(): Promise<{ topics: { title: string; hook: string; reason: string; pillar: string; angle: string }[] }> {
  const brandVoice = await loadKnowledgeBase('brand-voice.md');
  const contentPillars = await loadKnowledgeBase('content-pillars.md');

  const systemPrompt = `You are a content strategist for "OnSite" — a China factory sourcing service. Based on the following brand guidelines, research and suggest 5-7 LinkedIn post topics for the coming week.

${brandVoice}

${contentPillars}

## Instructions
- Generate 5-7 topic briefs
- Each brief must include: title (hook-style), 1-line hook sentence, why this matters to our audience, which content pillar it belongs to, and a specific angle
- Cover at least 3 different content pillars
- Include 1-2 topics that invite discussion/questions
- Topics should be relevant to Western importers and procurement managers sourcing from China

Return as a JSON object with a "topics" array. Each topic object: { title: string, hook: string, reason: string, pillar: string, angle: string }`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: 'Generate this week\'s LinkedIn content topics based on our brand and audience.' }],
    }),
  });

  const data = await response.json();
  const text = data.content[0].text;

  // Extract JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Failed to parse JSON from Claude response');
  return JSON.parse(jsonMatch[0]);
}

// --- Main ---
const weekOf = new Date().toISOString().slice(0, 10);
const result = await researchTopics();
const filename = `week-${weekOf}-topics.json`;
await saveJSON('queue/pending', filename, result);
console.log(`\nGenerated ${result.topics.length} topic briefs.`);
console.log('Next step: review topics and approve your picks');
```

- [ ] **Step 2: Commit research module**

```bash
git add scripts/linkedin/research.ts
git commit -m "feat: add LinkedIn research module for topic generation"
```

---

### Task 5: Generation Module

**Files:**
- Create: `scripts/linkedin/generate.ts`

- [ ] **Step 1: Create generate.ts**

```typescript
#!/usr/bin/env tsx
/**
 * Generation Module — turns approved topics into full post drafts
 * Usage: npx tsx scripts/linkedin/generate.ts <topic-title-1> "<topic-title-2>"
 *
 * Reads from the latest topics file in queue/pending, or generates
 * drafts for the specific topic titles provided as arguments.
 *
 * Output: Individual post drafts saved to data/linkedin/queue/pending/
 */

import { loadKnowledgeBase, saveJSON, loadJSON, dataPath, generateId } from './utils.ts';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import type { PostDraft, TopicBrief, WeeklyPlan } from './types.ts';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error('Error: ANTHROPIC_API_KEY not set');
  process.exit(1);
}

async function getLatestTopics(): Promise<TopicBrief[]> {
  const pendingDir = join(import.meta.dirname, '..', '..', 'data', 'linkedin', 'queue', 'pending');
  const files = await readdir(pendingDir);
  const topicFiles = files.filter(f => f.startsWith('week-') && f.endsWith('-topics.json'));
  if (topicFiles.length === 0) {
    console.error('No topic briefs found. Run research.ts first.');
    process.exit(1);
  }
  topicFiles.sort().reverse();
  const data = await loadJSON<WeeklyPlan>('queue/pending', topicFiles[0]);
  return data?.topics ?? [];
}

async function generateDraft(topic: TopicBrief): Promise<PostDraft> {
  const brandVoice = await loadKnowledgeBase('brand-voice.md');

  const systemPrompt = `You are a LinkedIn content writer for "OnSite" — a China factory sourcing and due diligence service.

${brandVoice}

## Instructions
Write a LinkedIn post for the topic provided. Follow these rules:
- Hook-first opening line
- 800-1300 characters max
- Natural, conversational English (not corporate-speak)
- Include a specific insight or data point
- End with a question or invitation to discuss
- DO NOT use hashtags
- DO NOT use emojis
- Write from "we at OnSite" perspective

Also provide:
- 3 carousel slides (if applicable, 1 sentence each)
- A brief image prompt for post visual
- 2-3 engagement questions the founder could ask in comments

Return as JSON: { content: string, carouselSlides: string[] | null, imagePrompt: string, engagementQuestions: string[] }`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{
        role: 'user',
        content: `Topic: ${topic.title}\nAngle: ${topic.angle}\nHook: ${topic.hook}\nPillar: ${topic.pillar}`,
      }],
    }),
  });

  const data = await response.json();
  const text = data.content[0].text;
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Failed to parse JSON from Claude response');
  const draftData = JSON.parse(jsonMatch[0]);

  return {
    id: generateId(),
    title: topic.title,
    content: draftData.content,
    format: draftData.carouselSlides ? 'carousel' : 'text',
    pillar: topic.pillar,
    status: 'draft',
    created: new Date().toISOString(),
    carouselSlides: draftData.carouselSlides ?? undefined,
    imagePrompt: draftData.imagePrompt,
    notes: `Engagement Qs: ${draftData.engagementQuestions?.join(' | ')}`,
  };
}

// --- Main ---
const args = process.argv.slice(2);
let topics: TopicBrief[];

if (args.length > 0) {
  // Filter topics by title match
  const allTopics = await getLatestTopics();
  topics = allTopics.filter(t => args.some(a => t.title.toLowerCase().includes(a.toLowerCase())));
  if (topics.length === 0) {
    console.error('No matching topics found. Available topics:');
    allTopics.forEach(t => console.log(`  - ${t.title}`));
    process.exit(1);
  }
} else {
  topics = await getLatestTopics();
}

console.log(`Generating drafts for ${topics.length} topics...\n`);

const drafts: PostDraft[] = [];
for (const topic of topics) {
  process.stdout.write(`  Generating "${topic.title}"... `);
  const draft = await generateDraft(topic);
  drafts.push(draft);
  await saveJSON('queue/pending', `draft-${draft.id}.json`, draft);
  console.log('done');
}

console.log(`\nGenerated ${drafts.length} drafts. Ready for review.`);
```

- [ ] **Step 2: Commit generation module**

```bash
git add scripts/linkedin/generate.ts
git commit -m "feat: add LinkedIn content generation module"
```

---

### Task 6: Weekly Pipeline Orchestrator

**Files:**
- Create: `scripts/linkedin/pipeline.ts`

- [ ] **Step 1: Create pipeline.ts**

```typescript
#!/usr/bin/env tsx
/**
 * Weekly LinkedIn Pipeline — full orchestrator
 *
 * Usage:
 *   npx tsx scripts/linkedin/pipeline.ts research    → Generate topic briefs
 *   npx tsx scripts/linkedin/pipeline.ts generate    → Generate drafts from approved topics
 *   npx tsx scripts/linkedin/pipeline.ts review      → Show all pending drafts for review
 *   npx tsx scripts/linkedin/pipeline.ts approve <id> → Mark draft as approved
 *   npx tsx scripts/linkedin/pipeline.ts reject <id>  → Remove draft
 *   npx tsx scripts/linkedin/pipeline.ts schedule     → List approved posts ready to publish
 *   npx tsx scripts/linkedin/pipeline.ts export      → Export to Buffer CSV format
 *   npx tsx scripts/linkedin/pipeline.ts full        → Run research + generate in sequence
 */

import { readFile, writeFile, rename, unlink, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { loadJSON, saveJSON, dataPath } from './utils.ts';
import type { PostDraft } from './types.ts';

const PENDING_DIR = join(import.meta.dirname, '..', '..', 'data', 'linkedin', 'queue', 'pending');
const SCHEDULED_DIR = join(import.meta.dirname, '..', '..', 'data', 'linkedin', 'queue', 'scheduled');

async function listPendingDrafts(): Promise<PostDraft[]> {
  const files = await readdir(PENDING_DIR);
  const draftFiles = files.filter(f => f.startsWith('draft-') && f.endsWith('.json'));
  const drafts: PostDraft[] = [];
  for (const f of draftFiles) {
    const d = await loadJSON<PostDraft>('queue/pending', f);
    if (d) drafts.push(d);
  }
  return drafts;
}

function showDraftSummary(drafts: PostDraft[]) {
  if (drafts.length === 0) {
    console.log('No drafts pending.');
    return;
  }
  console.log(`\n=== Pending Drafts (${drafts.length}) ===\n`);
  drafts.forEach((d, i) => {
    console.log(`[${i + 1}] ${d.title}`);
    console.log(`    ID: ${d.id}`);
    console.log(`    Pillar: ${d.pillar} | Format: ${d.format}`);
    console.log(`    Status: ${d.status}`);
    console.log(`    ${d.content.slice(0, 100)}...`);
    console.log('');
  });
}

async function approveDraft(id: string) {
  const files = await readdir(PENDING_DIR);
  const match = files.find(f => f.includes(id));
  if (!match) { console.error(`Draft ${id} not found`); return; }
  const draft = await loadJSON<PostDraft>('queue/pending', match);
  if (!draft) { console.error('Failed to load draft'); return; }
  draft.status = 'approved';
  draft.scheduledFor = nextPostDate();
  await saveJSON('queue/scheduled', match, draft);
  await unlink(join(PENDING_DIR, match));
  console.log(`Approved: ${draft.title} (scheduled for ${draft.scheduledFor})`);
}

function nextPostDate(): string {
  const d = new Date();
  // Schedule for next Monday, Wednesday, Friday at 14:00 UTC
  const day = d.getDay();
  const daysUntilNext = day <= 5 ? 1 : (8 - day);
  d.setDate(d.getDate() + daysUntilNext);
  d.setUTCHours(14, 0, 0, 0);
  return d.toISOString();
}

async function exportBufferCsv() {
  const files = await readdir(SCHEDULED_DIR);
  const draftFiles = files.filter(f => f.startsWith('draft-') && f.endsWith('.json'));
  let csv = 'Date,Time,Content\n';

  for (const f of draftFiles) {
    const draft = await loadJSON<PostDraft>('queue/scheduled', f);
    if (!draft || draft.status !== 'approved') continue;
    const date = draft.scheduledFor ? new Date(draft.scheduledFor) : new Date();
    const dateStr = date.toISOString().slice(0, 10);
    const timeStr = date.toISOString().slice(11, 16);
    const content = draft.content.replace(/"/g, '""');
    csv += `${dateStr},${timeStr},"${content}"\n`;
  }

  const outPath = dataPath('queue', 'buffer-export.csv');
  await writeFile(outPath, csv, 'utf-8');
  console.log(`Exported ${draftFiles.length} posts to ${outPath}`);
  console.log('Import this CSV into Buffer/Hootsuite to schedule publishing.');
}

const cmd = process.argv[2];
const arg = process.argv[3];

switch (cmd) {
  case 'research':
    console.log('Running research module...');
    await import('./research.ts');
    break;

  case 'generate':
    console.log('Running generation module...');
    await import('./generate.ts');
    break;

  case 'review':
    const drafts = await listPendingDrafts();
    showDraftSummary(drafts);
    break;

  case 'approve':
    if (!arg) { console.error('Usage: pipeline.ts approve <draft-id>'); process.exit(1); }
    await approveDraft(arg);
    break;

  case 'reject':
    if (!arg) { console.error('Usage: pipeline.ts reject <draft-id>'); process.exit(1); }
    const rejectFiles = await readdir(PENDING_DIR);
    const rejectMatch = rejectFiles.find(f => f.includes(arg));
    if (!rejectMatch) { console.error(`Draft ${arg} not found`); process.exit(1); }
    await unlink(join(PENDING_DIR, rejectMatch));
    console.log(`Rejected and removed draft ${arg}`);
    break;

  case 'schedule':
    const sFiles = await readdir(SCHEDULED_DIR);
    console.log(`\n=== Approved & Scheduled (${sFiles.length} posts) ===\n`);
    for (const f of sFiles) {
      if (!f.endsWith('.json')) continue;
      const d = await loadJSON<PostDraft>('queue/scheduled', f);
      if (d) console.log(`- ${d.title} → ${d.scheduledFor ?? 'unscheduled'}`);
    }
    break;

  case 'export':
    await exportBufferCsv();
    break;

  case 'full':
    console.log('=== Full Pipeline ===\n');
    await import('./research.ts');
    console.log('\n--- Research complete ---\n');
    await import('./generate.ts');
    console.log('\n--- Generation complete ---\n');
    console.log('Next: npx tsx scripts/linkedin/pipeline.ts review');
    break;

  default:
    console.log(`
OnSite LinkedIn Pipeline

Commands:
  research    — Generate topic briefs for the week
  generate    — Generate full post drafts from topics
  review      — List all pending drafts
  approve <id> — Mark draft as approved and schedule
  reject <id>  — Remove draft from queue
  schedule    — Show all approved/scheduled posts
  export      — Export to Buffer CSV format
  full        — Run research + generate in sequence
`);
}
```

- [ ] **Step 2: Add npm scripts to package.json**

Read the current package.json, then add scripts:

```json
"scripts": {
  // ... existing scripts ...
  "linkedin": "npx tsx scripts/linkedin/pipeline.ts",
  "linkedin:research": "npx tsx scripts/linkedin/research.ts",
  "linkedin:generate": "npx tsx scripts/linkedin/generate.ts",
  "linkedin:review": "npx tsx scripts/linkedin/pipeline.ts review",
  "linkedin:export": "npx tsx scripts/linkedin/pipeline.ts export"
}
```

- [ ] **Step 3: Commit pipeline**

```bash
git add scripts/linkedin/pipeline.ts package.json
git commit -m "feat: add LinkedIn weekly pipeline orchestrator with npm scripts"
```

---

### Task 7: Engagement Module

**Files:**
- Create: `scripts/linkedin/engage.ts`

- [ ] **Step 1: Create engage.ts**

```typescript
#!/usr/bin/env tsx
/**
 * Engagement Module — suggests comment responses and DM templates
 *
 * Usage:
 *   npx tsx scripts/linkedin/engage.ts suggest <post-title>
 *       → Generates comment response suggestions for a recent post
 *   npx tsx scripts/linkedin/engage.ts dm <prospect-name> <context>
 *       → Generates a personalized DM template
 */

import { loadKnowledgeBase } from './utils.ts';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error('Error: ANTHROPIC_API_KEY not set');
  process.exit(1);
}

const systemPrompt = `You are a LinkedIn engagement strategist for "OnSite" — a China factory sourcing service.

Rules:
- Responses should be conversational, not salesy
- Answer questions directly and helpfully
- If someone shows interest, suggest a soft next step (e.g., "DM me and I can share more details")
- Keep responses under 200 characters
- Never over-promise or fake expertise`;

async function suggestResponses(postTitle: string) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2048,
      system: systemPrompt,
      messages: [{
        role: 'user',
        content: `I just published this LinkedIn post: "${postTitle}"

Suggest 5 possible comments I might receive and my best response to each. Cover these types:
1. Someone asking for more details
2. Someone skeptical/questioning
3. Someone sharing their own experience
4. Someone asking about pricing
5. General positive comment

Return as JSON: { responses: { commentType: string, expectedComment: string, suggestedResponse: string }[] }`,
      }],
    }),
  });

  const data = await response.json();
  const text = data.content[0].text;
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Failed to parse JSON');
  const result = JSON.parse(jsonMatch[0]);

  console.log(`\n=== Comment Response Suggestions for "${postTitle}" ===\n`);
  result.responses.forEach((r: { commentType: string; expectedComment: string; suggestedResponse: string }) => {
    console.log(`[${r.commentType}]`);
    console.log(`  They: "${r.expectedComment}"`);
    console.log(`  You: "${r.suggestedResponse}"`);
    console.log('');
  });
}

async function generateDM(prospectName: string, context: string) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{
        role: 'user',
        content: `Write a LinkedIn DM template to ${prospectName}. Context: ${context}

Rules:
- First message only (max 300 chars)
- No hard sell
- Reference something specific if context provided
- End with an open question

Return ONLY the DM text, no explanation.`,
      }],
    }),
  });

  const data = await response.json();
  console.log(`\n=== DM to ${prospectName} ===\n`);
  console.log(data.content[0].text);
  console.log('');
}

const cmd = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

switch (cmd) {
  case 'suggest':
    if (!arg1) { console.error('Usage: engage.ts suggest <post-title>'); process.exit(1); }
    await suggestResponses(arg1);
    break;
  case 'dm':
    if (!arg1 || !arg2) { console.error('Usage: engage.ts dm <name> <context>'); process.exit(1); }
    await generateDM(arg1, arg2);
    break;
  default:
    console.log(`
Engagement Module

Commands:
  suggest <post-title>  — Generate comment response suggestions
  dm <name> <context>   — Generate DM template for a prospect

Examples:
  npx tsx scripts/linkedin/engage.ts suggest "How to prepare for your first China factory audit"
  npx tsx scripts/linkedin/engage.ts dm "John" "He runs an e-commerce brand, commented on our post about MOQ negotiation"
`);
}
```

- [ ] **Step 2: Commit engagement module**

```bash
git add scripts/linkedin/engage.ts
git commit -m "feat: add LinkedIn engagement module (comment suggestions + DM templates)"
```

---

### Task 8: Knowledge Base — Competitor Analysis

**Files:**
- Create: `scripts/linkedin/knowledge-base/competitor-profiles.md`

- [ ] **Step 1: Create competitor-profiles.md**

```markdown
# Competitor & Reference LinkedIn Profiles

This file tracks competitor content strategies and high-performing posts
for reference. Update periodically by running research.

## Target Accounts to Study
*(To be filled in as you discover them on LinkedIn)*

- Sofeast — quality inspection & sourcing content
- AsiaInspection — inspection and audit service content
- QIMA — quality control and compliance content
- HQTS — global inspection and audit content
- Individual sourcing consultants in the China space

## What to Watch For
- Their most engaging post formats
- Comment conversation patterns
- Content pillars they cover vs. gaps we can fill
- Frequency and timing patterns

## High-Performing Post Archive
*(Add links and notes for posts that perform well)*
```

- [ ] **Step 2: Commit**

```bash
git add scripts/linkedin/knowledge-base/competitor-profiles.md
git commit -m "feat: add competitor analysis knowledge base file"
```

---

### Task 9: Weekly Workflow README

**Files:**
- Create: `scripts/linkedin/README.md`

- [ ] **Step 1: Create README.md**

```markdown
# OnSite LinkedIn Automation Pipeline

## Your Weekly Workflow (15-20 min/week)

### Monday (5 min) — Topic Selection

```bash
# Step 1: Run research → generates topic briefs
npm run linkedin research

# Read the output (data/linkedin/queue/pending/week-*.json)
# Pick 3-4 topics you want for this week
# Note: no approval command needed - just note which you want
```

### Monday (automated) — Draft Generation

```bash
# Step 2: Generate full post drafts
npm run linkedin generate
```

### Tuesday (15 min) — Review & Approve

```bash
# Step 3: Review all drafts
npm run linkedin:review

# Step 4: Approve each one
npm run linkedin approve <draft-id>
# or reject:
npm run linkedin reject <draft-id>
```

### Tuesday (automated) — Scheduling

```bash
# Step 5: See what's scheduled
npm run linkedin schedule

# Step 6: Export for Buffer
npm run linkedin export
# → Import data/linkedin/queue/buffer-export.csv into Buffer
```

### Daily (3 min) — Engagement

```bash
# Generate comment responses for a recent post
npx tsx scripts/linkedin/engage.ts suggest "Your Post Title Here"

# Generate a DM for a prospect
npx tsx scripts/linkedin/engage.ts dm "Name" "Context about them"
```

## Quick Reference

| Command | What it does |
|---------|-------------|
| `npm run linkedin` | Show all commands |
| `npm run linkedin research` | Generate 5-7 topic briefs |
| `npm run linkedin generate` | Turn topics into full drafts |
| `npm run linkedin:review` | List pending drafts |
| `npm run linkedin approve <id>` | Approve draft |
| `npm run linkedin:export` | Export to Buffer CSV |
| `npx tsx scripts/linkedin/engage.ts suggest <title>` | Comment suggestions |
| `npx tsx scripts/linkedin/engage.ts dm <name> <ctx>` | DM templates |

## Setup

1. Set `ANTHROPIC_API_KEY` in your environment
2. Create a Buffer account (free tier)
3. Run `npm run linkedin research` to start
```

- [ ] **Step 2: Commit README**

```bash
git add scripts/linkedin/README.md
git commit -m "docs: add LinkedIn automation weekly workflow README"
```
