# TradeAlgo VSL Production System

## Vision

An end-to-end automated system that takes a product definition + data source and produces a complete, compliance-clean, high-converting VSL video. Same audience, same brand, same voice — the only variables are the product, its data, and the story angle.

---

## Locked-In Defaults

These are constant across EVERY VSL. They don't change.

| Element | Default | Rationale |
|---------|---------|-----------|
| **Audience** | Affluent investors, $150K–$400K income, 35–55, currently using traditional advisors | TradeAlgo's target market |
| **Brand** | TradeAlgo (colors, fonts, logo, tone) | Single company, single brand |
| **Voice** | en-US-AndrewNeural (warm, authoritative, -5% rate) | Researched and tested — see config/voice-profiles.json |
| **Compliance** | TradeAlgo = signal provider, never money manager. Banned phrases list. Required disclaimers. | SEC/FTC compliance non-negotiable |
| **Funnel** | Hook → Problem → Agitate → Discovery → Solution → Proof → How It Works → Pricing → Objections → Authority → Urgency → Close | Proven VSL conversion architecture |

---

## Per-VSL Config (The Only Variables)

1. **Product config** — name, pricing tiers, API endpoint, key features
2. **Story angle** — which narrative template to use (proof-stack, problem-agitate-solve, etc.)
3. **Data points** — specific performance metrics, trade examples, proof elements to highlight

---

## Architecture

### Core Modules

#### 1. Data Ingestion (`src/data/`)
- API connectors for TradeAlgo products (Wealth Series API, future products)
- Data normalization and analysis engine
- Performance metrics extraction
- Auto-generates "selling points" from raw data

#### 2. Script Engine (`src/script/`)
- VSL script templates (proven frameworks: proof-stack, problem-agitate-solve, etc.)
- Template variables populated from data ingestion
- Compliance filter — auto-flags/removes money management language
- Text normalization (numbers→words, symbols→words) built into output
- Tone/pacing markers (break tags for pauses)

#### 3. Slide Engine (`src/slides/`)
- HTML slide templates (financial, data-heavy, comparison, testimonial, CTA)
- Auto-generates data visualizations from ingested data
- TradeAlgo brand system (colors, fonts, layouts)
- Animation presets

#### 4. Voice Engine (`src/voice/`)
- Voice profile library (config/voice-profiles.json)
- Text normalization pipeline — single source of truth (`src/normalize-text.mjs`)
- TTS generation with SSML break tag handling (split→generate→silence→concat)
- Audio quality validation

#### 5. Video Engine (`src/video/`)
- Slide recording via Puppeteer (headless Chromium)
- Audio-video sync from manifest timing
- Compression profiles (Telegram ≤15MB, YouTube, web embed)

#### 6. Compliance Module (`src/compliance/`)
- TradeAlgo-specific rules (signal provider, not money manager)
- Required disclaimers by product type
- Banned phrases dictionary
- Auto-scan and flag before production

### Config

```
config/
  defaults.json          — voice, resolution, bitrate, timing defaults
  voice-profiles.json    — voice options with research rationale
products/
  wealth-series.json     — API endpoints, pricing, audience, compliance rules
  [future-product].json
```

### Projects (Output)

```
projects/
  wealth-series/         — first VSL project
    slides.html          — slide deck
    script.md            — voiceover script
    audio/               — generated MP3s (gitignored)
    video/               — generated MP4s (gitignored)
```

### CLI

```bash
# Full pipeline
node vsl.mjs create --product wealth-series --template proof-stack

# Individual stages
node vsl.mjs generate-audio --project wealth-series
node vsl.mjs render --project wealth-series --compress telegram,youtube
```

---

## Current Project: Wealth Series VSL

This is project #1 built on this system. The Wealth Series VSL is a 22-minute proof-stack VSL for TradeAlgo's AI-powered signal portfolios ($25K/$50K/$100K tiers).

### Status
- [x] Phase 1: Research & data ingestion (14 API data files)
- [x] Phase 2a: Creative brief (avatar, emotional journey, proof points, compliance)
- [x] Phase 2b: Full voiceover script (71 slides, ~2,800 spoken words)
- [x] Phase 3a: Animated HTML slide deck (71 slides, 1920x1080)
- [x] Phase 3b: Audio pipeline (node-edge-tts, SSML break handling, silence generation)
- [x] Phase 3c: Video pipeline (Puppeteer screenshots + ffmpeg assembly)
- [x] Phase 3d: Compression (two-pass H.264, Telegram-ready ≤15MB)
- [x] Bug fix: SSML tags spoken aloud → split/silence/concat approach
- [ ] **NOW**: Text normalization (numbers→words) + audio regeneration
- [ ] Refactor into production system architecture

### Key Files
- `projects/wealth-series/slides.html` — slide deck
- `projects/wealth-series/script.md` — voiceover script
- `src/generate-audio.mjs` — audio generation pipeline
- `src/generate-video.mjs` — video generation pipeline
- `src/normalize-text.mjs` — text normalization (single source of truth)
- `src/compress.mjs` — video compression

---

*Ship the working VSL first, then refactor into the full system.*

*Last updated: March 6, 2026*
