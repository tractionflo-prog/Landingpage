/**
 * One narrative thread for the landing page.
 * Each section answers ONE question — no repeated headlines or demos.
 */
export const pageStory = {
  hero: {
    eyebrow: "Starts with Instagram · More channels coming soon",
    headlinePre: "Turn every conversation into a ",
    headlineAccent: "customer",
    subhead:
      "TractionFlo is the revenue operating system for your DMs. Capture every interested buyer, follow up automatically, and move each conversation toward a sale—so you win more customers and stop leaving money in your inbox.",
    trust: [
      "90 Days Free",
      "No Credit Card Required",
      "Founder Pricing Locked Forever",
      "Limited Founder Accounts",
    ],
    secondaryTrust: "No credit card required • Limited founding spots",
    socialProof: "Loved by 600+ business owners",
    outcomes: [
      { icon: "clock", value: "24/7", label: "Always working", sub: "Captures and replies even while you sleep." },
      { icon: "zap", value: "Seconds", label: "Reply time", sub: "Never keep an interested buyer waiting." },
      { icon: "inbox", value: "Unlimited", label: "Conversations at once", sub: "Handle every DM and comment—no extra staff, no backlog." },
      { icon: "target", value: "Zero", label: "Cold leads", sub: "Automatic follow-up until they’re ready to buy." },
    ],
  },
  opportunity: {
    index: "02",
    eyebrow: "The Opportunity",
    headlinePre: "Your next customer",
    headlineAccent: "is already on Instagram.",
    subhead:
      "Every comment, DM, story reply, and new follower is a buying signal. Miss it and that revenue goes to a competitor. TractionFlo surfaces who’s interested and exactly what to do next—so no opportunity slips away.",
    kicker: "Most businesses see notifications.",
    kickerAccentPre: "TractionFlo sees ",
    kickerAccent: "opportunities.",
    stats: [
      { value: "100%", label: "of comments, DMs & story replies captured" },
      { value: "0", label: "buying signals left unseen" },
      { value: "Instant", label: "alerts on high-intent buyers" },
    ],
  },
  customerView: {
    index: "03",
    eyebrow: "The Customer View",
    headlinePre: "One customer.",
    headlineAccent: "Everything that matters.",
    subhead:
      "TractionFlo unifies every interaction into one clear profile, so you always know what each person wants and reply with the right offer at the right time—and close more of the conversations you already have.",
    features: [
      { icon: "profile", title: "Know every customer instantly", text: "Every comment, DM, and reply in one timeline—so you never lose context or make a buyer repeat themselves." },
      { icon: "intent", title: "See who’s ready to buy", text: "TractionFlo reads intent and budget, so you spend your time on the people most likely to pay." },
      { icon: "action", title: "Always know the next step", text: "Get the exact move most likely to close the sale—no guessing, no leads going cold." },
    ],
    socialProof: "Know exactly what each person wants—and turn more conversations into paying customers.",
    stats: [
      { value: "360°", label: "view of every customer’s history" },
      { value: "Seconds", label: "to know what a buyer wants" },
      { value: "1-click", label: "next best action to close" },
    ],
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
    eyebrow: "The Problem",
    headlinePre: "Attention doesn’t grow a business.",
    headlineAccent: "Systems do.",
    body: "Every day, your content brings in likes, comments, DMs and new followers. But without a system to consistently move people forward, attention rarely becomes revenue.",
    attention: {
      title: "All this attention…",
      items: [
        { label: "Comments", value: "426", color: "pink", icon: "instagram" },
        { label: "DMs", value: "97", color: "blue", icon: "dm" },
        { label: "Story Replies", value: "184", color: "rose", icon: "story" },
        { label: "New Followers", value: "2,184", color: "green", icon: "followers" },
      ],
      totalLabel: "Total Interactions",
      totalValue: "2,891",
    },
    flowTop: [
      { title: "You create content", sub: "It gets seen", color: "purple", icon: "content" },
      { title: "People engage", sub: "They show interest", color: "orange", icon: "people" },
    ],
    missingSystem: {
      title: "The Missing System",
      text: "Leads get lost. DMs go unanswered. Interest fades. Opportunities slip away.",
    },
    flowBottom: [
      { title: "A few customers", sub: "Out of all that attention", color: "green", icon: "money" },
      { title: "No referrals", sub: "No repeatable growth", color: "rose", icon: "sad" },
    ],
    impact: {
      title: "The impact on your business",
      items: [
        { title: "Inconsistent revenue", text: "Up and down months that are hard to predict.", icon: "chart" },
        { title: "Time wasted", text: "Manually replying to DMs instead of growing.", icon: "clock" },
        { title: "Leads go cold", text: "No follow-up. No context. No next step.", icon: "cold" },
        { title: "Lost opportunities", text: "Interested people go to your competitors.", icon: "lost" },
      ],
      highlight: "The gap between attention and customers is where most businesses lose revenue.",
    },
    footer: {
      pre: "You don’t have an audience problem.",
      accent: "You have a system problem.",
      text: "TractionFlo is the system that turns every interaction into predictable growth.",
      cta: "See How It Works",
    },
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
    index: "03",
    eyebrow: "The Journey",
    headlinePre: "From one comment",
    headlineAccent: "to one customer.",
    subhead:
      "TractionFlo turns every interaction into a meaningful conversation, then guides your customers to take the next best step—automatically.",
    steps: [
      { id: "comment", title: "Comment received", color: "pink", time: "9:41 AM", caption: "Interest captured", tint: "" },
      { id: "conversation", title: "Conversation started", color: "blue", time: "9:43 AM", caption: "AI engages instantly", tint: "" },
      { id: "questions", title: "Questions answered", color: "sky", time: "9:47 AM", caption: "Builds trust & provides value", tint: "" },
      { id: "discovery", title: "Discovery call booked", color: "green", time: "10:02 AM", caption: "Books the right conversations", tint: "green" },
      { id: "payment", title: "Payment received", color: "orange", time: "May 14", caption: "Closes more sales", tint: "amber" },
      { id: "onboarding", title: "Onboarding complete", color: "purple", time: "May 15", caption: "Smooth onboarding, happy customers", tint: "" },
      { id: "referral", title: "Referral generated", color: "rose", time: "June 2", caption: "Turning happy customers into referrals", tint: "rose" },
    ],
    banner: "Every step happens automatically so you ",
    bannerHighlight: "never miss an opportunity.",
    proofPoints: ["Always on", "Personalized", "Learns & improves", "Drives results"],
  },
  howItWorks: {
    index: "04",
    eyebrow: "How It Works",
    headline: "Get started in minutes.",
    subhead: "Connect your account and TractionFlo starts turning Instagram conversations into paying customers—working around the clock so you don’t have to.",
    steps: [
      { icon: "instagram", title: "Connect Instagram", text: "Connect your Instagram Business account in under a minute—no setup headaches.", color: "pink", check: true },
      { icon: "capture", title: "Never miss a buyer", text: "Every comment, DM, story reply, and new follower is captured automatically—so no interested customer is ever missed.", color: "blue", check: true },
      { icon: "forward", title: "Convert on autopilot", text: "TractionFlo replies instantly, answers questions, books calls, and follows up—turning more conversations into sales without you lifting a finger.", color: "purple", check: true },
      { icon: "grow", title: "You focus on growing", text: "Spend your time creating and serving while TractionFlo works your inbox and grows revenue in the background.", color: "green", check: false },
    ],
    control: {
      title: "You’re always in control.",
      text: "Jump into any conversation, update what TractionFlo knows, and run everything from one simple dashboard.",
    },
    proof: "Built for creators, coaches, and businesses who want more customers without more manual work.",
    stats: [
      { value: "< 1 min", label: "to connect and go live" },
      { value: "24/7", label: "capturing & converting for you" },
      { value: "Hands-free", label: "qualifying, booking & follow-up" },
    ],
  },
  intelligence: {
    index: "04",
    eyebrow: "The Intelligence",
    headlinePre: "TractionFlo knows what to do next. ",
    headlineAccent: "Automatically.",
    subhead:
      "Our AI doesn’t just collect data — it understands intent, analyzes context, and decides the highest-impact next step for every customer.",
    features: [
      { icon: "brain", title: "Understands Intent", text: "Reads between the lines to understand what your customer really wants.", color: "green" },
      { icon: "target", title: "Scores & Prioritizes", text: "Identifies who is ready to buy and what they need to move forward.", color: "purple" },
      { icon: "predict", title: "Predicts Next Best Action", text: "Recommends the exact action that moves the conversation closer to a result.", color: "orange" },
      { icon: "learn", title: "Learns & Improves", text: "Every interaction makes the AI smarter and your results better.", color: "blue" },
    ],
    inputs: [
      { label: "Comment", icon: "comment", color: "pink" },
      { label: "DM", icon: "dm", color: "blue" },
      { label: "Story reply", icon: "story", color: "orange" },
      { label: "Mention", icon: "mention", color: "purple" },
      { label: "Follow", icon: "follow", color: "green" },
    ],
    contextLeft: [
      { title: "Customer History", text: "Every conversation is remembered.", icon: "history", color: "purple" },
      { title: "Business Context", text: "Your offers, pricing and goals.", icon: "heart", color: "rose" },
    ],
    contextRight: [
      { title: "Knowledge Base", text: "Your content, FAQs and resources.", icon: "book", color: "blue" },
      { title: "Past Outcomes", text: "What worked for similar customers.", icon: "users", color: "orange" },
    ],
    profile: {
      name: "Jessica Williams",
      badge: "High Intent",
      fields: [
        ["Interested In", "1:1 Coaching"],
        ["Budget", "$1,000 – $2,000"],
        ["Goal", "Build confidence"],
        ["Engagement", "High"],
        ["Relationship Stage", "Warm"],
        ["Last Interaction", "2h ago"],
      ],
    },
    nba: { label: "Next Best Action", title: "Send booking link for discovery call", cta: "Take Action", tag: "High Impact" },
    annoTop: "All customer interactions build a complete understanding",
    annoLeft: "AI decides the best next step",
    annoRight: "Personalized for Jessica. Timed perfectly. Designed to convert.",
    banner: { title: "Real intelligence. Real results.", text: "TractionFlo works 24/7 to grow your business on autopilot." },
    stats: [
      { value: "3.2x", label: "More conversations", icon: "comment", color: "green" },
      { value: "2.7x", label: "More booked calls", icon: "calendar", color: "blue" },
      { value: "3.1x", label: "More revenue", icon: "dollar", color: "orange" },
      { value: "2.3x", label: "More referrals", icon: "users", color: "pink" },
    ],
  },
  vision: {
    index: "05",
    eyebrow: "The Vision",
    headlinePre: "Starts with Instagram. Built for every customer ",
    headlineAccent: "everywhere.",
    subhead:
      "Your customers reach out everywhere—Instagram today, more channels soon. TractionFlo keeps every conversation and customer in one place, so you never drop a lead or lose context as you grow.",
    callout: {
      title: "One customer. One history. Everywhere.",
      text: "Wherever a conversation starts, TractionFlo remembers the full history and picks up right where it left off—so every customer feels known and no revenue falls through the cracks.",
    },
    platforms: [
      { name: "WhatsApp", desc: "DMs & Conversations", status: "soon", brand: "whatsapp", top: 13, left: 50 },
      { name: "Instagram", desc: "Comments, DMs, Stories, Mentions", status: "available", brand: "instagram", top: 35, left: 16 },
      { name: "TikTok", desc: "Comments & DMs", status: "soon", brand: "tiktok", top: 35, left: 84 },
      { name: "Facebook", desc: "Comments & Messages", status: "soon", brand: "facebook", top: 66, left: 21 },
      { name: "YouTube", desc: "Comments & DMs", status: "soon", brand: "youtube", top: 86, left: 50 },
      { name: "Email", desc: "Replies & Inquiries", status: "soon", brand: "email", top: 66, left: 83 },
    ],
    roadLabel: "The Road Ahead",
    roadHeadlinePre: "More channels.",
    roadHeadlinePost: "More possibilities.",
    roadText: "We’re building the operating system for customer conversations across the social web.",
    roadItems: [
      { icon: "comment", title: "More Channels", text: "Capture opportunities on every platform your customers use.", color: "purple" },
      { icon: "brain", title: "Smarter AI", text: "Better decisions on every conversation, so more of them turn into revenue.", color: "blue" },
      { icon: "zap", title: "More Automations", text: "Automate the full journey from first message to repeat sale—and reclaim your time.", color: "orange" },
      { icon: "chart", title: "Deeper Insights", text: "See exactly what drives revenue so you can do more of it.", color: "green" },
      { icon: "heart", title: "Stronger Relationships", text: "Turn happy customers into repeat buyers and referrals.", color: "rose" },
    ],
    mission: "Our mission is simple: help creators and businesses turn every conversation into lasting customers.",
    stats: [
      { value: "1 inbox", label: "for every channel your customers use" },
      { value: "One profile", label: "that follows them everywhere" },
      { value: "Zero", label: "context lost as you scale" },
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
    index: "07",
    eyebrow: "FAQ",
    headline: "Questions",
    headlineAccent: "before you join",
    stats: [
      { value: "30 sec", label: "to start your free trial" },
      { value: "90 days", label: "to try everything, free" },
      { value: "Anytime", label: "cancel — no contracts" },
    ],
    items: [
      {
        q: "Is this just another chatbot?",
        a: "No. TractionFlo is a revenue operating system for your conversations — it captures every buying signal, qualifies leads, moves each one toward a sale, and collects payment. A chatbot sends replies; TractionFlo grows revenue.",
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
    index: "06",
    eyebrow: "Founder Access",
    headline: "One system. One simple plan.",
    subhead: "Everything you need to capture every opportunity, convert more conversations, and grow revenue—at founder pricing locked in for life.",
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
    stats: [
      { value: "90 days", label: "free — full access" },
      { value: "$0", label: "to start, no credit card" },
      { value: "For life", label: "founder pricing locked in" },
    ],
  },
  finalCta: {
    eyebrow: "",
    headline: "Stop Managing Engagement.",
    headlineAccent: "Start Generating Customers.",
    subhead: "Join founding access and get 90 days free.",
    trust: ["90 Days Free", "Cancel Anytime", "Founder Pricing"],
  },
} as const;
