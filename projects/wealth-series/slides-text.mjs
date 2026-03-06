/**
 * Wealth Series VSL — Slide Text Data (v2 — Compliance-Safe, Storytelling)
 *
 * Each entry: [slideNumber, spokenText, silenceDurationSec]
 *   - text=null means silence-only slide
 *   - silenceSec=0 means duration is determined by speech length
 *   - <break time="Xms"/> markers indicate pauses (handled by audio pipeline)
 *
 * Text is sent through normalizeForTTS() before TTS generation.
 *
 * COMPLIANCE: Zero advisor references. Zero money management implications.
 * NARRATIVE: Origin story, vivid analogies, real market moments, emotional arc.
 */

export const SLIDES = [
  // ── SCENE 1: Hook — INTRIGUE (0:00-0:30) ──
  [1, null, 3],
  [2, null, 5],
  [3, `Fifty-two point eight percent. <break time="600ms"/> In one year. <break time="400ms"/> Not a backtest. Not a simulation. Not a projection.`, 0],
  [4, `This is what an AI, a real AI, not a marketing gimmick, produced across 86 securities and 15 sectors over the last twelve months. Every trade executed by a registered investment advisor. Every signal documented.`, 0],
  [5, `In the next twenty minutes, I'm going to show you something that changed how I think about markets. And I think it might change how you think about them, too. <break time="500ms"/> But first, you need to understand the problem this AI was built to solve.`, 0],

  // ── SCENE 2: The Problem — Complexity is the Villain (0:30-2:00) ──
  [6, `Here's something most people don't fully appreciate. <break time="300ms"/> Every single week, the US equity markets generate an extraordinary amount of data. Earnings reports. Macro releases. Sector rotations. Technical indicators crossing thresholds. Institutional capital flowing between sectors. <break time="400ms"/> The sheer volume is staggering.`, 0],
  [7, `Imagine trying to read 86 different research reports, in 15 different sectors, evaluating momentum, relative strength, macro conditions, and institutional flow, and then making a decision about every single position, before Monday's opening bell. <break time="500ms"/> Now imagine doing that every week. 52 weeks a year. Without missing one.`, 0],
  [8, `It's not possible. Not for one person. Not for a team of ten. The data moves too fast, across too many securities, with too many interdependencies. <break time="300ms"/> This isn't a criticism of human intelligence. It's a recognition of scale.`, 0],
  [9, `And that gap, between the volume of data the market produces and what any human can analyze, that gap is where opportunity lives. And where risk hides.`, 0],
  [10, `And that's where something remarkable happened. <break time="600ms"/> But to understand why it's remarkable, you need to understand the scale of what this AI actually does.`, 0],

  // ── SCENE 3: Origin Story — CURIOSITY → FASCINATION (2:00-4:00) ──
  [11, `Three years ago, a team of engineers and data scientists asked a deceptively simple question.`, 0],
  [12, `What if an AI could evaluate every security in a diversified portfolio, across every sector, analyze dozens of technical and fundamental indicators, generate actionable trading signals, and then explain its reasoning, in writing, for every single decision? <break time="500ms"/> Not a black box. Not trust the algorithm. An AI that shows its work. Like an institutional analyst writing a research note, except it does it for 86 securities. Every week. Without fail.`, 0],
  [13, `So they built it. An AI system that evaluates 86 securities across 15 sectors. It analyzes RSI. CCI. Momentum indicators. Institutional flow. Macro conditions. Sector rotation patterns. And it generates rebalancing signals, adding, trimming, or exiting positions based on the data.`, 0],
  [14, `52 signal cycles per year. Every week, without exception. No vacations. No emotional reactions. No recency bias. No fatigue. <break time="600ms"/> But here's what happened next that nobody expected.`, 0],
  [15, `When they first ran the AI on live market data, real capital, real trades, executed by a registered investment advisor, the team thought there was an error. <break time="400ms"/> The numbers were too good. They ran the analysis again. Same result. They checked the data inputs. They audited the trade log. Everything checked out. <break time="400ms"/> The AI wasn't just generating signals. It was generating signals that, when executed by the RIA, produced returns they hadn't anticipated.`, 0],
  [16, `And here's the part that made them realize this was different from anything else in the market. The AI wasn't just making decisions. It was explaining its decisions. In writing. For every single position. <break time="1500ms"/> I'm going to show you exactly what that looks like. The track record. The reasoning. The structure. All of it. <break time="2000ms"/>`, 0],

  // ── SCENE 4: Discovery (4:00-5:00) ──
  [17, null, 3],
  [18, `Imagine having a room of 50 Wall Street analysts, each one an expert in their sector, working through the night every Sunday. And by Monday morning, they hand you a single page. Here's what to own. Here's what to sell. And here's exactly why. <break time="500ms"/> That's what this AI does. Except it doesn't take a team of 50. It does it alone. Every week. And it writes the reasoning for every decision.`, 0],
  [19, `An AI analyzing 86 securities across 15 sectors, with a signal track record you can verify yourself. <break time="300ms"/> Not a robo-advisor allocating to 6 ETFs. Not a chatbot picking stocks. <break time="300ms"/> A complete AI signal platform, with a registered investment advisor executing every trade, starting at $25,000.`, 0],
  [20, `Let me show you exactly what this looks like. And I'll start with the part that changed my mind about AI investing forever. <break time="500ms"/>`, 0],

  // ── SCENE 5: Solution Reveal — FASCINATION (5:00-8:00) ──
  [21, `The Wealth Series is a collection of 11 portfolios, powered by TradeAlgo's AI-generated trading signals, with every trade executed by a registered investment advisor.`, 0],
  [22, `And before I show you the numbers, let me be clear about the structure. Because the structure is what makes this trustworthy. <break time="400ms"/> TradeAlgo builds and operates the AI. That's all they do. They generate the signals. <break time="300ms"/> A separate, regulated RIA partner manages the client accounts and executes the trades. Your capital is held at a qualified custodian, never at TradeAlgo, never at a startup. <break time="300ms"/> This is institutional infrastructure. Three separate entities, three separate roles.`, 0],
  [23, `The AI analyzes 86 unique securities across 15 sectors. Healthcare. Technology. Industrials. Consumer defensive. Basic materials. Real estate. Energy. And more.`, 0],
  [24, `Every week, the AI evaluates every position. It scores each security using RSI, CCI, momentum indicators, sector rotation analysis, and macro conditions. It then generates rebalancing signals, adding, trimming, or exiting positions based on the data.`, 0],
  [25, `And here's what makes this unlike anything else. <break time="400ms"/> The AI writes its reasoning. For every single signal. In plain English. <break time="300ms"/> You can read exactly why it recommended buying, selling, or holding every position. It's like having a chief investment officer who writes you a detailed memo, every week, for every holding in your portfolio.`, 0],
  [26, `11 portfolios across 3 tiers. Each tier offers high-growth, balanced, and defensive options. You choose the risk level. The AI generates the signals. The RIA executes. And you see everything.`, 0],
  [27, `11 portfolios. 86 securities. 15 sectors. 52-plus signal cycles per year. Every trade executed by a regulated RIA. Every signal documented with institutional-grade reasoning.`, 0],
  [28, `This isn't a black box. It's the most transparent AI signal service available to individual investors. <break time="500ms"/> Now let me show you the numbers. And I'll start with the one that made me do a double-take.`, 0],

  // ── SCENE 6: Proof / Track Record — BELIEF (8:00-12:00) ──
  [29, `Before I show you performance data, the standard disclosure: past performance is not indicative of future results, and all investing involves risk, including loss of principal. That disclaimer will remain on screen. <break time="500ms"/> Now, the actual numbers.`, 0],
  [30, `These are real portfolios, guided by AI signals, with every trade documented and timestamped. <break time="400ms"/> Plus 52.8 percent, Everest Momentum Ascent. <break time="300ms"/> Plus 45.5, Titan Dynamic Upside. <break time="300ms"/> Plus 43.9, Atlas Accelerated Growth.`, 0],
  [31, `And here's the one that stops people. Capital Shield. <break time="300ms"/> This is the defensive portfolio. Designed for capital preservation. Not aggressive growth. Low risk. <break time="400ms"/> It returned 27 percent in a year. <break time="1000ms"/> When I first saw that number, 27 percent from a defensive strategy, I had to double-check. A defensive portfolio isn't supposed to return 27 percent. But when I looked at the AI's reasoning notes, it made sense. The AI had been rotating into defensive sectors, consumer staples, utilities, gold, that happened to outperform during a volatile year. It wasn't luck. It was data-driven positioning.`, 0],

  [32, `Now let me show you the thing that changed how I think about AI investing. Because the returns are impressive, but the reasoning is what separates this from everything else.`, 0],
  [33, `This is the AI's actual reasoning for a recent rebalance. <break time="300ms"/> It writes: IAUM is nearing overbought territory with an RSI of 69.69 and CCI of 161.34, suggesting strong buying pressure but a potential for short-term consolidation. <break time="300ms"/> So it trimmed the gold position by 1.1 percent. Not based on a feeling. Not based on a headline. Based on quantitative analysis, explained in writing, available for anyone to read and verify.`, 0],
  [34, `This isn't a black box that says trust us. It shows its work. Every week. For every position. In language an institutional analyst would recognize. <break time="500ms"/> Every signal is documented. Every reasoning note is archived. You can verify every decision the AI made.`, 0],

  [35, `Now, performance is one thing. But what about when markets drop? <break time="500ms"/> Remember February? Markets pulled back. Financial news was filled with concern. But here's what was already in the portfolio two weeks before the drop: short S&P 500 positions in 8 of 11 portfolios. An active hedge, a position that gains value when the market falls.`, 0],
  [36, `The AI didn't react to the February pullback. It had already positioned for it. Gold at 5 percent across every portfolio. Consumer staples, US Foods, Anheuser-Busch, Philip Morris, in every portfolio regardless of risk level. Short S&P hedge in 8 of 11 portfolios. <break time="300ms"/> Three layers of defense, all in place before anyone knew the pullback was coming.`, 0],
  [37, `Result? Portfolios drew down 2 to 3.7 percent during the pullback. The hedges absorbed the impact. <break time="400ms"/> The AI didn't panic. It didn't react. <break time="300ms"/> It had anticipated.`, 0],

  [38, `86 unique securities. 15 sectors. 55 rebalancing events documented in the last 5 weeks alone. 26 to 68 tickers adjusted per rebalance.`, 0],
  [39, `Here's the reality, a team of 10 human analysts couldn't process this volume of data, across this many sectors, with this consistency, week after week. The AI does it every 7 days, and writes the reasoning for every single signal it generates.`, 0],
  [40, `This is not a stock screener. This is not a robo-advisor buying 6 ETFs. <break time="300ms"/> This is institutional-grade AI signal generation, the kind of analysis that drives the most sophisticated investment strategies on Wall Street, accessible through a regulated RIA, starting at $25,000.`, 0],
  [41, `So how do you actually access this? <break time="400ms"/> It's simpler than you'd expect.`, 0],

  // ── SCENE 7: How It Works — DESIRE (12:00-14:00) ──
  [42, `Here's how it works. 3 steps. <break time="300ms"/> Step one: you choose your tier. Atlas at $25,000. Titan at $50,000. Or Everest at $100,000. Each tier gives you access to AI-signal-driven portfolios calibrated to different risk levels, high growth, balanced, and defensive.`, 0],
  [43, `Step two: your account is opened through our registered investment advisor partner. They handle compliance, custody, and regulatory requirements. Your capital is held at a qualified custodian, the same infrastructure used by institutional investors. <break time="400ms"/> Your money never sits on TradeAlgo's servers. Ever. TradeAlgo builds the AI. The RIA manages the accounts. A qualified custodian holds your capital. Three separate entities.`, 0],
  [44, `Step three: the AI goes to work. Every week, it evaluates every position, scores every security, and generates rebalancing signals. The RIA executes. You see everything, every allocation change, every reasoning note, every performance metric.`, 0],
  [45, `This is what your dashboard looks like. Every position. Every weight. Every AI reasoning note. Updated every week. Complete transparency.`, 0],
  [46, `The AI generates signals. The RIA executes. You verify. <break time="500ms"/> That's the system. No complexity. No guesswork. Just data-driven signals, professional execution, and complete transparency.`, 0],

  // ── SCENE 8: Three Tiers — DESIRE (14:00-16:00) ──
  [47, `3 tiers. Each one gives you access to AI-powered signal portfolios at a different scale.`, 0],
  [48, `Atlas is your starting point. $25,000. 3 portfolios, high growth, balanced, and defensive. The high-growth portfolio returned 43.9 percent in the past year. <break time="300ms"/> This is where you access the AI's signals with a meaningful but manageable allocation.`, 0],
  [49, `Titan increases the investment to $50,000 and gives you broader diversification, up to 40 securities per portfolio. Dynamic Upside returned 45.5 percent.`, 0],
  [50, `And Everest. This is the flagship. $100,000. 5 portfolios instead of 3. Up to 51 holdings per portfolio. The deepest diversification, the broadest sector coverage, and the AI's most sophisticated signal set. <break time="400ms"/> Momentum Ascent, the top performer at plus 52.8 percent, is an Everest-exclusive portfolio.`, 0],
  [51, `All 3 tiers are 3-year licenses. And there's a reason for that. The AI's signals are designed to compound over market cycles. Short-term volatility is noise. 3 years gives the system room to navigate full market cycles, earnings seasons, Fed decisions, corrections, and rallies. <break time="400ms"/> This is a commitment to a data-driven process, the same way institutional investors think about time horizons.`, 0],

  // ── SCENE 9: Objection Handling — CONVICTION (16:00-19:00) ──
  [52, `Now, I know what you're thinking. Let me address it head-on. <break time="400ms"/> What about market crashes? <break time="400ms"/> Fair question. Let me show you what the AI is doing right now. It's holding short S&P 500 positions in 8 of 11 portfolios. It has a 5 percent gold allocation across every portfolio. It maintains a defensive core, consumer staples, utilities, healthcare, in every portfolio regardless of risk level. <break time="300ms"/> Last month, the market pulled back. The AI's portfolios drew down 2 to 3.7 percent. The hedges were already in place. The AI doesn't react to crashes, it positions for them in advance.`, 0],
  [53, `$25,000 is a significant commitment. <break time="400ms"/> It is. And it should be, this is a serious investment, not a subscription. <break time="300ms"/> But here's what's important: this isn't a fee. This is your invested capital. It's your money, in a professionally managed portfolio, guided by AI-generated signals and executed by a regulated RIA. Your capital is held at a qualified custodian. It's working for you. <break time="300ms"/> You're allocating $25,000 to a portfolio that returned up to 43.9 percent in its first year. Every dollar is invested. Every signal is documented. Every trade is executed by a fiduciary.`, 0],
  [54, `Is AI safe for investing? <break time="400ms"/> The AI doesn't have a buy button on your account. It generates signals. <break time="400ms"/> The RIA partner, a regulated fiduciary, makes the execution decisions through institutional channels. Your capital is held at a qualified custodian, not at TradeAlgo. <break time="300ms"/> And the AI's reasoning is documented and transparent. You can read exactly why it generated every signal. This is the most transparent AI-driven portfolio structure available to individual investors.`, 0],
  [55, `Why not just buy index funds? <break time="400ms"/> You can. And the low-volatility portfolios actually include index fund ETFs as a core holding. But here's what passive index exposure alone doesn't provide. <break time="300ms"/> Active risk management. Weekly sector rotation based on data. Position trimming when technical indicators signal overbought conditions. Short positions as hedges before pullbacks. <break time="300ms"/> An index fund held through a 20 percent drawdown is a 20 percent loss. AI-driven signal generation with active risk management is a fundamentally different approach.`, 0],
  [56, `How is this different from Wealthfront or Betterment? <break time="400ms"/> Robo-advisors allocate your money across 6 to 12 ETFs based on a risk questionnaire. Then they rebalance when your allocation drifts. That's it. <break time="300ms"/> The Wealth Series AI generates signals across 86 individual securities. It drives weekly rebalancing through the RIA. It uses RSI, CCI, momentum, sector rotation, and macro analysis. It writes institutional-grade reasoning for every signal. <break time="300ms"/> And its top portfolio returned plus 52.8 percent in a year. These are fundamentally different products.`, 0],
  [57, `3 years is a long commitment. <break time="400ms"/> The 3-year license is designed to align with how markets actually work. AI-driven portfolio strategies perform over full cycles, not weeks. Last month, high-risk portfolios drew down 3 to 4 percent. That's normal. Over a year, those same portfolios returned 43 to 52 percent. <break time="300ms"/> The AI's signals need time to navigate earnings seasons, Fed decisions, corrections, and rallies. A 3-year window is how institutional investors think, and it's why the results compound.`, 0],

  // ── SCENE 10: Authority — CONVICTION (19:00-21:00) ──
  [58, `Let me tell you who's behind this, because the technology only matters if you trust the infrastructure around it.`, 0],
  [59, `TradeAlgo built the AI. They're a technology company, not a brokerage, not a fund. Their job is building and refining the AI signal-generation algorithms. That's what they do. That's all they do.`, 0],
  [60, `The accounts are managed by the RIA partner, a registered investment advisor regulated by the SEC. They are a fiduciary, legally obligated to act in your best interest. <break time="400ms"/> Your capital is held at a qualified custodian. It never sits on TradeAlgo's balance sheet. It never sits on the RIA's balance sheet. It's in your name, at a qualified custodian, overseen by a regulated fiduciary, guided by AI signals built by a technology company.`, 0],
  [61, `3 separate entities. 3 layers of oversight. One AI system with a documented track record.`, 0],
  [62, `And the track record isn't a pitch deck with cherry-picked numbers. It's 55 documented rebalancing events. Every trade timestamped. Every AI reasoning note archived. This is the most auditable AI-driven portfolio system available to individual investors. <break time="400ms"/> You don't have to take our word for it. You can verify every single trade yourself.`, 0],

  // ── SCENE 11: Urgency (21:00-22:00) ──
  [63, `While you've been watching this, the AI hasn't stopped. It's evaluating. It's scoring. It's preparing for the next rebalance.`, 0],
  [64, `Every week you wait is a week of AI-driven intelligence you're not accessing. Not hypothetical, documented, transparent, signal-driven portfolio management across 86 securities.`, 0],
  [65, `And here's the reality: the RIA can only onboard so many new clients while maintaining the level of service and oversight these portfolios require. This isn't artificial scarcity, it's a function of managing real accounts responsibly. <break time="500ms"/> The question isn't whether this works. You've seen the data. The question is how many more weekly signal cycles you want to watch from the outside.`, 0],

  // ── SCENE 12: Close / CTA (22:00-24:00) ──
  [66, `Let me bring it together.`, 0],
  [67, `You've seen 11 portfolios powered by AI-generated signals. Returns of up to 52.8 percent in a year. Institutional-grade reasoning for every position, every week. Risk management, hedges, gold, defensive positioning built into every portfolio. <break time="400ms"/> And you've seen the structure: a technology company building the AI. A registered investment advisor executing every trade. A qualified custodian holding your capital. 3 layers of protection.`, 0],
  [68, `The next step is simple. Click below to schedule a consultation with our RIA partner. It's a 30-minute conversation, not a sales pitch. You'll review the portfolios, ask any question you have, and decide if this is the right fit for your financial situation.`, 0],
  [69, `The AI is generating signals right now. It produced rebalancing signals for all 11 portfolios 2 days ago. It will do it again next week. The only question is whether you'll be watching from the inside, or the outside.`, 0],
  [70, `Click below. Schedule your consultation. And see what AI-powered trading signals can do for your capital.`, 0],
  [71, null, 5],
];
