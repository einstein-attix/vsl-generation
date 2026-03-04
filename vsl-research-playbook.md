# VSL Research & Intelligence Playbook
## Stage 1: The Complete Operational Guide

**Purpose:** Before a single word of VSL copy is written, you need ammunition. This playbook turns raw market data into a structured research package that feeds directly into the Creative Brief (Stage 2) and Copy Engine (Stage 3). Every claim in the VSL, every pain point referenced, every proof element stacked — it all originates here.

**Time investment:** 4-8 hours per VSL project (manual). 30-60 minutes (automated pipeline).

**Output:** A completed Research Package document (template at end of this playbook) that the copy engine consumes as structured input.

---

## 1. MARKET SCRAPING — Audience Intelligence Gathering

### 1.1 The Principle

You are not looking for what YOU think the audience feels. You are looking for the EXACT WORDS they use to describe their problems, desires, and frustrations. The gap between "concerned about retirement" (marketer language) and "I lie awake at 3am wondering if I'll have to work until I'm 75" (customer language) is the difference between copy that converts and copy that doesn't.

You are building a **Voice of Customer (VoC) document** — a collection of verbatim quotes, recurring phrases, emotional patterns, and belief systems that the copy engine will weave into the VSL.

### 1.2 Platform-by-Platform Scraping Guide

---

#### REDDIT — The #1 Source

**Why Reddit:** Anonymous = honest. People say things on Reddit they'd never post under their real name. The financial subreddits are particularly rich because people share real losses, real fears, and real frustrations with zero filter.

**Target Subreddits for Financial VSLs:**

| Subreddit | What You'll Find | Subscriber Mindset |
|-----------|-----------------|-------------------|
| r/investing | Mainstream investment frustration, advisor complaints | Moderate, seeking validation |
| r/options | Options-specific pain points, strategy confusion | More sophisticated, action-oriented |
| r/stocks | Individual stock anxiety, FOMO, loss stories | Mixed experience levels |
| r/personalfinance | Retirement anxiety, savings fear, advisor distrust | Conservative, worried |
| r/financialindependence | FIRE burnout, market timing anxiety, withdrawal fears | High-intent, specific goals |
| r/Bogleheads | Index fund zealotry, frustration with active management | Skeptical of newsletters |
| r/wallstreetbets | Loss porn, gambling psychology, get-rich-quick desire | Younger, risk-seeking |
| r/thetagang | Options income generation, covered call frustration | Income-focused, pragmatic |
| r/dividends | Passive income desire, yield chasing | Conservative, income-focused |
| r/retirement | Actual retirees with real financial anxiety | Older demo, high anxiety |

**Exact Search Queries to Run:**

Use Reddit's search within each subreddit. Sort by "Top" (past year) and "Hot" for current sentiment.

```
Within r/investing:
- "financial advisor" (complaints about advisors)
- "lost money" OR "lost everything" (pain stories)
- "newsletter" OR "subscription" (attitudes toward paid advice)
- "retirement scared" OR "retirement worried" (core fear)
- "what should I do" (people seeking guidance = your buyer)
- "options trading" AND "beginner" (entry point for your product)
- "passive income" AND "market" (desire language)
- "inflation" AND "savings" (current fear trigger)
- "feel like the market is rigged" (enemy framework fuel)
- "financial advisor worth it" (objection research)

Within r/options:
- "consistent income" OR "weekly income" (desire language)
- "blew up my account" (pain stories)
- "options service" OR "options newsletter" (competitor attitudes)
- "what am I doing wrong" (frustration language)
- "afraid of options" (objection research)
- "too complicated" (objection research)
- "screen time" OR "all day watching" (pain point for your "15 min/week" angle)

Within r/personalfinance:
- "can I retire" OR "enough to retire" (core anxiety)
- "financial advisor fees" OR "1% fee" (enemy framework)
- "behind on retirement" (pain language)
- "spouse worried about money" (emotional trigger)
```

**What to Extract from Each Thread:**

For every relevant thread, capture:
1. **Verbatim quotes** — Copy-paste the exact language. Do not paraphrase.
2. **Upvote count** — Higher upvotes = more people feel this way. A comment with 500 upvotes is a validated pain point.
3. **Emotional intensity** — Rate 1-5. "I'm a little concerned" (2) vs. "I can't sleep, my wife and I fight about money every week" (5).
4. **Category** — Tag each quote: PAIN, DESIRE, OBJECTION, FEAR, FRUSTRATION, BELIEF, ENEMY.
5. **Specificity** — Flag quotes with specific numbers, timeframes, or scenarios. These are gold for copy.

**Manual Method (15-20 minutes per subreddit):**

1. Go to reddit.com/r/[subreddit]
2. Use the search bar within the subreddit
3. Run each query above
4. Open the top 5-10 threads for each query
5. Scroll through comments, copy-paste standout quotes into a spreadsheet
6. Tag each quote with category and emotional intensity

**Automated Method (Playwright/Python):**

```python
# Pseudocode — Reddit scraper using PRAW (Reddit API wrapper)
import praw

reddit = praw.Reddit(
    client_id="YOUR_CLIENT_ID",
    client_secret="YOUR_CLIENT_SECRET",
    user_agent="VSL Research Bot 1.0"
)

subreddits = ["investing", "options", "personalfinance", "retirement"]
queries = [
    "financial advisor",
    "lost money",
    "retirement scared",
    "options newsletter",
    "passive income market",
]

results = []

for sub_name in subreddits:
    subreddit = reddit.subreddit(sub_name)
    for query in queries:
        for submission in subreddit.search(query, sort="top", time_filter="year", limit=10):
            # Get submission text
            results.append({
                "subreddit": sub_name,
                "query": query,
                "title": submission.title,
                "text": submission.selftext,
                "score": submission.score,
                "url": submission.url,
                "num_comments": submission.num_comments,
            })
            # Get top comments
            submission.comments.replace_more(limit=0)
            for comment in submission.comments[:20]:
                results.append({
                    "subreddit": sub_name,
                    "query": query,
                    "type": "comment",
                    "text": comment.body,
                    "score": comment.score,
                    "parent_title": submission.title,
                })
```

**Reddit API Access:**
- Create an app at reddit.com/prefs/apps
- Select "script" type
- Rate limit: 60 requests/minute
- PRAW library handles auth and pagination

---

#### AMAZON REVIEWS — Competitor Product Intelligence

**Why Amazon:** People who bought competing books, courses, and tools leave detailed reviews explaining what worked, what didn't, and what they wish existed. 1-star and 5-star reviews are the most useful.

**What to Search For (Financial Niche):**

Search Amazon Books for:
- "options trading for beginners"
- "options income strategies"
- "stock market newsletter"
- "trading system"
- "passive income investing"
- "retirement income strategies"

**Target the following book categories:**
- Business & Money > Investing > Options
- Business & Money > Investing > Stocks
- Business & Money > Personal Finance > Retirement Planning

**Which Reviews to Read:**

| Star Rating | What It Tells You | What to Extract |
|-------------|-------------------|----------------|
| 1-star | What people HATE about existing solutions | Pain points, unmet needs, objections |
| 2-star | Nuanced disappointment — "it was OK but..." | Gaps in existing products |
| 3-star | Specific feature requests and wishlists | Desired features for positioning |
| 5-star | What people LOVE and are willing to pay for | Desire language, transformation stories |
| 4-star | Often the most thoughtful, balanced reviews | Realistic expectations |

**Exact Process:**

1. Search Amazon for the category keywords above
2. Open the top 5-10 books by review count (not rating — you want volume)
3. For each book:
   - Read the 10 most recent 1-star reviews
   - Read the 10 most helpful 5-star reviews
   - Read 5-10 3-star reviews
4. Copy verbatim quotes into your research doc
5. Pay special attention to phrases like:
   - "I wish this book had..."
   - "The problem is..."
   - "What I really needed was..."
   - "This changed everything because..."
   - "Finally someone explains..."
   - "I've tried everything and..."

