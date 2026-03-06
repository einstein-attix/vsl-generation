/**
 * Wealth Series VSL — Slide Text Data
 *
 * Each entry: [slideNumber, spokenText, silenceDurationSec]
 *   - text=null means silence-only slide
 *   - silenceSec=0 means duration is determined by speech length
 *   - <break time="Xms"/> markers indicate pauses (handled by audio pipeline)
 *
 * Text is sent through normalizeForTTS() before TTS generation.
 * Numbers can be written as digits here — they'll be converted to words automatically.
 */

export const SLIDES = [
  // ── SCENE 1: Hook (0:00-0:30) ──
  [1, null, 3],
  [2, null, 5],
  [3, `Fifty-two point eight percent. <break time="600ms"/> In one year. <break time="400ms"/> Not a backtest. Not a simulation. Not a projection.`, 0],
  [4, `An AI generating trading signals across 86 securities, 15 sectors, driving weekly rebalancing through a registered investment advisor.`, 0],
  [5, `And in the next twenty-two minutes, I'm going to show you exactly how this AI works, how a regulated RIA executes the trades, and how you can have these same signals guiding a portfolio built for you. <break time="500ms"/> But before I show you the portfolios, <break time="400ms"/> let me ask you something.`, 0],

  // ── SCENE 2: The Problem (0:30-2:00) ──
  [6, `If you have two hundred and fifty thousand dollars or more invested, I need to ask you a direct question. <break time="300ms"/> Do you know, specifically, what your money did last week? <break time="600ms"/> Not last quarter. Not last year. <break time="400ms"/> Last week.`, 0],
  [7, `Your financial advisor manages your portfolio the same way advisors managed money in 1995. Quarterly rebalancing. Annual reviews. A phone call when the market drops to say, stay the course.`, 0],
  [8, `Meanwhile, you're paying five thousand, ten thousand, fifteen thousand dollars a year in management fees, for someone who is, in most cases, buying the same index funds you could buy yourself on Schwab for free.`, 0],
  [9, `Four rebalances a year. A quarterly PDF. And the same index funds you could buy yourself.`, 0],
  [10, `The question isn't whether your advisor is a good person. The question is whether their process is competitive, in a market where algorithms now execute 80 percent of all trades. <break time="600ms"/>`, 0],

  // ── SCENE 3: Agitate (2:00-4:00) ──
  [11, `Here's the part that should genuinely concern you.`, 0],
  [12, `Every week that your money sits in a portfolio that rebalances quarterly, the market is moving. Sectors are rotating. Companies are reporting earnings. Macro conditions are shifting. <break time="300ms"/> And you're sitting still. Waiting for your advisor's next quarterly review.`, 0],
  [13, `An AI system can evaluate 86 securities across 15 sectors, analyze RSI, CCI, momentum, institutional flow, and macro conditions, and generate rebalancing signals before Monday's opening bell.`, 0],
  [14, `Your advisor does this four times a year. The AI does it every single week. <break time="500ms"/> That's not a small difference. That's a structural disadvantage.`, 0],
  [15, `And the cost of that structural disadvantage compounds. Not just for a quarter. For years. The money you didn't make, <break time="400ms"/> is money you can never get back.`, 0],
  [16, `The question is no longer, should I use AI for investing? <break time="1200ms"/> The question is, how much longer can I afford not to? <break time="2000ms"/>`, 0],

  // ── SCENE 4: Discovery (4:00-5:00) ──
  [17, null, 3],
  [18, `What if, instead of hoping your advisor makes the right call once a quarter, you had an AI generating trading signals for your portfolio every single week? <break time="400ms"/> An AI that doesn't just generate signals, but explains the reasoning behind every one. In writing. With institutional-grade analysis.`, 0],
  [19, `An AI analyzing 86 securities across 15 sectors, with a signal track record you can verify yourself. <break time="300ms"/> Not a robo-advisor allocating to six ETFs. Not a chatbot picking stocks. <break time="300ms"/> A complete AI signal platform, with a registered investment advisor executing every trade, starting at $25,000.`, 0],
  [20, `Let me show you exactly what this looks like. <break time="500ms"/>`, 0],

  // ── SCENE 5: Solution Reveal (5:00-8:00) ──
  [21, `The Wealth Series is a collection of 11 portfolios, powered by TradeAlgo's AI-generated trading signals, with every trade executed by a registered investment advisor.`, 0],
  [22, `This is important, so let me be specific. <break time="400ms"/> TradeAlgo builds and operates the AI. That's all they do. They generate the signals. <break time="300ms"/> A separate, regulated RIA partner manages the client accounts and executes the trades. Your capital is held at a qualified custodian, never at TradeAlgo, never at a startup. <break time="300ms"/> This is institutional infrastructure.`, 0],
  [23, `The AI analyzes 86 unique securities across 15 sectors. Healthcare. Technology. Industrials. Consumer defensive. Basic materials. Real estate. Energy. And more.`, 0],
  [24, `Every week, without exception, the AI evaluates every position. It scores each security using RSI, CCI, momentum indicators, sector rotation analysis, and macro conditions. It then generates rebalancing signals, adding, trimming, or exiting positions based on the data.`, 0],
  [25, `And here's what makes this unlike any other portfolio service. <break time="400ms"/> The AI writes its reasoning. For every single signal. In plain English. <break time="300ms"/> You can read exactly why it recommended buying, selling, or holding every position.`, 0],
  [26, `11 portfolios across 3 tiers. Each tier offers high-growth, balanced, and defensive options. You choose the risk level. The AI generates the signals. The RIA executes. And you see everything.`, 0],
  [27, `11 portfolios. 86 securities. 15 sectors. 52-plus signal cycles per year. Every trade executed by a regulated RIA. Every signal documented with institutional-grade reasoning.`, 0],
  [28, `This isn't a black box. It's the most transparent AI signal service available to individual investors. <break time="500ms"/> Now let me show you the numbers.`, 0],

  // ── SCENE 6: Proof / Track Record (8:00-12:00) ──
  [29, `Before I show you performance data, the standard disclosure: past performance is not indicative of future results, and all investing involves risk, including loss of principal. That disclaimer will remain on screen. <break time="500ms"/> Now, the actual numbers.`, 0],
  [30, `These are real portfolios, guided by AI signals. Real capital. Every trade documented. <break time="400ms"/> Plus 52.8 percent, Everest Momentum Ascent. <break time="300ms"/> Plus 45.5, Titan Dynamic Upside. <break time="300ms"/> Plus 43.9, Atlas Accelerated Growth.`, 0],
  [31, `And here's the one that stops people. Capital Shield. This is the defensive portfolio, designed for capital preservation, not aggressive growth. <break time="400ms"/> It returned 27 percent in a year. <break time="1000ms"/> A defensive strategy. 27 percent.`, 0],

  [32, `Now let me show you something no other portfolio signal service does.`, 0],
  [33, `This is the AI's reasoning for a recent rebalance. <break time="300ms"/> It writes: IAUM is nearing overbought territory with an RSI of 69.69 and CCI of 161.34, suggesting strong buying pressure but a potential for short-term consolidation. <break time="300ms"/> So it trimmed the gold position by 1.1 percent.`, 0],
  [34, `This isn't a black box that says trust us. It shows its work. Every week. For every position. In language an institutional analyst would recognize. <break time="500ms"/> When was the last time your financial advisor wrote you a paragraph explaining why they made a trade?`, 0],

  [35, `Performance is one thing. But what about when markets drop? <break time="400ms"/> Right now, the AI's signals include short S&P 500 positions in 8 of its 11 portfolios. That's an active hedge, a position that gains value when the market falls.`, 0],
  [36, `It's holding a 5 percent gold allocation across every portfolio. It's maintaining consumer staples, US Foods, Anheuser-Busch, Philip Morris, in every portfolio regardless of risk level. <break time="300ms"/> The AI's signals don't just chase returns. They build a defensive floor into every portfolio and actively hedge against downside.`, 0],
  [37, `Last month, portfolios drew down 2 to 3.7 percent. <break time="400ms"/> The hedges were already in place. The AI didn't react to the drop. It anticipated it.`, 0],

  [38, `86 unique securities. 15 sectors. 55 rebalancing events documented in the last 5 weeks alone. 26 to 68 tickers adjusted per rebalance.`, 0],
  [39, `A team of 10 human analysts couldn't process this. The AI does it every week, and writes the reasoning for every single signal it generates.`, 0],
  [40, `This is not a stock screener. This is not a robo-advisor buying 6 ETFs. <break time="300ms"/> This is institutional-grade AI signal generation, the kind of analysis that hedge funds charge two-and-twenty for, driving portfolios executed by a regulated RIA, starting at $25,000.`, 0],
  [41, `So how do you actually get started? <break time="400ms"/> It's simpler than you'd think.`, 0],

  // ── SCENE 7: How It Works (12:00-14:00) ──
  [42, `Here's how it works. 3 steps. <break time="300ms"/> Step one: you choose your tier. Atlas at $25,000. Titan at $50,000. Or Everest at $100,000. Each tier gives you access to AI-signal-driven portfolios calibrated to different risk levels, high growth, balanced, and defensive.`, 0],
  [43, `Step two: your account is opened through our registered investment advisor partner. They handle compliance, custody, and regulatory requirements. Your capital is held at a qualified custodian, the same infrastructure used by institutional investors. <break time="400ms"/> Your money never sits on TradeAlgo's servers. Ever.`, 0],
  [44, `Step three: the AI goes to work. Every week, it evaluates every position, scores every security, and generates rebalancing signals. The RIA executes. You see everything, every allocation change, every reasoning note, every performance metric.`, 0],
  [45, `This is what your dashboard looks like. Every position. Every weight. Every AI reasoning note. Updated every week.`, 0],
  [46, `You don't need to watch the market. You don't need to make trading decisions. You don't need to call your advisor. <break time="500ms"/> The AI generates signals. The RIA executes. You verify.`, 0],

  // ── SCENE 8: Three Tiers (14:00-16:00) ──
  [47, `3 tiers. Each one gives you access to AI-powered signal portfolios at a different scale.`, 0],
  [48, `Atlas is your entry point. $25,000. 3 portfolios, high growth, balanced, and defensive. The high-growth portfolio returned 43.9 percent in the past year. <break time="300ms"/> This is where you test the AI with a meaningful but manageable allocation.`, 0],
  [49, `Titan doubles the investment to $50,000 and gives you broader diversification, up to 40 securities per portfolio. Dynamic Upside returned 45.5 percent.`, 0],
  [50, `And Everest. This is the flagship. $100,000. 5 portfolios instead of 3. Up to 51 holdings per portfolio. The deepest diversification, the broadest sector coverage, and the AI's most sophisticated signal set. <break time="400ms"/> Momentum Ascent, the top performer at plus 52.8 percent, is an Everest-exclusive portfolio.`, 0],
  [51, `All 3 tiers are 3-year licenses. And there's a reason for that. The AI's signals need time to compound. Short-term volatility is noise. 3 years gives the system room to navigate full market cycles, earnings seasons, Fed decisions, corrections, and rallies. <break time="400ms"/> This isn't a monthly subscription you cancel when the market dips. It's a commitment to a process, the same way institutional investors think.`, 0],

  // ── SCENE 9: Objection Handling (16:00-19:00) ──
  [52, `Now, I know what you're thinking. Let me address it head-on. <break time="400ms"/> What about market crashes? <break time="400ms"/> Fair question. Let me show you what the AI is doing right now. It's holding short S&P 500 positions in 8 of 11 portfolios. It has a 5 percent gold allocation across every portfolio. It maintains a defensive core, consumer staples, utilities, healthcare, in every portfolio regardless of risk level. <break time="300ms"/> Last month, the market pulled back. The AI's portfolios drew down 2 to 3.7 percent. The hedges were already in place. The AI doesn't react to crashes. It positions for them in advance.`, 0],
  [53, `This is a lot of money. <break time="400ms"/> $25,000 is meaningful. I respect that. But consider: this isn't a fee. This is invested capital. It's your money, in a portfolio, guided by AI-generated signals and executed by a regulated RIA. <break time="300ms"/> You're not paying $25,000 for advice. You're allocating $25,000 to a portfolio that returned up to 43.9 percent in its first year. <break time="300ms"/> And here's the comparison: a financial advisor managing $500,000 charges $5,000 a year. Over 3 years, that's $15,000 in fees alone, for quarterly rebalancing. The AI generates signals weekly, analyzes 86 securities, and your $25,000 is working for you, not disappearing into advisory fees.`, 0],
  [54, `Is AI safe for investing? <break time="400ms"/> The AI doesn't have a buy button on your account. It generates signals. <break time="400ms"/> The RIA partner, a regulated fiduciary, executes through institutional channels. Your capital is held at a qualified custodian, not at TradeAlgo. <break time="300ms"/> And the AI's reasoning is documented and transparent. You can read exactly why it generated every signal. This is the most transparent AI-driven portfolio structure available to individual investors.`, 0],
  [55, `Why not just buy index funds? <break time="400ms"/> You can. And the low-volatility portfolios actually include index fund ETFs as a core holding. But here's what index funds don't do. <break time="300ms"/> They don't hedge. They don't rotate into defensive sectors when macro conditions shift. They don't trim overbought positions when RSI hits 70. They don't add short S&P positions before a pullback. <break time="300ms"/> An index fund held through a 20 percent drawdown is a 20 percent loss. Active risk management through AI signals is what you're getting beyond passive exposure.`, 0],
  [56, `How is this different from Wealthfront or Betterment? <break time="400ms"/> Robo-advisors allocate your money across 6 to 12 ETFs based on a risk questionnaire. Then they rebalance when your allocation drifts. That's it. <break time="300ms"/> The Wealth Series AI generates signals across 86 individual securities. It drives weekly rebalancing through the RIA. It uses RSI, CCI, momentum, sector rotation, and macro analysis. It writes institutional-grade reasoning for every signal. <break time="300ms"/> And its top portfolio returned plus 52.8 percent in a year. Wealthfront's typical return? Market average. These are fundamentally different products.`, 0],
  [57, `3 years is a long commitment. <break time="400ms"/> We designed the 3-year license for a reason. AI-driven portfolio strategies work over cycles, not weeks. Last month, high-risk portfolios drew down 3 to 4 percent. That's normal. Over a year, those same portfolios returned 43 to 52 percent. <break time="300ms"/> The AI's signals need time to navigate earnings seasons, Fed decisions, corrections, and rallies. A 3-year window aligns with how institutional investors think, and it's why the results compound.`, 0],

  // ── SCENE 10: Social Proof / Authority (19:00-21:00) ──
  [58, `Let me tell you who's behind this, because the technology only matters if you trust the people operating it.`, 0],
  [59, `TradeAlgo built the AI. They're a technology company, not a brokerage, not a fund. Their job is building and refining the AI signal-generation algorithms. That's what they do. That's all they do.`, 0],
  [60, `The accounts are managed by the RIA partner, a registered investment advisor regulated by the SEC. They are a fiduciary, legally obligated to act in your best interest. <break time="400ms"/> Your capital is held at a qualified custodian. It never sits on TradeAlgo's balance sheet. It never sits on the RIA's balance sheet. It's in your name, at a qualified custodian, overseen by a regulated fiduciary, guided by AI signals built by a technology company.`, 0],
  [61, `3 separate entities. 3 layers of oversight. One AI system with a documented track record.`, 0],
  [62, `And the track record isn't a pitch deck with cherry-picked numbers. It's 55 documented rebalancing events. Every trade timestamped. Every AI reasoning note archived. This is the most auditable AI-driven portfolio system available to individual investors. <break time="400ms"/> You don't have to take our word for it. You can verify every single trade yourself.`, 0],

  // ── SCENE 11: Urgency (21:00-22:00) ──
  [63, `While you've been watching this, the AI hasn't stopped. It's evaluating. It's scoring. It's preparing for the next rebalance.`, 0],
  [64, `Every week you wait is a week of compounding you miss. Not hypothetical compounding, documented, transparent, AI-signal-driven compounding across 86 securities.`, 0],
  [65, `And here's the reality: the RIA can only onboard so many new clients while maintaining the level of service and oversight these portfolios require. This isn't artificial scarcity. It's a function of managing real accounts responsibly. <break time="500ms"/> The question isn't whether this works. You've seen the data. The question is how many more weekly rebalances you want to watch from the outside.`, 0],

  // ── SCENE 12: Close / CTA (22:00-24:00) ──
  [66, `Let me bring it together.`, 0],
  [67, `You've seen 11 portfolios powered by AI-generated signals. Returns of up to 52.8 percent in a year. Institutional-grade reasoning for every position, every week. Risk management, hedges, gold, defensive positioning built into every portfolio. <break time="400ms"/> And you've seen the structure: a registered investment advisor. A qualified custodian. 3 layers of protection around your capital.`, 0],
  [68, `The next step is simple. Click below to schedule a consultation with our RIA partner. It's a 30-minute conversation, not a sales pitch. You'll review the portfolios, ask any question you have, and decide if this is the right fit for your financial situation.`, 0],
  [69, `The AI is generating signals right now. It produced rebalancing signals for all 11 portfolios 2 days ago. It will do it again next week. The only question is whether you'll be watching from the inside, or the outside.`, 0],
  [70, `Click below. Schedule your consultation. And see what AI-powered trading signals can do for your capital.`, 0],
  [71, null, 5],
];
