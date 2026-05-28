/**
 * One narrative thread for the landing page.
 * Each section answers ONE question — no repeated headlines or demos.
 */
export const pageStory = {
  hero: {
    eyebrow: "For creators who sell in the DMs",
    headline: "Never lose a buyer in your DMs again.",
    subhead:
      "Your followers are already asking to buy. TractionFlo shows you who's ready, what to say, and helps you reply — before they buy from someone else.",
    bullets: [
      "See exactly who's ready to buy",
      "Get a reply written for each person",
      "Close them before they go cold",
    ],
    roi: "One recovered sale can pay for a whole year.",
  },
  whatIsIt: {
    eyebrow: "In plain English",
    headline: "It's a buyer radar for your DMs.",
    body:
      "Connect your Instagram. TractionFlo watches your comments, DMs and engagement — then hands you a daily shortlist of followers who are ready to buy, with a reply ready to send. You just hit send.",
    contrast: {
      label: "Isn't this just another DM tool?",
      text: "Traditional DM tools bot every message — even the ones that should close a sale. TractionFlo automates the hello, then points you to the real people ready to buy so you close them personally. Automate the hello. Humanize the close.",
    },
    isNot: [
      "Not a spammy bot blasting auto-replies",
      "Not a flowchart automation builder",
      "Not one more inbox to babysit",
    ],
  },
  problem: {
    eyebrow: "The problem",
    headline: "Every missed DM is missed revenue.",
    subhead:
      "They asked. They engaged. You replied late — or never. That sale went to whoever answered first.",
    close: "You don't need more followers. You need to catch buyers you're already losing.",
    roi: "Most creators lose 5–15 ready buyers a month to slow replies. Win back just one and TractionFlo more than pays for itself.",
  },
  outcomes: {
    eyebrow: "What you get",
    headline: "Five outcomes. One inbox.",
    subhead: "Everything you care about — without complex tools or setup.",
  },
  howItWorks: {
    eyebrow: "See it in action",
    headline: "From first comment to real conversation.",
    subhead: "Pick a real scenario. TractionFlo handles the busywork — you close the sale.",
  },
  comparison: {
    eyebrow: "Why switch",
    headline: "Same revenue. 10× simpler.",
    subhead: "Stop fighting automation builders. Start closing from your DMs.",
    note: "You stay in control of every message. TractionFlo tells you who to message and what to say — you hit send. Never a bot pretending to be you.",
  },
  steps: {
    eyebrow: "How it works",
    headline: "Three steps. That's it.",
    subhead: "No builders. No flowcharts. Just buyers surfaced and replies ready.",
    items: [
      {
        step: "1",
        title: "Spot warm followers",
        text: "TractionFlo flags people asking about pricing, replying to stories, saving posts, and more.",
      },
      {
        step: "2",
        title: "Know what to say",
        text: "Get a suggested reply for each person — so you never stare at a blank message box.",
      },
      {
        step: "3",
        title: "Close while intent is hot",
        text: "Message the right people first. Win the sale before they buy from someone else.",
      },
    ],
  },
  whoFor: {
    eyebrow: "Is this you?",
    headline: "Built for people who sell in the DMs.",
    forYou: [
      "Coaches & consultants closing in conversations",
      "Creators selling products, courses or services",
      "Agencies & freelancers booking calls from DMs",
      "Brands drowning in comments and questions",
    ],
    notForYou: [
      "You don't sell anything (yet)",
      "You want a generic auto-reply bot",
      "You enjoy building complex automations",
    ],
  },
  founderNote: {
    eyebrow: "From the founder",
    headline: "We're building this with our first 100 users.",
    body: [
      "I kept watching creators lose real money — not because their content was bad, but because a ready buyer sat unanswered in their inbox for days.",
      "TractionFlo does one thing well: surface the people worth messaging, and hand you the reply. No bots pretending to be you. No automation maze.",
      "Founders get in early, lock the lowest price we'll ever offer, and shape what we build next. That's the deal.",
    ],
    signoff: "— The TractionFlo team",
  },
  faq: {
    eyebrow: "Before you ask",
    headline: "Questions founders ask us.",
    items: [
      {
        q: "Is this just another auto-reply bot?",
        a: "No. TractionFlo doesn't pretend to be you or spam your followers. It surfaces people showing real buying signals and suggests a reply — you stay in control of every message.",
      },
      {
        q: "How is this different from DM automation tools?",
        a: "It's the opposite approach. Traditional automation tools bot every message — even the ones that should close a sale. TractionFlo automates the hello, then tells you which real people are ready to buy so you close them personally. Automate the hello, humanize the close.",
      },
      {
        q: "Can it still auto-send my lead magnet or freebie?",
        a: "Yes. When someone comments for your freebie, TractionFlo can deliver it instantly — that part should be automated. The difference is what happens next: instead of botting the whole conversation, it flags the people showing real buying signals so you close them yourself.",
      },
      {
        q: "Do I need any technical skills or setup?",
        a: "None. There are no builders, flowcharts, or integrations to wire up. Connect your account and you'll see who to message today.",
      },
      {
        q: "What does it cost after the 90 days?",
        a: "Founders lock 10% of our public Pro price — forever. If Pro launches at $99/mo, you stay at $9.90/mo for life. No credit card to join.",
      },
      {
        q: "Which platforms does it work with?",
        a: "Instagram first — where most creator sales happen. TikTok and YouTube are next on the roadmap, and founders get them included.",
      },
      {
        q: "When do I get access?",
        a: "We're onboarding the first 100 founders in waves as we build. Join now to hold your spot and your pricing before public launch.",
      },
      {
        q: "Is my data safe?",
        a: "Yes. We only access what's needed to spot warm leads, never post or message without your action, and you can disconnect anytime.",
      },
    ],
  },
  founding: {
    eyebrow: "Founding access",
    headline: "Be an early founder. Not just another user.",
    subhead:
      "Join before public launch. Shape the product. Lock founder pricing while spots last.",
  },
} as const;
