# AGENTS.md — 미곡상사 홈페이지 작업 규칙

## Instruction Hierarchy

1. User requests in the current chat have the highest priority.
2. This `AGENTS.md` defines workflow, source priority, and guardrails.
3. `design.md` is the single source of truth for visual tokens, layout, spacing, typography, and components.
4. The PDF strategy deck is the source of business content and messaging.
5. The Shinhan Card main page is a reference for rhythm, spacing, frame radius, icon density, and trust tone. Do not copy Shinhan assets, logos, proprietary illustrations, or exact product text.

If instructions conflict, follow the higher-ranked item.

## Collaboration Premise

- This project is developed in a back-and-forth workflow with Claude, so do not assume the local asset set alone is complete.
- Cache and reuse shared project context such as `AGENTS.md`, `design.md`, visual tokens, layout rules, and agreed copy guardrails before making changes.
- Always prioritize and work from the specific files and assets the user provides in the current request, even when similar local files already exist.
- When syncing between prototypes or external HTML files and the local project, keep the shared rules above intact and avoid drifting from `design.md`.

## Project Goal

Build a local-first Migok Sangsa homepage centered on 산지 직거래 쌀 대량 공급. The page should make users understand, within 30 seconds, key products, rice traceability, B2B transaction flow, payment/shipping rules, subscription options, and inquiry paths.

## Design Source Rules

- Follow `design.md` exactly for color, font, layout, section spacing, radius, shadows, and component hierarchy.
- The current design direction follows `migoksangsa_v4.html`: cream base, rice-gold accents, field-green CTAs, warm ink text, Pretendard, 1120px container, 104px section rhythm.
- Use the daylight background transition defined in `design.md`.
- Use compact line icons and simple motion. Motion must reinforce rice/delivery context only.
- The delivery-flow truck uses transparent inline SVG with rice sacks and should not cover step labels or descriptions.

## Content Rules

- Do not show internal profit, market sizing, or unconfirmed operational assumptions.
- Do not use unsupported claims such as "전국 1위", "최고", "무조건 당일배송", fake review counts, fake stock scarcity, or countdown discounts.
- Public copy should be service-like and concise: "상품별 확인", "출고 시 안내", "상담 후 확정", "지역별 안내".
- Avoid visible development disclaimers such as "백엔드 없이", "프로토타입", "저장되지 않습니다", or "연결 예정" unless the user explicitly asks for implementation notes.
- Do not invent real phone numbers or emails.

## Synthesis Rule

This project uses two prototype references:

- Codex prototype strengths: richer commerce structure, product curation, subscription plans, Rice Finder, detailed traceability, FAQ, B2B inquiry.
- Claude/Migok prototype strengths: stronger 미곡상사 branding, cream/gold/green tone, disciplined spacing, rice-sack truck, daylight background transition, clear transaction timeline.

Use the synthesis:

- Keep Codex's complete commerce content coverage.
- Apply the Migok Sangsa visual system, layout rules, spacing, and copy discipline.
- Preserve `#roadmap` as `문의 → 견적 → 입금 → 출고 → 하차 → 증빙`.
- Keep the detailed "한 포대마다 이력이 따라옵니다" section.
- Make Rice Finder a step-by-step quiz, not a dense settings panel.

## Implementation Rules

- Prefer simple static files until the user asks for a framework.
- Keep files readable: `index.html`, `styles.css`, `script.js`, `design.md`, and local assets.
- Navigation, quiz, form state, mobile menu, sticky CTA, reveal motion, and FAQ must work locally.
- Ensure responsive behavior at mobile, tablet, and desktop widths.

## Verification

- After changes, run a local server and inspect the page in the Codex in-app browser or a headless browser fallback.
- Capture desktop and mobile screenshots for visual QA.
- Fix visible layout overlap, cropped content, weak contrast, horizontal overflow, and broken interactions before handoff.