**Example Finds (Real patterns from options trading books):**

```
1-STAR PATTERNS:
"Too much theory, not enough actionable trades"
"Written for people who already know options — useless for beginners"
"No real examples with actual dollar amounts"
"Author clearly hasn't traded with real money in years"

5-STAR PATTERNS:
"For the first time, I actually understand how to generate weekly income"
"I made back the cost of this book on my first trade"
"Simple enough that I could follow along without a finance degree"
"My portfolio is up 34% since I started using this approach"
```

These become direct inputs for the copy engine — the 1-star complaints become your "false solutions to destroy" section, and the 5-star language becomes your desire/transformation language.

**Scraping Tool:** amazon-review-scraper (npm package), or Playwright with pagination handling. Amazon actively blocks scrapers, so use rotating proxies and rate limiting (2-3 second delays between requests).

---

#### YOUTUBE COMMENTS — Emotional Temperature Check

**Why YouTube:** YouTube comments on financial content are emotionally raw and often include specific personal stories. The comment sections on videos about "retirement planning mistakes" or "options trading for income" are goldmines.

**Search Queries on YouTube:**

```
- "options trading for beginners" (sort by view count)
- "how to generate income from options"
- "retirement planning mistakes"
- "financial advisor ripoff" OR "financial advisor fees"
- "stock market newsletter review"
- "passive income from stocks"
- "[competitor name] review" (e.g., "Stansberry review", "Motley Fool review")
- "is [product] worth it"
- "I lost money trading options"
```

**Process:**

1. Search YouTube with each query
2. Open the top 3-5 videos by view count (50K+ views preferred)
3. Sort comments by "Top comments" (most engagement)
4. Read the top 30-50 comments
5. Look for comments with high reply counts — these indicate emotional resonance
6. Extract verbatim quotes, especially:
   - Personal loss stories with specific dollar amounts
   - "I've been doing X for Y years and..." statements
   - Questions that reveal knowledge gaps or fears
   - Anger directed at financial institutions or advisors
   - Success stories from people who found a system that works

**YouTube Data API Access:**
- Google Cloud Console → Enable YouTube Data API v3
- Free quota: 10,000 units/day
- commentThreads.list endpoint to pull comments
- 1 API call = ~20 comments with replies

**Automated approach:**

```python
# YouTube comment scraper pseudocode
from googleapiclient.discovery import build

youtube = build('youtube', 'v3', developerKey='YOUR_API_KEY')

def get_comments(video_id, max_results=100):
    comments = []
    request = youtube.commentThreads().list(
        part='snippet',
        videoId=video_id,
        maxResults=min(max_results, 100),
        order='relevance',
        textFormat='plainText'
    )
    response = request.execute()
    for item in response['items']:
        comment = item['snippet']['topLevelComment']['snippet']
        comments.append({
            'text': comment['textDisplay'],
            'likes': comment['likeCount'],
            'date': comment['publishedAt'],
            'author': comment['authorDisplayName'],
        })
    return comments

# Search for videos first, then pull comments from top results
search_request = youtube.search().list(
    part='snippet',
    q='options trading income strategy',
    type='video',
    order='viewCount',
    maxResults=10
)
```

---

#### TRUSTPILOT / BBB — Competitor Complaint Mining

**Why:** When people complain about your competitors on Trustpilot or BBB, they are literally writing your sales copy for you. They're telling you exactly what they wanted, what they were promised, and what they didn't get.

**What to Search:**

Go to trustpilot.com and search for:
- Stansberry Research
- The Motley Fool
- Oxford Club
- Agora Financial
- Palm Beach Research Group
- InvestorPlace
- Seeking Alpha (premium)
- Any direct competitor in your niche

**What to Extract from 1-2 Star Reviews:**

