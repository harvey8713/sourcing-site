# OnSite LinkedIn Content Automation System — Design Spec

## Overview
An AI-powered content marketing automation pipeline for OnSite's LinkedIn presence. The system generates, schedules, and manages LinkedIn content for a China factory sourcing/due diligence service brand. The founder (non-expert in sourcing) acts as the decision-maker — approving topics, reviewing drafts, and approving engagement responses.

## Brand Positioning
- **Persona:** Founder/learner — transparent about building the business, shares research and discoveries
- **Tone:** Professional, educational, behind-the-scenes
- **Content Pillars:**
  1. China factory sourcing methodology (how OnSite works)
  2. Industry research & trends (manufacturing data, supply chain shifts)
  3. City/industry deep dives (Shenzhen electronics, Foshan furniture, etc.)
  4. Practical guides for importers (checklists, red flags, cost breakdowns)

## System Architecture

### Layers

| Layer | Responsibility | Automation Level |
|-------|---------------|-----------------|
| **Knowledge Base** | Brand voice, content templates, industry terminology, competitor analysis | Static + periodic refresh |
| **Research** | Topic discovery, trend analysis, content brief generation | Fully automated |
| **Generation** | Post drafts, carousels, multi-format variants | Fully automated |
| **Review** | Founder reviews and approves/edits/rejects | **Manual (human gate)** |
| **Scheduling** | Queue management, timed posting | Fully automated |
| **Engagement** | Comment response suggestions, DM templates | Semi-automated (human approves) |
| **Analytics** | Performance tracking, strategy recommendations | Fully automated |

### Data Flow

```
Web Search / RSS / Feedly ──→ Research Layer ──→ Topic Briefs
                                                     │
Knowledge Base (brand, templates, terms) ────────────┤
                                                     │
                                                     ▼
                                            Generation Layer
                                           (Claude API / prompts)
                                                     │
                                             多版本 drafts
                                                     │
                                                     ▼
                                            Review Layer (Founder)
                                           ┌─────┴─────┐
                                           │           │
                                        Approved    Rejected/Edited
                                           │           │
                                           ▼           └──→ back to Gen
                                      Scheduler
                                     (Buffer API)
                                           │
                                           ▼
                                      Published
                                           │
                                           ▼
                                    Engagement Layer
                                    (comment suggestions)
                                           │
                                           ▼
                                    Founder reviews → sends
```

## Weekly Workflow

### Day 1 (Monday) — Research & Batch Generation (founder: 5 min)
1. System runs research: top 5 sourcing industry news, 3 competitor posts, 2 trending topics
2. System generates 5-7 post drafts (mix of content pillars)
3. System sends you a summary: topics + one-liner for each
4. **You: select 3-4 topics for the week, reject the rest**

### Day 1 (Monday) — Full Draft Generation (automated)
1. System expands selected topics into full posts (3 format variants per topic: text, carousel outline, question poll)
2. System generates image prompts for Canva/visuals
3. Queue assembled, pending your approval

### Day 2 (Tuesday) — Review (founder: 15-20 min)
1. **You: read drafts, make edits, approve/reject**
2. Approved posts enter scheduling queue

### Days 3-7 — Automated Publishing
- 3-4 posts published per week at optimal times (EU afternoon / US morning)
- Each post: you receive notification with comment suggestions
- **You: approve or customize response, system sends**

### End of Week — Analytics
- System summarizes: impressions, engagement, new connections, inbound DMs
- System suggests: what worked, what to adjust next week

## Content Generation Prompts

### Topic Research Prompt
```
You are researching content topics for a China factory sourcing service brand "OnSite".
Target audience: Western importers, procurement managers, e-commerce brands sourcing from China.

[Week of DATE]

Please:
1. Find 3 trending topics in China manufacturing / supply chain news
2. Identify 2-3 post ideas from competitor content in this space
3. Suggest 2 evergreen educational topics from the brand's service list
4. For each: give a 1-line hook and why it matters to our audience
```

### Post Generation Prompt
```
You are a content writer for "OnSite" — a China factory due diligence service.
Brand tone: professional, educational, transparent. The founder is building this from scratch.
Format: LinkedIn post. Max 1300 characters. Hook-first opening.

Topic: [TOPIC]
Goal: [EDUCATE / ENGAGE / INSPIRE / CONVERT]
Include: hook → insight → takeaway → light CTA

Write 3 variants:
A. Text-only (standard LinkedIn post)
B. Carousel outline (5 slides)
C. Question-style (max 3 sentences, designed for comments)

For option B, also generate image descriptions for each slide.
```

## Tools & Services

| Tool | Purpose | Cost |
|------|---------|------|
| Claude API | Content generation engine | ~$20-40/mo |
| Buffer (or Hootsuite) | Post scheduling & publishing | Free tier: 3 channels |
| Canva API / manual | Visual creation | Free |
| Later in-house tool | Coordination hub (optional) | Build custom |

## Future Iterations

1. Cross-platform repurposing (LinkedIn → X → blog auto-rewrite)
2. Automated lead scoring from engagement data
3. DM automation sequences for warm leads
4. Content performance A/B testing
