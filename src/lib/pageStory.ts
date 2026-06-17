/**
 * One narrative thread for the landing page.
 * Each section answers ONE question — no repeated headlines or demos.
 */
export const pageStory = {
  hero: {
    eyebrow: "Designed for creators, coaches & agencies",
    headlinePre: "Turn Social Media Engagement Into ",
    headlineAccent: "Paying Customers",
    subhead:
      "Every day, potential customers interact with your content. TractionFlo helps you capture those opportunities, start the right conversations, and convert more of them into revenue.",
    trust: [
      "90 Days Free",
      "No Credit Card Required",
      "Founder Pricing Locked Forever",
      "Limited Founder Accounts",
    ],
    secondaryTrust: "No credit card required • Limited founding spots",
    socialProof: "Built with early creators & agencies",
  },
  compare: {
    eyebrow: "Why TractionFlo",
    headline: "More Than Automation",
    others: {
      name: "Most Tools",
      points: [
        "Send messages",
        "Trigger workflows",
        "Collect leads",
      ],
    },
    us: {
      name: "TractionFlo",
      badge: "Built for revenue",
      points: [
        "Captures buying intent",
        "Starts meaningful conversations",
        "Qualifies opportunities",
        "Helps drive conversions",
      ],
    },
  },
  liveExample: {
    eyebrow: "Real example",
    headline: "See The Entire Journey",
    subhead:
      "Follow Maya, an online coach, from her first comment all the way to a paying customer.",
  },
  problem: {
    eyebrow: "The hidden revenue problem",
    headline: "Most Opportunities Never Become Customers",
    body: "Potential customers are already interacting with your content through comments, messages, story replies, mentions, and follows. Without a system to capture and manage those interactions, valuable opportunities are lost every day.",
    items: [
      { label: "Comments", color: "pink" },
      { label: "Messages", color: "purple" },
      { label: "Story Replies", color: "rose" },
      { label: "Mentions", color: "blue" },
      { label: "Follows", color: "orange" },
    ] as { label: string; color: "pink" | "purple" | "rose" | "blue" | "orange" }[],
  },
  results: {
    eyebrow: "Results",
    headline: "Know Exactly What's Working",
    subhead: "Track every step from first interaction to closed customer.",
    metrics: [
      { value: 347, label: "Opportunities Identified", color: "pink" },
      { value: 212, label: "Conversations Started", color: "purple" },
      { value: 68, label: "Qualified Prospects", color: "blue" },
      { value: 21, label: "Calls Booked", color: "orange" },
      { value: 8, label: "Customers Acquired", color: "green" },
    ] as { value: number; label: string; color: "pink" | "purple" | "rose" | "blue" | "orange" | "green" }[],
  },
  whoItsFor: {
    headlinePre: "Built for creators, coaches & agencies who want ",
    headlineAccent: "results.",
    personas: [
      { label: "Coaches", color: "rose" },
      { label: "Consultants", color: "orange" },
      { label: "Agencies", color: "purple" },
      { label: "Educators", color: "blue" },
      { label: "Social Media Managers", color: "green" },
    ] as { label: string; color: "rose" | "orange" | "purple" | "blue" | "green" }[],
  },
  journey: {
    eyebrow: "The solution",
    headline: "Turn Every Interaction Into An Opportunity",
    subhead: "Everything needed to move prospects from social engagement to customer.",
    steps: [
      {
        label: "Monitor Engagement",
        text: "Capture comments, messages, story replies, mentions, and follows.",
      },
      {
        label: "Start Conversations",
        text: "Reach out and answer questions in real time.",
      },
      {
        label: "Qualify Interest",
        text: "Identify which prospects are ready to buy.",
      },
      {
        label: "Generate Revenue",
        text: "Book calls, send offers, and turn interest into revenue.",
      },
    ],
  },
  showcase: {
    eyebrow: "Product",
    headline: "Everything You Need To Generate Customers",
    subhead: "",
    tabs: [
      {
        id: "inbox",
        label: "Unified Inbox",
        title: "Unified Inbox",
        text: "All messages, comments and mentions from every platform in one place.",
      },
      {
        id: "qualification",
        label: "Lead Qualification",
        title: "Lead Qualification",
        text: "Automatically qualify leads and focus only on serious prospects.",
      },
      {
        id: "offers",
        label: "Offers & Payments",
        title: "Offers & Payments",
        text: "Send offers, collect payments and close deals without leaving the chat.",
      },
      {
        id: "roi",
        label: "Revenue Dashboard",
        title: "Revenue Dashboard",
        text: "Track leads, conversions and revenue with clear ROI for every client.",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why Social Media Managers Choose TractionFlo",
    headline: "Why Social Media Managers Choose TractionFlo",
    items: [
      { label: "More Leads", text: "Capture every opportunity so you never miss a lead." },
      { label: "More Customers", text: "Convert more conversations into paying customers." },
      { label: "Clear ROI", text: "Prove your impact with real revenue and results." },
      { label: "Save Time", text: "Automate the busy work and focus on growth." },
    ],
  },
  /** Retained for legacy components not on the homepage */
  personas: {
    eyebrow: "",
    headline: "",
    subhead: "",
    items: [] as { tag: string; signal: string; star?: boolean; starLabel?: string }[],
    note: "",
  },
  comparison: {
    eyebrow: "",
    headline: "",
    subhead: "",
    note: "",
  },
  founderNote: {
    eyebrow: "",
    headline: "",
    body: [] as string[],
    signoff: "",
  },
  faq: {
    eyebrow: "Common questions",
    headline: "Questions",
    headlineAccent: "Before You Join",
    items: [
      {
        q: "Is this just another chatbot?",
        a: "No. TractionFlo is a full revenue system that captures intent, qualifies leads, takes action, and collects payment — not a single auto-reply bot.",
      },
      {
        q: "Do I have to switch tools?",
        a: "No. TractionFlo connects to the Instagram account you already use and brings every conversation into one place.",
      },
      {
        q: "Will the messages still sound like me?",
        a: "Yes. You set the tone and approve the flows, so every conversation stays on-brand.",
      },
      {
        q: "Can it find buyers who haven't messaged yet?",
        a: "Yes. It surfaces people engaging quietly — saves, story views, and comments — so you can start the conversation first.",
      },
      {
        q: "Can I collect payments inside the chat?",
        a: "Yes. Send an offer and take payment right in the conversation — no separate funnel required.",
      },
      {
        q: "How long does setup take?",
        a: "About an hour. Connect your account, set your flows, and start capturing intent the same day.",
      },
      {
        q: "Who is TractionFlo built for?",
        a: "Creators, coaches, consultants and agencies who want to turn the engagement they already generate into paying customers.",
      },
      {
        q: "What happens after I join founding access?",
        a: "You get 90 days free, founder pricing locked for life, and a direct line to shape the roadmap.",
      },
    ] as { q: string; a: string }[],
  },
  founding: {
    eyebrow: "Founding access",
    headline: "Simple Pricing. Everything You Need.",
    subhead: "Turn social media engagement into paying customers with one simple plan.",
    planName: "Founding Access",
    price: "$79",
    period: "/month",
    priceNote: "Lock in founding pricing forever.",
    publicPrice: "Public Price: $99/month",
    features: [
      "1 Instagram Account",
      "Monitor Comments, DMs, Story Replies & Mentions",
      "Capture Every Opportunity",
      "Conversation Management",
      "Lead Qualification",
      "Booking & Conversion Workflows",
      "Analytics & Reporting",
      "Priority Founder Support",
    ],
    benefits: [
      "Founding pricing locked forever",
      "Early access to new features",
      "Direct access to founders",
      "Influence the product roadmap",
    ],
    cta: "Reserve Your Founding Spot",
    scarcity: "Limited founding spots available.",
    fineprint: "No contracts. Cancel anytime.",
  },
  finalCta: {
    eyebrow: "",
    headline: "Stop Managing Engagement.",
    headlineAccent: "Start Generating Customers.",
    subhead: "Join founding access and get 90 days free.",
    trust: ["90 Days Free", "Cancel Anytime", "Founder Pricing"],
  },
} as const;
