# TradeAlgo Brand System
## Version 1.1 — Brand Guidelines (Nov 2025)

---

## Contents

1. [Brand Overview](#1-brand-overview) — Mission, Vision, Values, One-liner
2. [Visual Identity](#2-visual-identity) — Logo, Color Palette, Typography, Iconography
3. [Design System](#3-design-system) — Core Components
4. [Voice & Messaging](#4-voice--messaging) — Tone of Voice, Messaging Pillars, Dos & Don'ts
5. [Resources](#5-resources) — Brand Assets, Visual References

---

## 1. Brand Overview

### Mission

> TradeAlgo provides AI-powered analytics and easy-digestible learning for novice to intermediate traders all in one convenient platform.

### Vision

Become the go-to platform where every trader — regardless of experience level — can access institutional-grade analytics and education in a single, intuitive experience.

### Values

| Value | Description |
|-------|-------------|
| **Clarity** | We simplify complexity without dumbing it down |
| **Empowerment** | We equip traders to act with confidence and purpose |
| **Integrity** | We uphold accuracy, transparency, and honest communication |
| **Innovation** | We leverage AI and data to continuously raise the bar |

### One-liner

> AI-powered analytics and education for every trader — all in one platform.

### Positioning

Analytics & signals PUBLISHING company (like Motley Fool).

**BANNED terminology:** securities, RIA, registered investment advisor, fiduciary, custodian, SEC, regulated, compliance, manages money.

**USE instead:** stocks, execution partner, brokerage partner, signal publications.

---

## 2. Visual Identity

### 2.1 Logo

#### Full Logo (Wordmark + Glyph)
- Glyph mark + "TradeAlgo" wordmark combined
- Use for: websites, communications, presentations, headers
- Purpose: Maximum brand recognition

#### Brandmark (Glyph Only)
- Simplified glyph without wordmark
- Use for: app icons, favicons, social avatars, subtle brand touches
- Use when full logo would be too small or visually dense

#### Logo Variants

| Variant | Background | Foreground | Usage |
|---------|-----------|------------|-------|
| Full Logo — Dark | Dark / `#1C1C1E` | White | Primary usage on dark surfaces |
| Glyph — Dark | Dark / `#1C1C1E` | White | Icons, compact placements on dark |
| Full Logo — Light | Light / `#F2F2F5` | Black | Usage on light backgrounds |
| Glyph — Light | Light / `#F2F2F5` | Black | Icons, compact placements on light |

#### Logo Files

SVG logo files are available in `brand-guidelines/logos/`:
- `tradealgo-full-white.svg` — Full logo, white (for dark backgrounds)
- `tradealgo-glyph-white.svg` — Glyph only, white
- `tradealgo-full-black.svg` — Full logo, black (for light backgrounds)
- `tradealgo-glyph-black.svg` — Glyph only, black

---

### 2.2 Color Palette

#### Primary Colours

| Token | Hex | Usage |
|-------|-----|-------|
| primary / blue / main | `#007BFF` | Primary brand blue — buttons, links, key actions |
| primary / blue / light | `#008FFF` | Hover states, lighter accents |
| primary / blue / accent | `#BBE2FF` | Backgrounds, highlights, tags |
| primary / black / main | `#1C1C1E` | Dark surfaces, headers, primary dark |
| primary / black / light | `#3C3C3F` | Secondary dark surfaces |
| primary / black / accent | `#F2F2F5` | Light borders, dividers, subtle backgrounds |

#### Foreground Colours (Light Mode)

| Token | Hex | Usage |
|-------|-----|-------|
| text / primary | `#202021` | Primary body text |
| text / secondary | `#636465` | Secondary/muted text |
| text / disabled | `#9A9B9C` | Disabled states, placeholder text |

#### Foreground Colours (Dark Mode)

| Token | Hex | Usage |
|-------|-----|-------|
| text / primary | `#FFFFFF` | Primary body text (dark mode) |
| text / secondary | `#BABABB` | Secondary text (dark mode) |
| text / disabled | `#727274` | Disabled states (dark mode) |

#### Background Colours

| Token | Hex | Usage |
|-------|-----|-------|
| background / main (light) | `#F8FAFC` | Light mode page background |
| background / main (dark) | `#3C3C3F` | Dark mode page background |

#### Sentiment Colours

| Token | Hex | Usage |
|-------|-----|-------|
| success / main | `#2E7D32` | Success states, positive indicators |
| warning / main | `#EF6C00` | Warning states, caution indicators |
| error / main | `#202021` | Error states, destructive actions |

> **Note:** The previous `#0a8754` green was used for CTA buttons in the VSL. The official brand primary is **blue `#007BFF`**. VSL CTA color may need Carlos's call — keep green for conversion or switch to brand blue.

---

### 2.3 Typography

**Primary Typeface:** Inter (Google Fonts)
- Download: https://fonts.google.com/specimen/Inter

#### Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, paragraphs |
| Medium | 500 | Emphasis, labels, navigation |
| SemiBold | 600 | Subheadings, buttons |
| Bold | 700 | Headlines, CTAs, key data |

#### Size Scale

| Token | Size | Usage |
|-------|------|-------|
| h1 | 96px | Hero headlines |
| h2 | 60px | Section headers |
| h3 | 48px | Sub-sections |
| h4 | 36px | Card headers |
| h5 | 24px | Small headers |
| h6 | 20px | Labels |
| body | 16px | Primary body text |
| body-sm | 14px | Secondary body text |
| overline | 12px | Overlines, tags |
| caption | 12px | Captions, fine print |

---

### 2.4 Iconography

- **Icon Set:** Material Icons — Rounded style
- Reference: https://mui.com/material-ui/material-icons/?theme=Rounded
- Use rounded variants consistently across all surfaces

---

## 3. Design System

### Framework

- **UI Library:** Material UI (MUI)
- **Figma:** Active design system maintained daily
- Reference: https://mui.com/material-ui/getting-started

### Core Components

Built on MUI defaults, themed with TradeAlgo color palette and Inter typeface. Key patterns visible in product designs:

- **Navigation sidebar:** Dark (`#1C1C1E`) with white text, glyph logo top-left, section icons (Material Rounded)
- **Content area:** Light (`#F8FAFC`) background with card-based layouts
- **Product cards:** Rounded corners, gradient or solid backgrounds, "Learn More" CTAs with arrow icons
- **Modal/dialog overlays:** Dark glass effect with structured content sections
- **CTA buttons:** Primary blue (`#007BFF`) with white text, rounded, or outlined dark variants
- **Badges/tags:** "New" badge in blue/teal for feature flags (e.g., Wealth Series)
- **TradeGPT widget:** Floating bottom-right assistant button with glyph icon

---

## 4. Voice & Messaging

### 4.1 Tone of Voice

**Overall:** Balanced-to-Bold

| Trait | Description |
|-------|-------------|
| **Intelligent** | Clarity, data-driven logic, composure. Avoids jargon, favors insight. |
| **Empowering** | Inspires action. Reader feels capable, not overwhelmed. |
| **Professional** | No hype, no gimmicks — calm control. |

---

### 4.2 Messaging Pillar: Empowerment Through Clarity

> We simplify trading without dumbing it down, equipping every trader to act with confidence and purpose.

#### Proof Points

- Easy-to-digest education and transparent analytics
- Step-by-step learning designed for progress
- Tools that teach traders to think, not just react
- Education that builds skill, not dependency
- Structured lessons tied to live market examples
- Balanced mix of actionable alerts and reasoning behind them
- Open explanations of signals, AI models, and data sources
- Clear disclosure of risk and performance assumptions
- Community-driven feedback and accountability

---

### 4.3 Copy Dos & Don'ts

#### DO:
- Speak with clarity and control
- Write in short, confident sentences — avoid clutter or filler
- Empower the reader — frame copy to make the user feel the potential
- Educate through insight — make technical education digestible
- Uphold accuracy and integrity — concrete phrasing over vague promises
- Reflect calm confidence — assertive but never arrogant

#### DON'T:
- Overpromise or oversell
- Use hype words: "revolutionary," "game-changing," "guaranteed"
- Use fear or FOMO
- Assume reader knows every trading term — provide context
- Drift into generic financial cliches ("Take control of your future," "Maximize profits," "Trade smarter, not harder")
- Break consistency across channels — same tone everywhere

---

## 5. Resources

### 5.1 Brand Assets

Logo files (SVG) are in `brand-guidelines/logos/`. Four variants provided:

1. **Full Logo — White on Dark** (primary)
2. **Glyph — White on Dark**
3. **Full Logo — Black on Light**
4. **Glyph — Black on Light**

Source brand guideline PDFs are in `brand-guidelines/source-pdfs/`.

---

### 5.2 Product Portfolio (Visual References)

Current product designs shown in brand guidelines as reference for maintaining visual consistency:

#### Wealth Series Products
| Product | Tagline |
|---------|---------|
| **Wealth Series Core** | Elevated trading with exclusive tools and insights, powered by AI |
| **Wealth Series Auto** | Smart, secure, and hands-free investing. Connects to your investment account and executes trades with RIA-level oversight |
| **Wealth Series (Premium)** | Leverage cutting-edge AI technology coupled with advanced diversification techniques |
| **Wealth Series Lite** | Smart, AI stock recommendations designed to fit every investor's strategy, from beginners to experts |

#### Wealth Series Auto — Portfolio Tiers
| Tier | Focus | Strategies |
|------|-------|------------|
| **Atlas** | Growth Focused | 3 Portfolio Strategies |
| **Titan** | Balance Focused | 3 Portfolio Strategies |
| **Everest** | Wealth Management Focused | 5 Portfolio Strategies |

#### Other Products
| Product | Description |
|---------|-------------|
| **TradeAlgo Terminal** | Trade smarter, trade better — experience TradeAlgo at its best |
| **Emerald Income Alerts** | Elevate your trading strategy and boost your profit with Credit Spreads |
| **Platinum Program** | Profitable options trading made easy |
| **TradeGPT** | Your AI Trading Assistant — Empower Your Trading Decisions with AI-Driven Insights |
| **Options Mentorship** | 1 on 1 Mentorship with our analysts and launch your portfolio to new heights |
| **Options Academy** | Demystify the complexities of trading options |
| **AI Options Alerts** | Stay ahead of the market with guaranteed trade opportunities each day |

---

## 6. VSL-Specific Overrides (from Carlos)

These override general brand guidelines for VSL/sales funnel contexts:

- **Villain = market complexity** (NOT financial advisors)
- Font sizes: nothing below 22px, headlines 48-72px, data numbers 64px+
- White/light backgrounds for data slides
- Investment figure: $100M+ over 3 years (NOT $12M over a decade)
- All numbers spelled as words in voiceover
- Symbols converted: % → percent, $ → dollars, & → and

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Nov 2024 | Initial extraction from brand guidelines |
| 1.1 | Nov 2025 | Updated color hex codes (refined values across palette), added 4 logo variants, added product portfolio visual references, restructured to match official guideline sections (01–05) |