- Specific complaints about product quality
- Billing/refund issues (tells you what guarantees to emphasize)
- "They promised X but delivered Y" (tells you what NOT to promise, or what to actually deliver)
- "I cancelled because..." (objection and churn data)
- Recurring patterns in complaints (if 50 people complain about the same thing, that's a positioning opportunity)

**Example Real Patterns from Financial Newsletter Trustpilot Reviews:**

```
RECURRING COMPLAINTS (these become your "false solutions" in the VSL):
- "Auto-renewed at a much higher price without warning" → YOUR ANGLE: transparent pricing
- "Recommendations are too vague — just 'buy tech stocks'" → YOUR ANGLE: exact entry/exit points
- "By the time I got the alert, the price had already moved" → YOUR ANGLE: priority/early alerts
- "Too many upsells and spam emails" → YOUR ANGLE: no-upsell positioning
- "Can't reach customer service to cancel" → YOUR ANGLE: easy cancellation, strong guarantee
- "The 'guru' hasn't traded real money in years" → YOUR ANGLE: real track record, live portfolio
```

---

#### FACEBOOK GROUPS — Deep Community Intelligence

**Why:** Facebook groups are where your target audience has unfiltered discussions. The key groups for financial audiences tend to be large (10K-100K+ members) and highly active.

**Groups to Join (Financial Niche):**

Search Facebook Groups for:
- "options trading"
- "stock market investing"
- "retirement planning"
- "dividend investing"
- "passive income investing"
- "financial freedom"
- "day trading" / "swing trading"

**Process:**
1. Join 5-10 relevant groups (may require answering screening questions)
2. Use the group search function to find posts about pain points
3. Search within the group for:
   - "frustrated"
   - "lost money"
   - "what am I doing wrong"
   - "recommendation" or "subscribe"
   - "worth it"
   - "scam"
4. Read the comments on posts with high engagement (50+ comments)
5. Extract verbatim quotes

**Note:** Facebook groups cannot be easily automated. This is primarily a manual research task. Budget 30-45 minutes per group.

---

#### QUORA — Question-Based Research

**Why:** Quora questions reveal exactly what your audience is confused about and what they're searching for. The questions themselves are often more valuable than the answers.

**Search Queries:**

Go to quora.com and search for:
```
- "Is it possible to make consistent income from options trading?"
- "What's the best stock newsletter?"
- "Are financial advisors worth the fees?"
- "How can I learn options trading without losing money?"
- "What do most options traders do wrong?"
- "Can you really retire on options income?"
- "What's the difference between good and bad trading newsletters?"
```

**What to Extract:**
- The QUESTIONS themselves (these become fascinations in the VSL)
- The most upvoted answers (reveals what the audience finds credible)
- The comments arguing with answers (reveals objections and skepticism)

---

#### FORUMS & NICHE COMMUNITIES

**Financial Niche:**
- Elite Trader (elitetrader.com) — Professional-level options discussion
- Trade2Win (trade2win.com) — UK-based but relevant strategies
- Investopedia forums — Beginner-oriented
- StockTwits — Real-time sentiment on specific tickers
- r/algotrading — Quantitative approach, skeptical of "gurus"

**Health Niche:**
- WebMD community forums
- PatientsLikeMe
- Health-specific subreddits (r/supplements, r/nootropics, r/keto, etc.)
- Facebook health groups

**Biz-Op Niche:**
- Warrior Forum
- BlackHatWorld
- r/entrepreneur, r/smallbusiness
- Indie Hackers

---

### 1.3 AI Analysis of Scraped Data

Once you have raw data collected (typically 200-500 quotes/data points per project), use Claude to analyze and categorize it.

**Prompt 1 — Initial Categorization:**

```
I have collected raw voice-of-customer data for a financial
newsletter VSL targeting 45-65 year old male investors interested
in options trading for income.

Here is the raw data (source: Reddit, Amazon reviews, YouTube
comments, Trustpilot):

[PASTE RAW DATA HERE — all verbatim quotes]

Analyze this data and produce the following:

1. TOP 10 PAIN POINTS — ranked by frequency and emotional
   intensity. For each, include:
   - The pain point in plain language
   - 3-5 verbatim quotes that express it
   - Emotional intensity score (1-5)
   - How many times this theme appeared in the data

2. TOP 10 DESIRES — what they want, ranked by frequency.
   For each, include:
   - The desire in plain language
   - 3-5 verbatim quotes
   - Intensity score (1-5)

3. TOP 5 OBJECTIONS — what would stop them from buying.
   For each:
   - The objection stated clearly
   - Verbatim quotes expressing this objection
   - Suggested counter-argument

4. TOP 5 FALSE SOLUTIONS — things they've tried that
   didn't work. For each:
   - What they tried
   - Why it failed (in their words)
   - Verbatim quotes

5. ENEMY IDENTIFICATION — who/what do they blame?
   (Wall Street, advisors, the Fed, themselves, etc.)
   - Ranked list of "enemies"
   - Verbatim quotes expressing anger/frustration toward each

6. LANGUAGE PATTERNS — recurring phrases, metaphors, and
   emotional vocabulary:
   - List of exact phrases used 3+ times
   - Common metaphors (e.g., "casino," "rigged game," "rat race")
   - Emotional vocabulary unique to this audience

7. BELIEF SYSTEMS — what do they currently believe that
   the VSL needs to either reinforce or disrupt?
   - Beliefs that HELP conversion (reinforce these)
   - Beliefs that HURT conversion (disrupt these)
```

**Prompt 2 — Voice of Customer Document:**

```
Using the categorized data from the analysis, create a
Voice of Customer (VoC) document formatted for use by a
direct response copywriter.

For each category, provide:

PAIN LANGUAGE BANK:
Write 20 "pain sentences" in the first person that a
copywriter can drop directly into VSL copy. These should
use the exact vocabulary from the research data. Example:
- "I've watched my 401k shrink three times in the last
  decade and I'm running out of time to recover."
- "My advisor charges me $5,000 a year and I could've
  done better with an index fund."

DESIRE LANGUAGE BANK:
Write 20 "desire sentences" in the second person ("you")
that paint the picture of the transformation. Example:
- "You check your portfolio on Sunday morning, see three
  new winning trades, and go back to enjoying your weekend."
- "Your spouse asks how the investments are going and for
  the first time, you smile instead of changing the subject."

OBJECTION BANK:
Write 10 objections phrased exactly as the viewer would
think them, followed by a one-sentence reframe. Example:
- OBJECTION: "I've been burned by newsletters before —
  they all overpromise and underdeliver."
- REFRAME: "That's exactly why we publish our full,
  audited track record — every single trade, winners
  AND losers."

FASCINATION SEEDS:
Write 15 fascinations (curiosity bullets) derived from
the research data that could be used in the VSL. Use
these formulas:
- "The [specific thing] that [surprising result]"
- "Why [common belief] is actually [counterintuitive truth]"
- "The [number]-[timeframe] [method] that [result]
  without [pain]"
```

**Prompt 3 — Competitive Positioning:**

```
Based on the research data, identify positioning
opportunities for our product:

1. GAPS IN THE MARKET — What are competitors NOT delivering
   that customers are screaming for?

2. DIFFERENTIATORS — Based on competitor complaints, what
   should we emphasize about our product?

3. UNIQUE MECHANISM ANGLES — How can we frame our mechanism
   as fundamentally different from what they've tried?

4. PRICE POSITIONING — Based on competitor pricing and
   customer complaints about value, how should we frame
   our price?

5. GUARANTEE POSITIONING — What specific guarantee would
   most effectively address the objections in the data?
```

---

### 1.4 Building the Voice of Customer Document

The VoC document is the primary output of the market scraping process. Here is the exact format:

```
========================================
VOICE OF CUSTOMER DOCUMENT
Product: [Product Name]
Niche: [Financial / Health / Biz-Op]
Date: [Date]
Data Sources: [List all sources]
Total Data Points Analyzed: [Number]
========================================

SECTION 1: PAIN POINTS (Ranked)
─────────────────────────────
1. [Pain Point Name] — Intensity: [X/5], Frequency: [X mentions]
   Verbatim quotes:
   - "[exact quote]" — Source: [Reddit/r/investing, 247 upvotes]
   - "[exact quote]" — Source: [Amazon review, 1-star]
   - "[exact quote]" — Source: [YouTube comment, 89 likes]

   Copywriter notes: [How to use this in the VSL]

2. [Next pain point...]
[Continue for top 10]

SECTION 2: DESIRES (Ranked)
─────────────────────────────
[Same format as above]

SECTION 3: OBJECTIONS
─────────────────────────────
[Same format, plus counter-argument for each]

SECTION 4: FALSE SOLUTIONS
─────────────────────────────
[Same format]

SECTION 5: ENEMY MAP
─────────────────────────────
[Ranked list of villains/enemies with supporting quotes]

SECTION 6: LANGUAGE BANK
─────────────────────────────
Pain sentences: [20 first-person sentences]
Desire sentences: [20 second-person sentences]
Power phrases: [List of recurring phrases]
Metaphors: [List of metaphors used by the audience]

SECTION 7: BELIEF SYSTEMS
─────────────────────────────
Beliefs to reinforce: [List]
Beliefs to disrupt: [List]
```

---

## 2. SWIPE FILE ANALYSIS — Reverse-Engineering Winning VSLs

### 2.1 Finding Winning VSLs

A "winning" VSL is one that has been running consistently on paid traffic for 3+ months. If an advertiser is spending money on a VSL for months, it's profitable — and therefore worth studying.

**Where to Find Them:**

#### Meta Ad Library (ads.facebook.com/ads/library)
- Search by advertiser name: "Stansberry Research," "The Motley Fool," "Oxford Club," "Palm Beach Research Group," "InvestorPlace," "Banyan Hill," "Legacy Research"
- Filter: Active ads, United States
- Look for VIDEO ads that have been running for 90+ days (check "Started running" date)
- These long-running video ads are almost certainly VSLs or VSL front-ends
- Click through to the landing page — the full VSL is usually there

#### Google Ads Transparency Center (adstransparency.google.com)
- Search the same advertiser names
- Look for YouTube pre-roll ads and display ads pointing to VSL pages
- Long-running campaigns = winning creative

#### Funnel Spy Tools
- **AdSpy** (adspy.com) — $149/mo, searchable database of Facebook/Instagram ads. Search "options trading," "retirement income," "newsletter." Filter by longest running.
- **BigSpy** (bigspy.com) — Similar to AdSpy, slightly cheaper. Good for multi-platform coverage.
- **PowerAdSpy** (poweradspy.com) — Includes YouTube ad tracking.
- **SpyFu** (spyfu.com) — Focused on Google Ads/SEO. Shows competitor keyword spend. Useful for finding search-driven VSL funnels.
- **SimilarWeb** (similarweb.com) — Traffic analysis. Shows which competitor pages get the most traffic (their winning VSLs).
- **BuiltWith** (builtwith.com) — Shows tech stack of competitor sites (which video hosts, which payment processors, which email platforms).

#### Direct Competitor Research
1. Sign up for every competitor's email list using a dedicated research email
2. They will EMAIL you their best VSLs — that's their entire business model
3. Over 30 days, you'll receive 50-100+ promotional emails, many linking to VSLs
4. The VSLs they send REPEATEDLY are their winners

#### YouTube
- Search "[competitor name]" and look for their official channel
- Many financial publishers post VSLs directly on YouTube (sometimes unlisted, but findable through ad click-throughs)
- Search "Stansberry presentation" or "Agora financial presentation"

#### Funnel Archives
- **SwipeFile.com** — Curated collection of landing pages and funnels
- **Swiped.co** — Direct response swipe file
- **FunnelSpy** — Tracks complete funnel sequences
- **Wayback Machine** (web.archive.org) — Find historical versions of competitor VSL pages

### 2.2 Transcribing VSLs

Once you have the VSL video (or the page with the video), you need a text transcript.

**Method 1: AI Transcription (Fastest)**
- **OpenAI Whisper** (local or API)
  - Best accuracy for English narration
  - Handles background music well
  - API: $0.006/minute
  - Local: Free, requires GPU for speed
  ```bash
  # Local Whisper transcription
  pip install openai-whisper
  whisper video.mp4 --model medium --language en --output_format txt
  ```

- **AssemblyAI** (assemblyai.com)
  - Excellent accuracy, speaker diarization
  - $0.01/minute, plus formatting features
  - API returns timestamps per word (useful for later video production)

**Method 2: Browser-Based (No Download)**
- Play the VSL and use Chrome's built-in "Live Caption" feature
- Or use Otter.ai (otter.ai) in the browser while the VSL plays
- Or use TurboScribe (turboscribe.ai) — upload video file, get transcript

**Method 3: Manual (Highest Quality)**
- Rev.com — Human transcription, $1.50/minute
- Use for your most important swipe file entries where accuracy matters
- Turnaround: 12-24 hours

**Method 4: Screen Recording + Auto-Transcript**
- Use OBS or Loom to record yourself watching the VSL
- Upload the recording to YouTube (unlisted)
- YouTube auto-generates a transcript (free, decent accuracy)
- Download the transcript from YouTube Studio

### 2.3 VSL Decomposition Framework

Once you have the transcript, analyze it using this structural framework. This is the core analytical process that turns a raw transcript into a reusable pattern.

**The Decomposition Template:**

```
VSL DECOMPOSITION
═══════════════════════════════════════
Source: [Company/Product name]
URL: [Where you found it]
Date analyzed: [Date]
Running since: [Approximate date, from ad library]
Estimated length: [Minutes]
Word count: [From transcript]
Niche: [Financial/Health/Biz-Op]
Estimated price point: [If you went through the funnel]
═══════════════════════════════════════

1. LEAD ANALYSIS
────────────────
Lead type: [Story / Prediction / Secret / Problem-Solution / Invitation]
First sentence: "[exact first sentence]"
Pattern interrupt technique: [What they did to grab attention]
Primary open loop: [The unanswered question that keeps you watching]
Secondary open loops: [Additional curiosity hooks]
Time to big idea hint: [How many seconds/words before the big idea is teased]
"You" first appearance: [What word/sentence number]
Emotional entry point: [Fear / Curiosity / Anger / Greed / Hope]
Lead word count: [words]
Lead quality score: [1-10, subjective]

Verbatim lead text (first 200 words):
"[Copy the first 200 words exactly]"

2. BIG IDEA
────────────
The big idea in one sentence: [Your summary]
How it's stated in the VSL: "[Verbatim]"
Is it counterintuitive? [Yes/No — explain]
Is it time-bound/urgent? [Yes/No — explain]
Is it specific? [Yes/No — explain]
What makes it believable: [List proof elements attached to the big idea]

3. MECHANISM ANALYSIS
─────────────────────
Mechanism name: [The proprietary name given to the system/method]
How it's introduced: "[Verbatim introduction sentence]"
Number of steps/components: [X]
Step 1: [Name and brief description]
Step 2: [Name and brief description]
Step 3: [Name and brief description]
Analogy used: "[Verbatim analogy]"
"Not your fault" messaging: [Yes/No — how it's framed]
Credentialing of mechanism: [What makes it credible — who created it, where it came from]
Mechanism word count: [words]

4. PROOF STACK MAP
──────────────────
List every proof element in order of appearance:

| # | Proof Type | Description | Specificity (1-5) | Placement |
|---|-----------|-------------|-------------------|-----------|
| 1 | Credential | "22 years at Goldman Sachs" | 5 | After mechanism |
| 2 | Data | "73% win rate over 847 trades" | 5 | Proof section |
| 3 | Social | "Robert K., retired teacher..." | 4 | Proof section |
| 4 | Demo | "Walk through of March 14 trade" | 5 | Proof section |
| 5 | Logical | "If institutions are buying..." | 3 | Mechanism section |
[Continue for all proof elements]

Total proof elements: [X]
Credential proof count: [X]
Data proof count: [X]
Social proof count: [X]
Demo proof count: [X]
Logical proof count: [X]

5. TRANSITION TECHNIQUES
─────────────────────────
List every major transition in the VSL:

| From → To | Transition phrase | Technique |
|-----------|------------------|-----------|
| Lead → Problem | "But here's the thing most people don't realize..." | Revelation bridge |
| Problem → Mechanism | "That's when I discovered something..." | Discovery transition |
| Mechanism → Proof | "Now, I know that sounds too good to be true..." | Objection anticipation |
| Proof → Offer | "So at this point you might be wondering..." | Assumptive bridge |
| Value stack → Price | "If you add all that up..." | Mathematical transition |

6. CLOSE ARCHITECTURE
─────────────────────
Price anchor: $[amount] — How it's established: [explanation]
Price reveal: $[actual price]
Price reframe: "[Verbatim — 'less than a cup of coffee per day']"
Value stack total: $[stacked amount]
Number of bonuses: [X]
Bonus 1: [Name, stated value, description]
Bonus 2: [Name, stated value, description]
[Continue]
Guarantee type: [30-day / 60-day / performance / keep bonuses]
Guarantee verbatim: "[Exact guarantee language]"
Urgency/scarcity mechanism: [What creates urgency]
CTA count: [How many times they ask for the sale]
CTA #1 verbatim: "[Exact CTA language]"
CTA #2 verbatim: "[Exact CTA language]"
Fence-sitter close: [How they handle people who are still hesitating]
Final sentence: "[Exact final sentence of the VSL]"

7. EMOTIONAL ARC MAP
─────────────────────
Map the emotional journey of the viewer through the VSL:

Minute 0-3 (Lead):      [Primary emotion: curiosity/fear/shock]
Minute 3-8 (Problem):   [Primary emotion: frustration/anger/helplessness]
Minute 8-15 (Mechanism): [Primary emotion: hope/intrigue/excitement]
Minute 15-25 (Proof):   [Primary emotion: belief/confidence/desire]
Minute 25-35 (Close):   [Primary emotion: urgency/fear of missing out/empowerment]

Emotional peaks: [Where does the VSL hit its highest emotional intensity?]
Pattern interrupts: [Where/how does the VSL break predictability?]
Open loop resolutions: [Where do the loops opened in the lead get closed?]

8. SCORING
──────────
Lead strength: [1-10]
Big idea originality: [1-10]
Mechanism clarity: [1-10]
Proof density: [1-10]
Emotional manipulation: [1-10]
Close effectiveness: [1-10]
Overall copywriting quality: [1-10]

What makes this VSL work: [2-3 sentences]
What's weak: [2-3 sentences]
What to steal for our VSL: [Specific elements to model]
```

**AI Prompt for Automated Decomposition:**

```
You are an expert direct response copywriter and VSL analyst
trained in the Agora/Stansberry tradition. I'm going to give
you the full transcript of a Video Sales Letter.

Analyze this VSL using the following framework and fill in
every field with specific, detailed observations.

[PASTE THE DECOMPOSITION TEMPLATE ABOVE]

Here is the VSL transcript:

[PASTE FULL TRANSCRIPT]

Be extremely specific. Quote the VSL verbatim wherever the
template asks for it. Do not summarize when you can quote.
Identify the exact lead type, the exact mechanism structure,
and map every single proof element in order.
```

### 2.4 Building a Searchable Pattern Library

After decomposing 10-20 VSLs, you have a pattern library. To make it searchable and useful for the copy engine:

**Vector Database Approach:**

1. **Chunk each decomposed VSL** into semantic units:
   - Each lead as a separate document
   - Each mechanism explanation as a separate document
   - Each proof element as a separate document
   - Each transition as a separate document
   - Each close sequence as a separate document

2. **Generate embeddings** for each chunk:
   ```python
   # Using OpenAI embeddings (or Voyage AI for better quality)
   from openai import OpenAI
   client = OpenAI()

   def embed_chunk(text, metadata):
       response = client.embeddings.create(
           model="text-embedding-3-small",
           input=text
       )
       return {
           "embedding": response.data[0].embedding,
           "text": text,
           "metadata": metadata  # {type: "lead", lead_type: "prediction", niche: "financial", ...}
       }
   ```

3. **Store in Weaviate or Pinecone:**
   ```python
   # Pseudocode for Weaviate
   import weaviate

   client = weaviate.Client("http://localhost:8080")

   # Create class
   client.schema.create_class({
       "class": "SwipeElement",
       "properties": [
           {"name": "text", "dataType": ["text"]},
           {"name": "element_type", "dataType": ["string"]},  # lead, mechanism, proof, transition, close
           {"name": "sub_type", "dataType": ["string"]},      # prediction_lead, story_lead, etc.
           {"name": "niche", "dataType": ["string"]},          # financial, health, biz-op
           {"name": "source_vsl", "dataType": ["string"]},     # Which VSL this came from
           {"name": "quality_score", "dataType": ["int"]},     # 1-10 rating
       ]
   })
   ```

4. **Query the library** when generating copy:
   ```python
   # "Find me the best prediction leads from financial VSLs"
   result = client.query.get("SwipeElement", ["text", "source_vsl", "quality_score"]) \
       .with_where({
           "operator": "And",
           "operands": [
               {"path": ["element_type"], "operator": "Equal", "valueString": "lead"},
               {"path": ["sub_type"], "operator": "Equal", "valueString": "prediction"},
               {"path": ["niche"], "operator": "Equal", "valueString": "financial"},
           ]
       }) \
       .with_limit(5) \
       .do()
   ```

   Or use semantic search:
   ```python
   # "Find proof elements about options trading track records"
   result = client.query.get("SwipeElement", ["text", "source_vsl"]) \
       .with_near_text({"concepts": ["options trading track record backtest results"]}) \
       .with_where({"path": ["element_type"], "operator": "Equal", "valueString": "proof"}) \
       .with_limit(10) \
       .do()
   ```

### 2.5 Example: Full Decomposition Walkthrough

**Scenario:** You've found a Stansberry Research VSL for their "Total Wealth" newsletter running on Facebook for 6+ months. You've transcribed it (8,400 words, approximately 42 minutes at narration pace).

Here's how the decomposition would look for the LEAD section:

```
1. LEAD ANALYSIS
────────────────
Lead type: Prediction
First sentence: "In the next 90 days, a financial event unlike
anything we've seen since 2008 is about to unfold — and most
Americans won't see it coming until it's too late."
Pattern interrupt: Bold, specific, time-bound prediction with
fear element
Primary open loop: What is this financial event? (Not revealed
until minute 8)
Secondary open loops:
  - "The one asset class that will surge" (teased at minute 2,
    revealed at minute 12)
  - "Why your 401k is in more danger than you think" (teased
    at minute 3, resolved at minute 6)
Time to big idea hint: 47 seconds
"You" first appearance: Word 23 ("...and if you have a 401k,
IRA, or any money in the stock market, you need to hear this")
Emotional entry point: Fear (specifically, fear of loss)
Lead word count: 1,100
Lead quality score: 9/10

What makes this lead work:
- Hyper-specific timeframe (90 days, not "soon")
- References 2008 — visceral memory for target demo (55+)
- "Most Americans won't see it coming" — positions viewer
  as smarter for watching
- Multiple open loops in rapid succession
- "You need to hear this" — direct, urgent address
```

---

## 3. PROOF GATHERING — Building the Proof Arsenal

### 3.1 The Five Types of Proof

Every claim in a VSL must be supported. Unsupported claims reduce conversion AND create legal exposure. The proof arsenal is a structured collection of every provable element available.

#### Type 1: Credential Proof (Who)

**What it is:** The authority, expertise, and track record of the person behind the product.

**Where to find it:**
- LinkedIn profile of the creator/guru
- Past employer websites and press releases
- Media mentions (Google News search: "[name]" + "finance" OR "investing" OR "trading")
- Published books (Amazon author page)
- Speaking appearances (YouTube, conference websites)
- Professional certifications (CFA, CFP, Series 7, etc.)
- University credentials
- Awards and recognition
- Previous company performance records (if available)

**How to structure for copy:**

```
CREDENTIAL PROOF DOCUMENT
─────────────────────────
Name: Michael Torres
Current title: Founder, Alpha Signal Research
Previous roles:
  - Head of Options Desk, Bridgewater Capital (2005-2021)
  - Senior Options Strategist, Goldman Sachs (1999-2005)
Years of experience: 22 years institutional trading
Assets managed: $2.1 billion in options strategies
Media mentions:
  - Barron's: "The Options Strategist Wall Street Listens To" (March 2019)
  - Bloomberg: Interview on options flow analysis (November 2020)
  - MarketWatch: Contributor, 47 published articles (2018-2021)
Education: MBA, Wharton School of Business; BS Finance, NYU
Certifications: CFA, Series 7, Series 63
Books: "The Institutional Edge: How Smart Money Really Trades" (2019)
Awards: Institutional Investor "Rising Star" (2008)
```

**Verification steps:**
- Google the person's name + each credential claimed
- Check LinkedIn for employment history consistency
- Verify certifications with issuing bodies (CFA Institute directory, FINRA BrokerCheck)
- Find the actual media mentions (get URLs, not just claims)
- If the person managed money, check SEC/FINRA records

#### Type 2: Data Proof (What)

**What it is:** Numbers, statistics, backtesting results, performance data.

**Where to find it (Financial Products):**

| Data Type | Source | URL/Method |
|-----------|--------|-----------|
| Product track record | Internal records | Verified trade log, brokerage statements |
| Market statistics | Federal Reserve (FRED) | fred.stlouisfed.org |
| Economic data | Bureau of Labor Statistics | bls.gov |
| Stock/options data | Yahoo Finance, CBOE | finance.yahoo.com, cboe.com |
| Academic studies | Google Scholar | scholar.google.com — search "[strategy] returns" |
| Industry reports | CFA Institute, CBOE | Research publications |
| Historical performance | Portfolio Visualizer | portfoliovisualizer.com |
| Inflation data | BLS CPI calculator | bls.gov/data/inflation_calculator.htm |
| Advisor fee data | SEC, NerdWallet studies | sec.gov, nerdwallet.com/article/investing/financial-advisor-fees |
| Retail trader stats | FINRA, academic papers | "retail trader performance" on Google Scholar |

**Key statistics to gather for a financial newsletter VSL:**

```
DATA PROOF ARSENAL
──────────────────
PRODUCT PERFORMANCE:
- Win rate: 73% (847 trades, Jan 2020 — Dec 2024)
  Source: Internal trade log, verified by [auditor/method]
- Average winner: +34% in 14 days
- Average loser: -12% in 8 days
- Model portfolio return (2024): +127%
  Benchmark comparison: S&P 500 returned +24% same period
- Maximum drawdown: -8.2% (vs S&P -19.8% in same period)
- Subscriber profitability: 91% of followers profitable in 2024
  Source: Internal survey of 1,247 active subscribers

MARKET/INDUSTRY DATA (for context and authority):
- "80% of actively managed funds underperform the S&P 500
  over a 15-year period" — Source: S&P SPIVA Scorecard 2024
- "The average financial advisor charges 1.02% AUM annually"
  — Source: AdvisoryHQ 2024 fee study
- "Options trading volume has increased 35% year-over-year"
  — Source: CBOE market data
- "The average American has $88,400 saved for retirement"
  — Source: Federal Reserve Survey of Consumer Finances
- "60% of Americans say they cannot cover a $1,000 emergency"
  — Source: Bankrate 2024 survey
```

**Verification requirements:**
- Every data point needs a source citation in the proof arsenal
- Internal track records should be verified: audited statements, brokerage records, or timestamped trade alerts
- Third-party data must link to the original source (not a blog that cited it)
- Any claim about returns must include the time period, methodology, and whether it includes fees/commissions

#### Type 3: Social Proof (Who Else)

**What it is:** Testimonials, case studies, subscriber counts, community size.

**How to gather testimonials:**

1. **From existing customers:**
   - Send a survey: "What results have you experienced with [product]? Be as specific as possible — include dollar amounts, timeframes, and how your life has changed."
   - Follow up with individuals who respond well — get permission to use their story with first name, last initial, age, and location
   - Ask for specific permission: "May we use your story in our marketing materials?"

2. **Testimonial framework** — Ask these questions to elicit usable testimonials:
   ```
   1. What was your situation BEFORE [product]? What were you
      struggling with?
   2. What made you skeptical about trying [product]?
   3. What specific results have you experienced? (Dollar amounts,
      timeframes, number of trades, etc.)
   4. What was the moment you knew this was real?
   5. How has your life changed beyond just the financial results?
   6. What would you say to someone who's on the fence about trying it?
   ```

3. **Format for copy engine:**
   ```
   TESTIMONIAL #1
   Name: Robert K.
   Age: 58
   Location: Columbus, Ohio
   Background: Retired high school teacher, 30 years
   Before state: "I had $25,000 in a brokerage account, mostly
   in index funds. I was making maybe 8% a year. I knew I needed
   to do better but was terrified of options."
   Result: "In 9 months following Alpha Signal, my account grew
   from $25,000 to $61,400. That's a 145.6% return."
   Specific detail: "My biggest winner was a NVDA call spread in
   March that returned 67% in 4 days."
   Emotional quote: "My only regret is not finding this sooner.
   I actually teared up when I hit $50,000 — that was more than
   I'd made in any investment in my entire life."
   Permission: Written consent on file, dated [date]
   Verified: Brokerage statement screenshot provided
   ```

**Important: Testimonial compliance (FTC):**
- Results must be typical OR you must include a typicality disclaimer
- "Results not typical" is NOT sufficient under current FTC guidelines
- Better approach: "The average subscriber who followed all alerts in 2024 saw a return of X%"
- Testimonials must be from REAL people with REAL results
- Fabricated testimonials are illegal under FTC Act Section 5

#### Type 4: Demonstration Proof (Show)

**What it is:** Walking through a specific example that demonstrates the product working.

**For a financial newsletter:**
- Pick a specific past trade recommendation
- Show the setup: what the signal looked like, when it triggered
- Show the entry: the exact alert sent to subscribers with timestamp
- Show the result: the actual return with brokerage data or timestamped record
- Make it step-by-step so the viewer can visualize themselves doing it

**Example:**

```
DEMONSTRATION PROOF
───────────────────
Trade: AAPL Call Spread
Date of alert: March 14, 2024, 9:47 AM ET
Signal: Triple Convergence — unusual call volume spike (3.2x normal)
+ momentum divergence on daily chart + volatility compression
(Bollinger Band width at 6-month low)
Alert sent to subscribers: "BUY AAPL April 19 $175/$180 call
spread at $2.15 or better. Target: $4.00. Stop: $1.00."
Entry price: $2.15 per spread
Target hit: March 22, 2024 (8 days later)
Exit price: $4.10 per spread
Return: +90.7% in 8 days
S&P 500 return same period: +1.2%

What the subscriber experienced:
- Received alert at 9:47 AM on their phone
- Placed the trade in 3 minutes via their brokerage app
- Checked the position once per day
- Received exit alert on March 22
- Total time invested: approximately 15 minutes
```

#### Type 5: Logical Proof (Why)

**What it is:** If-then reasoning that makes the product's effectiveness feel inevitable.

**Construction method:**
1. Start with a premise the viewer already believes
2. Chain logical steps from that premise to your conclusion
3. Each step should be self-evident or supported by data

**Example:**

```
LOGICAL PROOF CHAIN
───────────────────
Premise 1 (accepted truth): "Institutional traders and hedge funds
have access to more data, more technology, and more resources than
individual investors."

Premise 2 (accepted truth): "When institutions place large options
bets, that information is visible in options flow data — it's public
record."

Logical step 1: "If institutions know something about a stock's
likely direction, they position themselves BEFORE the move happens."

Logical step 2: "If we can identify WHEN institutions are placing
unusually large options bets, we can see where they expect the
market to move."

Logical step 3: "If we ALSO see the price momentum diverging
from volume — a classic setup that precedes major moves — we
have TWO independent signals pointing the same direction."

Conclusion: "By combining options flow data with momentum
divergence analysis, we're effectively reading the playbook
of the biggest, best-funded traders in the world — and
positioning ourselves alongside them."

Why this works in copy: It makes the viewer feel like they're
using logic and data, not gambling. It positions the mechanism
as inevitable rather than speculative.
```

### 3.2 Proof Sources for Specific Niches

**Financial Niche:**

| Source | URL | What You Get |
|--------|-----|-------------|
| SEC EDGAR | sec.gov/cgi-bin/browse-edgar | Company filings, 13F institutional holdings |
| FINRA BrokerCheck | brokercheck.finra.org | Verify advisor/broker credentials |
| Federal Reserve FRED | fred.stlouisfed.org | Economic data for market context |
| S&P SPIVA Scorecard | spglobal.com/spdji/en/spiva | Data on active vs. passive performance |
| CBOE | cboe.com/market-data | Options volume, volatility data |
| Google Scholar | scholar.google.com | Academic papers on trading strategies |
| Portfolio Visualizer | portfoliovisualizer.com | Backtest data, historical returns |
| Bureau of Labor Statistics | bls.gov | Inflation, employment, wage data |

**Health Niche:**

| Source | URL | What You Get |
|--------|-----|-------------|
| PubMed | pubmed.ncbi.nlm.nih.gov | Clinical studies, medical research |
| ClinicalTrials.gov | clinicaltrials.gov | Trial data for supplements/treatments |
| NIH Office of Dietary Supplements | ods.od.nih.gov | Supplement fact sheets |
| Google Scholar | scholar.google.com | Peer-reviewed health research |
| Mayo Clinic | mayoclinic.org | Mainstream medical positions |
| Examine.com | examine.com | Evidence-based supplement analysis |

### 3.3 Compliance Considerations

**FTC Guidelines for Financial Products:**

1. **No guaranteed returns.** Never say "you WILL make $X." Use "potential," "opportunity," or historical data with disclaimers.
2. **Testimonials must be typical** or carry a clear disclaimer about typicality.
3. **Income claims require substantiation.** If you say "our subscribers averaged X% returns," you must be able to prove it with documentation.
4. **Track records must be audited or verifiable.** Paper trading results must be labeled as such.
5. **Risk disclosure is mandatory.** Options trading involves risk of loss. This must be clear.

**SEC Considerations:**
- If offering investment advice, check whether registration as an Investment Adviser is required (or whether the newsletter exemption applies under Section 202(a)(11) of the Investment Advisers Act)
- The "publisher's exclusion" protects bona fide newsletters of general circulation, but it has limits
- Never provide "personalized" investment advice in a newsletter format without proper registration

**Safe language patterns:**
```
INSTEAD OF:                          USE:
"You will make $5,000/month"    →    "Our model portfolio gained $5,000 in March 2024"
"Guaranteed profits"            →    "Historically documented win rate of 73%"
"Risk-free"                     →    "60-day money-back guarantee"
"You can't lose"                →    "Designed to limit downside risk"
"This stock will go up"         →    "Our analysis suggests strong upside potential"
```

---

## 4. COMPETITIVE INTELLIGENCE

### 4.1 Ad Strategy Spying

#### Meta Ad Library — Deep Dive

**URL:** facebook.com/ads/library

**Step-by-step process:**

1. Go to the Ad Library
2. Set country to United States
3. Set ad category to "All ads"
4. Search for competitor name (e.g., "Stansberry Research")
5. Filter by "Active" ads only
6. Sort by "Longest running" (this identifies winners)

**What to document for each competitor:**

```
COMPETITOR AD ANALYSIS
──────────────────────
Company: Stansberry Research
Ad Library URL: [URL]
Date analyzed: [Date]

ACTIVE AD COUNT: [X total active ads]

TOP PERFORMING ADS (running 90+ days):

Ad #1:
- Format: Video (VSL front-end)
- Running since: [Date]
- Duration: [X:XX]
- Hook/first line: "[Exact text or spoken opening]"
- Thumbnail: [Description]
- Landing page URL: [URL]
- Product being sold: [Product name and price point]
- CTA text on ad: "[Exact CTA]"
- Estimated spend: [if SpyFu/SimilarWeb data available]

Ad #2: [Same format]
[Continue for top 5-10 ads]

PATTERNS OBSERVED:
- Primary ad format: [Video / Image / Carousel]
- Primary hook type: [Fear / Curiosity / Prediction / Story]
- Average video length: [X seconds for ad, X minutes for VSL]
- Landing page type: [Direct to VSL / Squeeze page → VSL / Article → VSL]
- Retargeting: [Do they run different ads to retarget visitors?]
```

#### Google Ads Transparency Center

**URL:** adstransparency.google.com

Same process — search competitor names, document active ads, identify long-running campaigns. Google's transparency center shows search ads, display ads, and YouTube ads.

#### SpyFu (Paid — $39/mo)

**URL:** spyfu.com

**What to pull:**
- Competitor's top paid keywords and estimated spend per keyword
- Their ad copy for each keyword (what messaging they're testing)
- Estimated monthly ad budget
- Organic keywords they rank for (content strategy intelligence)
- Historical data: how their ad spend has changed over time

**Example search:** Enter "stansberryresearch.com" into SpyFu

```
OUTPUT TO DOCUMENT:
- Top 10 paid keywords and monthly spend per keyword
- Total estimated monthly ad spend
- Top performing ad copy (by duration running)
- Keyword gaps: keywords they're NOT bidding on that they should be
```

#### SEMrush (Paid — $129/mo)

**URL:** semrush.com

**What to pull (Advertising Research section):**
- Competitor's display ad creative (screenshot the actual ads)
- Their Google Display Network targeting (what sites their ads appear on)
- Historical ad data
- Traffic sources breakdown

#### SimilarWeb (Free tier available)

**URL:** similarweb.com

**What to pull:**
- Total monthly traffic to competitor's site
- Traffic sources breakdown (organic, paid, direct, referral, social)
- Top referring sites (affiliate partners?)
- Top destination sites (where visitors go next — payment processors?)
- Geography breakdown (are they US-focused or global?)
- Engagement metrics: bounce rate, pages/visit, time on site

### 4.2 Offer Structure Analysis

**Method:** Go through the competitor's entire funnel as a customer.

1. Click their ad
2. Watch their VSL (note length, style, claims)
3. Go to their order page (note price, bonuses, guarantee)
4. If possible, purchase the front-end product (expense it as research)
5. Document the OTO sequence (what upsells appear after purchase?)
6. Monitor their email sequence for 30 days (how do they monetize?)

**Document this:**

```
COMPETITOR FUNNEL MAP
─────────────────────
Company: [Name]
Product: [Product name]

FUNNEL FLOW:
Ad → [Landing page type] → VSL (XX min) → Order Page → OTO #1 → OTO #2 → Thank You

ORDER PAGE:
- Headline: "[Exact headline]"
- Price: $XX/year
- Original price (crossed out): $XXX/year
- Payment options: [Annual only / Monthly available]
- Bonuses: [List with stated values]
- Guarantee: [Type and duration]
- Trust elements: [SSL badges, media logos, BBB, etc.]
- CTA button text: "[Exact text]"
- Exit popup: [Yes/No — what does it say?]

OTO #1:
- Product: [Name]
- Price: $XXX
- Discount from original: [X%]
- Video or text: [Type]
- Downsell if declined: [Yes — at what price?]

OTO #2:
- Product: [Name]
- Price: $XXX
- [Same fields]

EMAIL SEQUENCE (first 30 days):
Day 1: [Subject line — purpose (welcome/onboarding)]
Day 2: [Subject line — purpose]
Day 3: [Subject line — purpose]
[Continue — note when the first upsell email appears]

MONETIZATION CADENCE:
- Content emails per week: [X]
- Promotional emails per week: [X]
- Products promoted (in order): [List]
- Prices of back-end offers: [List]
```

### 4.3 Finding Gaps and Angles

After analyzing 3-5 competitors, use Claude to identify gaps:

**Prompt:**

```
I've analyzed the following competitors in the financial
newsletter space. Here are their offer details:

[PASTE ALL COMPETITOR FUNNEL MAPS]

Based on this analysis, identify:

1. POSITIONING GAPS — What are ALL competitors saying that
   sounds the same? Where is the "sea of sameness" in their
   messaging? What contrarian angle could we take?

2. OFFER GAPS — What are they NOT including in their offers
   that customers clearly want? (Cross-reference with the
   Voice of Customer data below)
   [PASTE VOC PAIN POINTS AND DESIRES]

3. PRICING GAPS — Is there an underserved price tier?
   Is everyone clustered at the same price point?

4. PROOF GAPS — What proof elements are competitors NOT
   using that would be powerful? (e.g., live portfolios,
   real-time dashboards, audited returns)

5. DELIVERY GAPS — How are they delivering their product,
   and what delivery improvement would be a major
   differentiator?

6. GUARANTEE GAPS — What guarantee innovation would make
   our offer stand out?

7. MECHANISM GAPS — Does everyone use the same type of
   mechanism story? What novel mechanism framing could
   we use?

For each gap, provide a specific, actionable recommendation
for our VSL positioning.
```

### 4.4 Ad Spend Estimation

Knowing how much competitors spend on advertising tells you the size of the opportunity and what it takes to compete.

**Methods:**

1. **SpyFu** — Provides estimated monthly Google Ads spend per domain
2. **SEMrush** — Similar estimates plus social ad spend estimates
3. **Meta Ad Library + Manual Count** — Count active ads × estimated spend per ad
   - Rule of thumb: If a financial advertiser has 50+ active video ads on Meta, they're spending $100K+/month
   - If they have 200+ active ads, $500K-$1M+/month
4. **SimilarWeb** — Paid traffic percentage × estimated total visits × estimated CPC
5. **LinkedIn** — Check if the competitor is hiring media buyers, performance marketers. Job postings reveal scale.

---

## 5. THE OUTPUT — The Research Package

### 5.1 The Deliverable

Everything above gets distilled into a single Research Package document that feeds directly into Stage 2 (Creative Brief Generator) and Stage 3 (Copy Engine).

### 5.2 Research Package Template

```
╔══════════════════════════════════════════════════════════════╗
║              VSL RESEARCH PACKAGE                           ║
║              Confidential — Internal Use Only               ║
╚══════════════════════════════════════════════════════════════╝

Project: [VSL Project Name]
Product: [Product Name]
Niche: [Financial / Health / Biz-Op]
Date completed: [Date]
Researcher: [Name]
Data sources: [List all platforms scraped, tools used]
Total data points: [Number of quotes/data points collected]

══════════════════════════════════════════════════════════════

SECTION A: VOICE OF CUSTOMER
──────────────────────────────

A1. PAIN POINTS (Top 10, Ranked by Frequency × Intensity)

#1: [Pain Point Name]
    Frequency: [X mentions across Y sources]
    Intensity: [X/5]
    Verbatim quotes:
    - "[Quote]" — [Source, engagement metric]
    - "[Quote]" — [Source, engagement metric]
    - "[Quote]" — [Source, engagement metric]
    Copy-ready pain sentence: "[First-person sentence using
    exact audience language]"

#2: [Continue for all 10]

A2. DESIRES (Top 10, Ranked)
[Same format as pain points]

A3. OBJECTIONS (Top 7)
    Objection: "[Stated as the viewer would think it]"
    Frequency: [X mentions]
    Counter-argument: "[One-sentence reframe]"
    Proof element that addresses this: [Reference to proof arsenal]

A4. FALSE SOLUTIONS (Top 5)
    What they tried: [Solution name]
    Why it failed: "[In their words]"
    How we're different: "[Positioning statement]"
    Verbatim quotes: [3-5 quotes]

A5. ENEMY MAP
    Primary enemy: [Who/what]
    Supporting quotes: [5-10 verbatim quotes]
    Secondary enemy: [Who/what]
    Supporting quotes: [3-5 quotes]

A6. LANGUAGE BANK
    Pain sentences (20): [First-person]
    Desire sentences (20): [Second-person]
    Power phrases (15): [Recurring exact phrases]
    Metaphors (10): [Audience-used metaphors]
    Emotional triggers (10): [Specific trigger words/concepts]

A7. BELIEF SYSTEMS
    Beliefs to reinforce:
    1. [Belief] — Why: [How this helps conversion]
    2. [Continue]

    Beliefs to disrupt:
    1. [Belief] — Why: [How this hurts conversion]
    2. [Continue]

══════════════════════════════════════════════════════════════

SECTION B: PROOF ARSENAL
─────────────────────────

B1. CREDENTIAL PROOF
    [Full credential document — see Section 3.1, Type 1]

B2. DATA PROOF
    [Full data proof document with sources — see Section 3.1, Type 2]

B3. SOCIAL PROOF (TESTIMONIALS)
    [Each testimonial in full format — see Section 3.1, Type 3]
    Number of verified testimonials: [X]

B4. DEMONSTRATION PROOF
    [Step-by-step trade examples — see Section 3.1, Type 4]
    Number of demo examples prepared: [X]

B5. LOGICAL PROOF
    [Logical proof chains — see Section 3.1, Type 5]
    Number of proof chains: [X]

B6. COMPLIANCE FLAGS
    Claims requiring disclaimer: [List]
    Claims requiring additional substantiation: [List]
    Testimonials requiring typicality statement: [List]

══════════════════════════════════════════════════════════════

SECTION C: COMPETITIVE INTELLIGENCE
─────────────────────────────────────

C1. COMPETITOR MATRIX

| Competitor | Price | VSL Length | Lead Type | Mechanism | Guarantee | Est. Ad Spend |
|-----------|-------|-----------|-----------|-----------|-----------|--------------|
| [Name] | $XX | XX min | [Type] | [Name] | [Type] | $XXK/mo |
| [Continue for 3-5 competitors] |

C2. COMPETITOR FUNNEL MAPS
    [Full funnel map for each — see Section 4.2]

C3. POSITIONING GAPS IDENTIFIED
    1. [Gap + recommended angle]
    2. [Gap + recommended angle]
    3. [Gap + recommended angle]

C4. COMPETITIVE ADVANTAGES (Our Product)
    1. [What we do that competitors don't]
    2. [Continue]

══════════════════════════════════════════════════════════════

SECTION D: SWIPE FILE INTELLIGENCE
────────────────────────────────────

D1. VSLs DECOMPOSED: [X total]

D2. BEST PATTERNS IDENTIFIED:
    Best lead pattern: [Description + source VSL]
    Best mechanism presentation: [Description + source VSL]
    Best proof stack sequence: [Description + source VSL]
    Best close architecture: [Description + source VSL]
    Best transition technique: [Description + source VSL]

D3. RECOMMENDED MODELS
    Primary model VSL: [The VSL to most closely emulate]
    Why: [What makes it the best model for this project]
    Secondary model: [Backup reference]

══════════════════════════════════════════════════════════════

SECTION E: STRATEGIC RECOMMENDATIONS
──────────────────────────────────────

E1. RECOMMENDED BIG IDEA:
    [Your recommended Big Idea based on all research]
    Why this is the strongest angle: [Reasoning]

E2. RECOMMENDED LEAD TYPE:
    [Story / Prediction / Secret / Problem-Solution / Invitation]
    Why: [Based on competitor gaps and audience psychology]

E3. RECOMMENDED MECHANISM FRAMING:
    [How to name and position the mechanism]
    Why: [Differentiation rationale]

E4. RECOMMENDED EMOTIONAL ARC:
    Open with: [Emotion]
    Escalate through: [Emotion sequence]
    Resolve with: [Emotion]

E5. KEY FASCINATIONS (Top 15):
    1. "[Fascination]"
    2. "[Fascination]"
    [Continue for 15]

══════════════════════════════════════════════════════════════

APPENDIX: RAW DATA FILES
──────────────────────────
A. Reddit scrape data: [File link]
B. Amazon review data: [File link]
C. YouTube comment data: [File link]
D. Trustpilot review data: [File link]
E. VSL transcripts: [File links]
F. Competitor ad screenshots: [Folder link]
G. Testimonial consent forms: [Folder link]

══════════════════════════════════════════════════════════════
END OF RESEARCH PACKAGE
══════════════════════════════════════════════════════════════
```

### 5.3 How This Feeds Into Stage 2 (Creative Brief)

The Research Package maps to the Creative Brief as follows:

```
RESEARCH PACKAGE          →    CREATIVE BRIEF FIELD
───────────────────────        ──────────────────────
A1 (Pain Points)          →    Avatar pain points
A2 (Desires)              →    Avatar desires
A5 (Enemy Map)            →    Enemy framework
A6 (Language Bank)        →    Tone and vocabulary guide
A7 (Beliefs to disrupt)   →    Big Idea angle
B1 (Credentials)          →    Guru positioning
B2 (Data)                 →    Proof architecture
B3 (Testimonials)         →    Social proof sequence
C3 (Positioning Gaps)     →    Differentiation strategy
D2 (Best Patterns)        →    Structural template
E1-E5 (Recommendations)  →    Direct brief inputs
```

The Creative Brief Generator (Stage 2) takes this Research Package as input and produces the structured brief that the Copy Engine (Stage 3) consumes. Nothing in the copy engine is invented from thin air — every claim, every emotional beat, every proof element traces back to this research.

---

## APPENDIX: Tool Quick-Reference

| Tool | Purpose | Cost | URL |
|------|---------|------|-----|
| PRAW (Python) | Reddit API access | Free | praw.readthedocs.io |
| YouTube Data API | YouTube comments | Free (10K units/day) | console.cloud.google.com |
| Playwright | Browser automation/scraping | Free (open source) | playwright.dev |
| Scrapy | Web scraping framework | Free (open source) | scrapy.org |
| Whisper | Audio transcription | Free (local) / $0.006/min (API) | github.com/openai/whisper |
| AdSpy | Facebook/IG ad spy | $149/mo | adspy.com |
| SpyFu | Google Ads intelligence | $39/mo | spyfu.com |
| SEMrush | Multi-platform competitive intel | $129/mo | semrush.com |
| SimilarWeb | Traffic analysis | Free tier available | similarweb.com |
| Meta Ad Library | Facebook ad research | Free | facebook.com/ads/library |
| Weaviate | Vector database | Free (self-hosted) | weaviate.io |
| Pinecone | Vector database | Free tier available | pinecone.io |
| Claude API | AI analysis | Per token | anthropic.com |

---

*This playbook is a living document. Update it as you discover new sources, refine processes, and build automated pipelines for each step.*
