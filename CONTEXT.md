# OnSite — Project Context

## Brand
- **Name:** OnSite
- **Tagline:** On the ground. On your side.
- **Domain:** TBD (candidates: onsite-sourcing.com, theonsite.com, onsitechina.com 等)
- **Direction:** A.纯品牌 / B.品牌+业务关键词 / C.品牌+地域（待定）
- **Budget:** 普通 $10-15/年

## Colors
- **Primary:** `#B8860B` (暗金色)
- **Primary hover:** `#9A7209`
- **Secondary:** `#1A1A2E` (深海军蓝)
- **Background:** `#F5F5F0` (暖灰白)
- **Surface:** `#FFFFFF`
- **Accent:** `#2E7D32` (深绿)
- **Text:** `#1A1A2E` / `#5A5A6E`

## Logo
- "On" — ultralight 200 weight, uppercase, wide letter-spacing
- "Site" — bold 800 weight, tight letter-spacing
- 6px gold dot at upper-right diagonal of "Site" (`top: -14px`, `marginLeft: 4px`)
- Uses `var(--color-primary)` for dot color

## Business Model
- Three-tier pricing: LITE / STANDARD / PREMIUM
- LITE = STANDARD × 0.75, PREMIUM = STANDARD × 1.7
- 13 services across 4 city tiers, 3-6 day durations
- Price range: $3,599 — $12,999

## Lead Capture (pre-launch strategy)
- **NO payment integration yet** — SEO first, collect traffic, add payments later
- **NO phone calls** — user is in China, can't take calls
- **Primary channels:** Email + WhatsApp
- **WeChat** as secondary
- **Current issues:**
  - WhatsApp number is placeholder (`+86-xxx-xxxx-xxxx`)
  - Footer has zero contact info
  - "Book a Discovery Call" wording implies phone calls (needs changing to async messaging)
  - Contact form has no backend (console.log only)
  - `ContactForm.tsx` is dead code (defined but unused)

## Tech Stack
- Next.js 16 App Router
- Tailwind CSS v4 (CSS-first theming via `@theme inline`)
- TypeScript

## Key Files
- `src/app/globals.css` — theme colors
- `src/lib/constants.ts` — `SITE` object (name, domain, tagline)
- `src/data/site-config.ts` — nav, stats, trust signals, contact info
- `src/data/services.ts` — 13 services with 3-tier pricing
- `src/data/cities.ts` — city data
- `src/components/layout/Navbar.tsx` — logo, nav, mobile menu
- `src/components/layout/Footer.tsx` — logo, links, no contact info currently
- `src/components/sections/HeroSection.tsx` — hero with OnSite tagline treatment
- `src/components/sections/StatsBar.tsx` — py-3, thin stats bar
- `src/app/page.tsx` — homepage layout

## Pending Tasks
- [ ] Choose and register domain
- [ ] Add Email + WhatsApp to Footer
- [ ] Fill in real WhatsApp number
- [ ] Change "Book a Discovery Call" → async-friendly wording
- [ ] Connect contact form to backend (Formspree etc.)
- [ ] Remove dead `ContactForm.tsx` or wire it up
- [ ] Unify email source of truth (site-config.ts vs structured-data.ts)

---

## OnSite Social — LinkedIn 内容 Pipeline

**路径**: `/Users/harvey/Desktop/onsite-social/`

**已做的**:
- [x] Web dashboard (Express + HTML, `http://localhost:3456`)
- [x] Research → Generate → Review → Approve → Export 流程
- [x] Performance tracking（预测评分 + T+3d 复盘）
- [x] AI 修订功能（"✏️ Revise"按钮 + textarea，调用 DeepSeek 重写）
- [x] Skill 文件 `.claude/skills/onsite-content.md`（对话式创作助手）

**Skill 使用**: 在 Claude Code 里调 `/onsite-content` 或说"用 onsite-content 技能"

**待讨论/待定**:
- [ ] 素材库填充 — skill 文件里留了数据点/客户故事/行业观察的空位，需要填入真实可公开的内容
- [ ] 要不要把 skill 里的定稿自动存为 PostDraft JSON（现在 workflow 描述到 Step 4，但实际还没实现）
- [ ] 确认 skill 的写作风格方向对不对（之前讨论过爆款结构、细节密度等）
- [ ] 素材库填充 — skill 文件里留了数据点/客户故事/行业观察的空位
- [ ] 确认要不要让 Claude 能直接读写 `data/linkedin/queue/` 下的 JSON 文件

**关键文件**:
- `scripts/web/server.ts` → API 路由
- `scripts/web/public/index.html` → Web UI
- `scripts/generate.ts` → 内容生成模块
- `scripts/llm.ts` → DeepSeek API 调用
- `scripts/types.ts` → PostDraft 类型定义
- `scripts/knowledge-base/` → 品牌调性、术语、内容支柱
- `.claude/skills/onsite-content.md` → 创作 skill
- `rubric_notes.md` → 内容评分标准（Hook/Relevance/Insight/Credibility/Engagement）
