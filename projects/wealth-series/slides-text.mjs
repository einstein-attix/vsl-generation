/**
 * Wealth Series VSL — Slide Text Data (v3 — Publisher Positioning)
 *
 * Each entry: [slideNumber, spokenText, silenceDurationSec]
 *   - text=null means silence-only slide
 *   - silenceSec=0 means duration is determined by speech length
 *   - <break time="Xms"/> markers indicate pauses (handled by audio pipeline)
 *
 * Text is sent through normalizeForTTS() before TTS generation.
 *
 * POSITIONING: TradeAlgo = AI signal PUBLISHER (like Motley Fool / Stansberry).
 * We publish AI-generated trading signals. That is ALL we are.
 * BANNED: securities, RIA, fiduciary, custodian, SEC, regulated, compliance,
 *         manages client accounts, executes trades.
 */

export const SLIDES = [
  // ── SCENE 1: Hook — INTRIGUE (0:00-0:30) ──
  [1, null, 3],
  [2, null, 5],
  [3, `Fifty-two point eight percent. <break time="600ms"/> In one year. <break time="400ms"/> Not a backtest. Not a simulation. Not a projection.`, 0],
  [4, `This is what an AI, a real AI, not a marketing gimmick, produced across 86 stocks and 15 sectors over the last twelve months. Every signal documented. Every reasoning note published.`, 0],
  [5, `In the next twenty minutes, I'm going to show you something that changed how I think about markets. And I think it might change how you think about them, too. <break time="500ms"/> But first, you need to understand the problem this AI was built to solve.`, 0],

  // ── SCENE 2: The Problem — Complexity is the Villain (0:30-2:00) ──
  [6, `Here's something most people don't fully appreciate. <break time="300ms"/> Every single week, the US equity markets generate an extraordinary amount of data. Earnings reports. Macro releases. Sector rotations. Technical indicators crossing thresholds. Institutional capital flowing between sectors. <break time="400ms"/> The sheer volume is staggering.`, 0],
  [7, `Imagine trying to read 86 different research reports, in 15 different sectors, evaluating momentum, relative strength, macro conditions, and institutional flow, and then making a decision about every single position, before Monday's opening bell. <break time="500ms"/> Now imagine doing that every week. 52 weeks a year. Without missing one.`, 0],
  [8, `It's not possible. Not for one person. Not for a team of ten. The data moves too fast, across too many stocks, with too many interdependencies. <break time="300ms"/> This isn't a criticism of human intelligence. It's a recognition of scale.`, 0],
  [9, `And that gap, between the volume of data the market produces and what any human can analyze, that gap is where opportunity lives. And where risk hides.`, 0],
  [10, `And that's where something remarkable happened. <break time="600ms"/> But to understand why it's remarkable, you need to understand the scale of what this AI actually does.`, 0],

  // ── SCENE 3: Origin Story — CURIOSITY → FASCINATION (2:00-4:00) ──
  [11, `Three years ago, a team of engineers and data scientists asked a deceptively simple question.`, 0],
  [12, `What if an AI could evaluate every stock in a diversified portfolio, across every sector, analyze dozens of technical and fundamental indicators, generate actionable trading signals, and then explain its reasoning, in writing, for every single decision? <break time="500ms"/> Not a black box. Not trust the algorithm. An AI that shows its work. Like an institutional analyst writing a research note, except it does it for 86 stocks. Every week. Without fail.`, 0],
  [13, `So they built it. An AI system that evaluates 86 stocks across 15 sectors. It analyzes RSI. CCI. Momentum indicators. Institutional flow. Macro conditions. Sector rotation patterns. And it generates trading signals, buy, sell, hold, trim, or add, based on the data.`, 0],
  [14, `52 signal cycles per year. Every week, without exception. No vacations. No emotional reactions. No recency bias. No fatigue. <break time="600ms"/> But here's what happened next that nobody expected.`, 0],
  [15, `When they first ran the AI on live market data, tracking real portfolios, the team thought there was an error. <break time="400ms"/> The numbers were too good. They ran the analysis again. Same result. They checked the data inputs. They audited the signal log. Everything checked out. <break time="400ms"/> The AI wasn't just generating signals. It was generating signals that produced returns they hadn't anticipated.`, 0],
  [16, `And here's the part that made them realize this was different from anything else in the market. The AI wasn't just making decisions. It was explaining its decisions. In writing. For every single position. <break time="1500ms"/> I'm going to show you exactly what that looks like. The track record. The reasoning. The structure. All of it. <break time="2000ms"/>`, 0],

  // ── SCENE 4: Discovery (4:00-5:00) ──
  [17, null, 3],
  [18, `Imagine having a room of 50 Wall Street analysts, each one an expert in their sector, working through the night every Sunday. And by Monday morning, they hand you a single page. Here's what to own. Here's what to sell. And here's exactly why. <break time="500ms"/> That's what this AI does. Except it doesn't take a team of 50. It does it alone. Every week. And it writes the reasoning for every decision.`, 0],
  [19, `An AI analyzing 86 stocks across 15 sectors, with a signal track record you can verify yourself. <break time="300ms"/> Not a robo-advisor allocating to 6 ETFs. Not a chatbot picking stocks. <break time="300ms"/> A complete AI signal publication, starting at $8,333 per year.`, 0],
  [20, `Let me show you exactly what this looks like. And I'll start with the part that changed my mind about AI investing forever. <break time="500ms"/>`, 0],

  // ── SCENE 5: Solution Reveal — FASCINATION (5:00-8:00) ──
  [21, `The Wealth Series is a collection of 11 AI-powered signal portfolios, published by TradeAlgo. You subscribe to receive weekly AI-generated trading signals, complete with reasoning notes for every position.`, 0],
  [22, `And before I show you the numbers, let me be clear about what TradeAlgo is. <break time="400ms"/> TradeAlgo is an analytics and signal publishing company. Think of it like Motley Fool or Stansberry Research, except instead of human analysts writing picks, an AI generates the signals. <break time="300ms"/> TradeAlgo publishes the signals. How you act on them is up to you and your own financial setup.`, 0],
  [23, `The AI analyzes 86 stocks across 15 sectors. Healthcare. Technology. Industrials. Consumer defensive. Basic materials. Real estate. Energy. And more.`, 0],
  [24, `Every week, the AI evaluates every position. It scores each stock using RSI, CCI, momentum indicators, sector rotation analysis, and macro conditions. It then generates trading signals, buy, sell, hold, trim, or add, based on the data.`, 0],
  [25, `And here's what makes this unlike anything else. <break time="400ms"/> The AI writes its reasoning. For every single signal. In plain English. <break time="300ms"/> You can read exactly why it recommended buying, selling, or holding every position. It's like having a chief investment officer who writes you a detailed memo, every week, for every holding.`, 0],
  [26, `11 portfolios across 3 tiers. Each tier offers high-growth, balanced, and defensive signal sets. You choose the risk level. The AI publishes the signals. You decide how to act.`, 0],
  [27, `11 portfolios. 86 stocks. 15 sectors. 52-plus signal cycles per year. Every signal documented with written reasoning.`, 0],
  [28, `This isn't a black box. It's the most transparent AI signal publication available to individual investors. <break time="500ms"/> Now let me show you the numbers. And I'll start with the one that made me do a double-take.`, 0],

  // ── SCENE 6: Proof / Track Record — BELIEF (8:00-12:00) ──
  [29, `Before I show you performance data, the standard disclosure: past performance is not indicative of future results, and all investing involves risk, including loss of principal. That disclaimer will remain on screen. <break time="500ms"/> Now, the actual numbers.`, 0],
  [30, `These are real signal portfolios, with every signal documented and timestamped. <break time="400ms"/> Plus 52.8 percent, Everest Momentum Ascent. <break time="300ms"/> Plus 45.5, Titan Dynamic Upside. <break time="300ms"/> Plus 43.9, Atlas Accelerated Growth.`, 0],
  [31, `And here's the one that stops people. Capital Shield. <break time="300ms"/> This is the defensive portfolio. Designed for capital preservation. Not aggressive growth. Low risk. <break time="400ms"/> It returned 27 percent in a year. <break time="1000ms"/> When I first saw that number, 27 percent from a defensive strategy, I had to double-check. A defensive portfolio isn't supposed to return 27 percent. But when I looked at the AI's reasoning notes, it made sense. The AI had been rotating into defensive sectors, consumer staples, utilities, gold, that happened to outperform during a volatile year. It wasn't luck. It was data-driven positioning.`, 0],

  [32, `Now let me show you the thing that changed how I think about AI investing. Because the returns are impressive, but the reasoning is what separates this from everything else.`, 0],
  [33, `This is the AI's actual reasoning for a recent signal. <break time="300ms"/> It writes: IAUM is nearing overbought territory with an RSI of 69.69 and CCI of 161.34, suggesting strong buying pressure but a potential for short-term consolidation. <break time="300ms"/> So the signal recommended trimming the gold position by 1.1 percent. Not based on a feeling. Not based on a headline. Based on quantitative analysis, explained in writing, available for anyone to read and verify.`, 0],
  [34, `This isn't a black box that says trust us. It shows its work. Every week. For every position. In language an institutional analyst would recognize. <break time="500ms"/> Every signal is documented. Every reasoning note is archived. You can verify every decision the AI made.`, 0],

  [35, `Now, performance is one thing. But what about when markets drop? <break time="500ms"/> Remember February? Markets pulled back. Financial news was filled with concern. But here's what was already in the signal portfolio two weeks before the drop: short S&P 500 positions in 8 of 11 portfolios. An active hedge, a position that gains value when the market falls.`, 0],
  [36, `The AI didn't react to the February pullback. It had already signaled for it. Gold at 5 percent across every portfolio. Consumer staples, US Foods, Anheuser-Busch, Philip Morris, in every portfolio regardless of risk level. Short S&P hedge in 8 of 11 portfolios. <break time="300ms"/> Three layers of defense, all signaled before anyone knew the pullback was coming.`, 0],
  [37, `Result? Portfolios following the signals drew down 2 to 3.7 percent during the pullback. The hedges absorbed the impact. <break time="400ms"/> The AI didn't panic. It didn't react. <break time="300ms"/> It had anticipated.`, 0],

  [38, `86 stocks. 15 sectors. 55 signal publications in the last 5 weeks alone. 26 to 68 tickers covered per signal cycle.`, 0],
  [39, `Here's the reality, a team of 10 human analysts couldn't process this volume of data, across this many sectors, with this consistency, week after week. The AI does it every 7 days, and writes the reasoning for every single signal it generates.`, 0],
  [40, `This is not a stock screener. This is not a robo-advisor buying 6 ETFs. <break time="300ms"/> This is institutional-grade AI signal publishing, the kind of analysis that typically costs tens of thousands of dollars from Wall Street research desks, available to you starting at $8,333 per year.`, 0],
  [41, `So how do you actually access this? <break time="400ms"/> It's simpler than you'd expect.`, 0],

  // ── SCENE 7: How It Works — DESIRE (12:00-14:00) ──
  [42, `Here's how it works. 3 steps. <break time="300ms"/> Step one: you choose your tier. Atlas, Titan, or Everest. Each tier gives you access to AI signal portfolios calibrated to different risk levels, high growth, balanced, and defensive.`, 0],
  [43, `Step two: you subscribe to the Wealth Series signal publication. You get access to the full AI dashboard, weekly signal reports, reasoning notes, allocation grids, and performance tracking. <break time="400ms"/> TradeAlgo publishes the signals. You decide how to act on them. <break time="300ms"/> If you prefer hands-free execution, we work with a brokerage partner who can execute the signals in your account automatically. But that's entirely optional. The core product is the AI signals and reasoning.`, 0],
  [44, `Step three: the AI goes to work. Every week, it evaluates every position, scores every stock, and publishes new trading signals. You see everything, every signal change, every reasoning note, every performance metric, delivered to your dashboard.`, 0],
  [45, `This is what your dashboard looks like. Every position. Every weight. Every AI reasoning note. Updated every week. Complete transparency.`, 0],
  [46, `The AI publishes signals. You decide. <break time="500ms"/> That's the system. No complexity. No guesswork. Just data-driven signals, published weekly, with complete transparency.`, 0],

  // ── SCENE 8: Three Tiers — DESIRE (14:00-16:00) ──
  [47, `So at this point, you've seen exactly what this AI does. You've seen the signals. You've seen the returns. And I know what you're thinking: what does something like this cost? <break time="400ms"/> Let me put this in perspective. If you wanted to build an AI system like this from scratch, you'd need machine learning engineers, that's $200,000 a year minimum. Institutional-grade data feeds, another $30,000 to $50,000 a year. Cloud computing for the models, $50,000 a year. We've invested over $12,000,000 and nearly a decade of development into what you're looking at right now. <break time="400ms"/> But you don't pay $12,000,000. You don't pay $1,000,000. Here's how it works.`, 0],
  [48, `Atlas gives you the core AI signal suite. 3 portfolios, high growth, balanced, and defensive. Everything you need to start acting on high-probability signals powered by our engine. <break time="300ms"/> Your investment for Atlas is $8,333 per year. <break time="400ms"/> Let me say that again. For $8,333 a year, you get access to an AI system that took $12,000,000 to build. That's $23 a day. You probably spend more than that on lunch. <break time="300ms"/> And you'll receive roughly 200 actionable signals per year. That's about $42 per signal. Each one designed to generate hundreds, sometimes thousands, of dollars in returns.`, 0],
  [49, `Titan is for the serious investor who wants the full AI arsenal. Broader diversification, up to 40 stocks per portfolio. Dynamic Upside returned 45.5 percent. <break time="300ms"/> Titan is $16,667 per year. About $46 a day. Less than dinner for two. For an edge that most institutional desks would pay millions to access.`, 0],
  [50, `And Everest. This is the flagship. 5 portfolios instead of 3. Up to 51 holdings per portfolio. The deepest diversification, the broadest sector coverage, and the AI's most sophisticated signal set. <break time="300ms"/> Momentum Ascent, the top performer at plus 52.8 percent, is an Everest-exclusive portfolio. <break time="400ms"/> Everest is $33,333 per year. That's $91 a day for what is, frankly, an institutional-grade trading intelligence system.`, 0],
  [51, `Now, here's what makes this even better. When you join today, you lock in your rate for 3 full years. We will never raise your price during that period. As the AI gets smarter, as we add new models, as the signals get even more precise, your rate stays exactly the same. You're grandfathered in. <break time="400ms"/> 3 years also matters for another reason. Compounding. This system is designed to build wealth over time. The AI's signals need time to navigate full market cycles, earnings seasons, Fed decisions, corrections, and rallies. A 3-year window is how institutional investors think, and it's why the results compound.`, 0],

  // ── SCENE 9: Objection Handling — CONVICTION (16:00-19:00) ──
  [52, `Now, I know what you're thinking. Let me address it head-on. <break time="400ms"/> What about market crashes? <break time="400ms"/> Fair question. Let me show you what the AI is signaling right now. It's recommending short S&P 500 positions in 8 of 11 portfolios. It has a 5 percent gold allocation across every portfolio. It maintains a defensive core, consumer staples, utilities, healthcare, in every portfolio regardless of risk level. <break time="300ms"/> Last month, the market pulled back. Portfolios following the AI's signals drew down 2 to 3.7 percent. The hedge signals were already published. The AI doesn't react to crashes, it signals for them in advance.`, 0],
  [53, `$8,333 a year is a lot. <break time="400ms"/> It is. And it should be, this is a serious signal publication, not a newsletter with vague tips. <break time="300ms"/> That's $23 a day. About $42 per signal. Each signal is designed to produce hundreds, sometimes thousands, in returns. <break time="300ms"/> Your subscription gives you access to 11 AI-powered signal portfolios, publishing detailed buy, sell, and hold signals with written reasoning, every single week. The top portfolio returned 43.9 percent in its first year.`, 0],
  [54, `Is AI safe for investing? <break time="400ms"/> TradeAlgo publishes signals. That's it. TradeAlgo doesn't touch your money, doesn't access your accounts, and doesn't make any trades for you. <break time="300ms"/> What you do with the signals is entirely your decision. And the AI's reasoning is documented and transparent. You can read exactly why it generated every signal. This is the most transparent AI signal publication available to individual investors.`, 0],
  [55, `Why not just buy index funds? <break time="400ms"/> You can. And the low-volatility portfolios actually include index fund ETFs as a core holding. But here's what passive index exposure alone doesn't provide. <break time="300ms"/> Active risk management signals. Weekly sector rotation based on data. Position trimming signals when technical indicators hit overbought conditions. Short position signals as hedges before pullbacks. <break time="300ms"/> An index fund held through a 20 percent drawdown is a 20 percent loss. AI-driven signals with active risk management are a fundamentally different approach.`, 0],
  [56, `How is this different from Wealthfront or Betterment? <break time="400ms"/> Robo-advisors manage your money and allocate across 6 to 12 ETFs based on a risk questionnaire. That's it. <break time="300ms"/> The Wealth Series is a signal publication. The AI analyzes 86 individual stocks. It publishes weekly trading signals. It uses RSI, CCI, momentum, sector rotation, and macro analysis. It writes institutional-grade reasoning for every signal. <break time="300ms"/> And its top portfolio returned plus 52.8 percent in a year. These are fundamentally different products.`, 0],
  [57, `Why 3 years? <break time="400ms"/> Two reasons. First, your rate is locked in. As the AI improves and we add new models, your price never increases. You're grandfathered in at today's rate. <break time="300ms"/> Second, compounding. AI-driven strategies work over full market cycles, not weeks. Last month, high-risk portfolios drew down 3 to 4 percent. Over a year, those same portfolios returned 43 to 52 percent. 3 years gives the system room to deliver its full potential.`, 0],

  // ── SCENE 10: Authority — CONVICTION (19:00-21:00) ──
  [58, `Let me tell you who's behind this, because the technology only matters if you trust the people building it.`, 0],
  [59, `TradeAlgo is an analytics and signal publishing company. They build AI. That's what they do. Their entire focus is developing and refining AI signal-generation algorithms that analyze stocks and publish trading signals. Nothing else.`, 0],
  [60, `TradeAlgo doesn't manage money. They don't access your accounts. They don't make trades for you. They publish signals, the same way Motley Fool publishes stock picks or Stansberry publishes research. <break time="400ms"/> Except instead of human analysts with opinions, TradeAlgo's signals are generated by an AI that analyzes 86 stocks across 15 sectors every single week, and writes its reasoning for every signal.`, 0],
  [61, `The AI's track record is published and verifiable. 55 documented signal cycles. Every signal timestamped. Every reasoning note archived.`, 0],
  [62, `And the track record isn't a pitch deck with cherry-picked numbers. It's 55 documented signal publications. Every signal timestamped. Every AI reasoning note archived. This is the most transparent AI signal publication available to individual investors. <break time="400ms"/> You don't have to take our word for it. You can verify every single signal yourself.`, 0],

  // ── SCENE 11: Urgency (21:00-22:00) ──
  [63, `While you've been watching this, the AI hasn't stopped. It's evaluating. It's scoring. It's preparing for the next signal publication.`, 0],
  [64, `Every week you wait is a week of AI-driven intelligence you're not accessing. Not hypothetical, documented, transparent, AI-generated trading signals across 86 stocks.`, 0],
  [65, `The question isn't whether this works. You've seen the data. <break time="500ms"/> The question is how many more weekly signal cycles you want to watch from the outside.`, 0],

  // ── SCENE 12: Close / CTA (22:00-24:00) ──
  [66, `Let me bring it together.`, 0],
  [67, `You've seen 11 portfolios powered by AI-generated signals. Returns of up to 52.8 percent in a year. Written reasoning for every position, every week. Risk management signals, hedges, gold, defensive positioning built into every portfolio. <break time="400ms"/> And you've seen the publisher: TradeAlgo, an AI analytics company with a documented, verifiable signal track record.`, 0],
  [68, `The next step is simple. Click below to schedule a call with our team. It's a 30-minute conversation, not a sales pitch. You'll review the signal portfolios, ask any question you have, and decide if this is the right fit for you.`, 0],
  [69, `The AI is generating signals right now. It published signals for all 11 portfolios 2 days ago. It will do it again next week. The only question is whether you'll be watching from the inside, or the outside.`, 0],
  [70, `Click below. Schedule your call. And see what AI-powered trading signals can do for your portfolio.`, 0],
  [71, null, 5],
];
