/**
 * Front-end demo data for the landing page product visualizations only.
 * None of this is persisted or sent anywhere — it exists purely to make the
 * voice-agent experience feel real in the marketing UI.
 */

export type CallLead = {
  name: string;
  title: string;
  company: string;
  phone: string;
  initials: string;
};

export type MemoryFact = {
  when: string;
  kind: "event" | "call" | "note" | "profile";
  text: string;
};

export type TranscriptLine = {
  at: string;
  speaker: "agent" | "lead";
  name: string;
  text: string;
  /** The exact memory the agent is drawing on for this line — proof it's personal. */
  recall?: { source: string; note: string; mem?: number };
  /** Spoken recap to the lead before hanging up */
  recap?: boolean;
};

export type CallSummary = {
  duration: string;
  sentiment: string;
  objection: { was: string; status: string };
  points: string[];
  nextSteps: string[];
};

export type CallCase = {
  lead: CallLead;
  /** Course or offer being sold — shown in the demo header */
  program?: string;
  memory: MemoryFact[];
  transcript: TranscriptLine[];
  outcome: { status: string; when: string };
  summary: CallSummary;
};

/** Numbers shown on the demo to hint that this runs across the whole list, 24/7. */
export const demoStats = { total: "1,240", bookedToday: 18 };

/** Rows shown during the "upload" stage; the row matching the live lead is highlighted. */
export const uploadRows = [
  { initials: "JM", name: "Jessica Morgan", meta: "Masterclass · 32 days cold" },
  { initials: "MC", name: "Marcus Chen", meta: "Quote request · 18 days cold" },
  { initials: "AK", name: "Aisha Khan", meta: "Demo request · 9 days cold" },
  { initials: "JT", name: "James Tan", meta: "Free trial · 34 days cold" },
];

/** Each cycle of the demo works a different lead, start to finish. */
export const demoCases: CallCase[] = [
  {
    lead: {
      name: "Jessica Morgan",
      title: "Masterclass attendee",
      company: "Radiant Path Coaching",
      phone: "+1 (310) 555-0142",
      initials: "JM",
    },
    program: "Manifest Your Next Chapter",
    memory: [
      { when: "32 days ago", kind: "event", text: "Registered for the free “Manifest Your Next Chapter” masterclass" },
      { when: "32 days ago", kind: "call", text: "Loved the content — said she wasn't ready to invest in the program yet" },
      { when: "Note", kind: "note", text: "Wants career transition + financial abundance" },
      { when: "Profile", kind: "profile", text: "Corporate background · ready for a life change" },
    ],
    transcript: [
      {
        at: "00:06",
        speaker: "agent",
        name: "Flo",
        text: "Hi Jessica, it's Mia's team at Radiant Path. You joined our manifestation masterclass last month — last time you said you weren't quite ready to invest. Has anything shifted for you?",
        recall: { source: "Call · 32 days ago", note: "Wasn't ready to invest in the program", mem: 1 },
      },
      {
        at: "00:19",
        speaker: "lead",
        name: "Jessica",
        text: "Actually, yes. I've been doing the practices from the masterclass — I'm ready to talk about the full program.",
      },
      {
        at: "00:31",
        speaker: "agent",
        name: "Flo",
        text: "That's wonderful. You also shared you wanted help with career transition and financial abundance — the eight-week program is built for exactly that. Would a call with Mia this week work to see if it's the right fit?",
        recall: { source: "Masterclass note", note: "Career transition + financial abundance", mem: 2 },
      },
      { at: "00:44", speaker: "lead", name: "Jessica", text: "Thursday evening would work." },
      {
        at: "00:51",
        speaker: "agent",
        name: "Flo",
        text: "Perfect. I'll book you for Thursday at 6 PM with Mia and send the prep workbook so you come in ready.",
        recall: { source: "Program page", note: "Manifest Your Next Chapter · 8 weeks", mem: 3 },
      },
      {
        at: "01:03",
        speaker: "agent",
        name: "Flo",
        text: "Before I let you go — quick recap. You're set for Thursday at 6 PM with Mia, and you'll get the prep workbook tonight. We'll focus on your career transition and the abundance goals you shared. Sound good?",
        recap: true,
      },
      { at: "01:16", speaker: "lead", name: "Jessica", text: "Yes, that's perfect. Thank you." },
    ],
    outcome: { status: "Discovery call booked", when: "Thu, May 16 · 6:00 PM" },
    summary: {
      duration: "3:32",
      sentiment: "Positive",
      objection: { was: "Not ready to invest in the program", status: "Resolved" },
      points: [
        "Practicing masterclass exercises — now ready for the program",
        "Goals: career transition and financial abundance",
        "Best fit: 8-week Manifest Your Next Chapter",
      ],
      nextSteps: [
        "Discovery call booked for Thu, 6:00 PM",
        "Prep workbook sent tonight",
        "Coach Mia briefed on her goals",
      ],
    },
  },
  {
    lead: {
      name: "Marcus Chen",
      title: "Owner",
      company: "Chen Auto Group",
      phone: "+1 (206) 555-0197",
      initials: "MC",
    },
    memory: [
      { when: "18 days ago", kind: "event", text: "Requested a quote from the pricing page" },
      { when: "18 days ago", kind: "call", text: "Said the price was higher than expected" },
      { when: "Note", kind: "note", text: "A competitor quoted him less" },
      { when: "Profile", kind: "profile", text: "2 dealerships · 40 staff" },
    ],
    transcript: [
      {
        at: "00:06",
        speaker: "agent",
        name: "Flo",
        text: "Hi Marcus, following up on your quote request. Last time, the price came in higher than you expected — can I walk you through why it usually pays for itself?",
        recall: { source: "Call · 18 days ago", note: "Price higher than expected" },
      },
      {
        at: "00:20",
        speaker: "lead",
        name: "Marcus",
        text: "Go on. I did get a cheaper quote elsewhere, to be honest.",
      },
      {
        at: "00:29",
        speaker: "agent",
        name: "Flo",
        text: "Understood. Most dealerships make the difference back in the first month from leads they'd have lost — I can show you the math. Does Tuesday work?",
        recall: { source: "Note", note: "A competitor quoted him less" },
      },
      { at: "00:45", speaker: "lead", name: "Marcus", text: "Tuesday morning, sure." },
      {
        at: "00:51",
        speaker: "agent",
        name: "Flo",
        text: "Great. I'll build the ROI around a two-location setup like yours.",
        recall: { source: "Profile", note: "2 dealerships · 40 staff" },
      },
    ],
    outcome: { status: "Demo booked", when: "Tue, May 14 · 9:30 AM" },
    summary: {
      duration: "2:47",
      sentiment: "Warming up",
      objection: { was: "Price — cheaper competitor quote", status: "Addressed" },
      points: [
        "Had a cheaper competitor quote",
        "Reframed cost against lost leads",
        "Runs 2 dealerships",
      ],
      nextSteps: [
        "Demo booked for Tue, 9:30 AM",
        "ROI math prepared",
        "Two-location setup noted",
      ],
    },
  },
  {
    lead: {
      name: "Aisha Khan",
      title: "Founder",
      company: "Bloom Skincare",
      phone: "+44 20 7946 0521",
      initials: "AK",
    },
    memory: [
      { when: "9 days ago", kind: "event", text: "Requested a demo, then went quiet" },
      { when: "9 days ago", kind: "call", text: "Wants to include her co-founder first" },
      { when: "Note", kind: "note", text: "Scaling DTC on Shopify + Meta ads" },
      { when: "Profile", kind: "profile", text: "E-commerce brand · team of 5" },
    ],
    transcript: [
      {
        at: "00:07",
        speaker: "agent",
        name: "Flo",
        text: "Hi Aisha, following up from Bloom Skincare — you'd asked for a demo but wanted to include your co-founder first. Is that still the plan?",
        recall: { source: "Call · 9 days ago", note: "Wants to loop in her co-founder" },
      },
      {
        at: "00:22",
        speaker: "lead",
        name: "Aisha",
        text: "Yes, exactly. I didn't want to book anything without her.",
      },
      {
        at: "00:31",
        speaker: "agent",
        name: "Flo",
        text: "Makes sense. I can find a time that works for you both and send her the invite directly. Does later this week work?",
        recall: { source: "Request · 9 days ago", note: "Requested a demo" },
      },
      { at: "00:46", speaker: "lead", name: "Aisha", text: "Friday at 11 would be great." },
      {
        at: "00:52",
        speaker: "agent",
        name: "Flo",
        text: "Booked. I'll focus the walkthrough on DTC brands running Shopify and Meta ads, like Bloom.",
        recall: { source: "Note", note: "Shopify + Meta ads" },
      },
    ],
    outcome: { status: "Demo booked", when: "Fri, May 17 · 11:00 AM" },
    summary: {
      duration: "2:58",
      sentiment: "Positive",
      objection: { was: "Needed her co-founder involved", status: "Resolved" },
      points: [
        "Wanted her co-founder included",
        "Runs DTC on Shopify + Meta ads",
        "Team of 5",
      ],
      nextSteps: [
        "Demo booked for Fri, 11:00 AM",
        "Co-founder invited directly",
        "DTC-focused walkthrough prepared",
      ],
    },
  },
];

export type LanguageSample = {
  language: string;
  region: string;
  text: string;
};

/** Small multilingual samples for the "in any language" visualization. */
export const languageSamples: LanguageSample[] = [
  { language: "Português", region: "Brazil", text: "Olá! Vi que você participou do nosso webinar." },
  { language: "English", region: "United States", text: "Hi Jessica, it's Mia's team from Radiant Path Coaching." },
  { language: "Español", region: "Mexico", text: "Hola, ¿sigue interesada en escalar su agencia?" },
  { language: "Français", region: "France", text: "Bonjour Jessica, avez-vous un moment cette semaine ?" },
  { language: "日本語", region: "Japan", text: "先日のマスタークラスへのご参加ありがとうございました。" },
  { language: "Deutsch", region: "Germany", text: "Hallo Jessica, passt Ihnen ein kurzer Rückruf?" },
];

/**
 * A different lead than the live-call demo — price objection on the program —
 * so Lead Memory shows breadth without repeating Jessica's story.
 */
export const memoryLead = {
  name: "Priya Shah",
  title: "Masterclass attendee",
  company: "Radiant Path Coaching",
  initials: "PS",
};

export type MemoryEvent = {
  date: string;
  type: "attended" | "call" | "objection" | "booked" | "note";
  title: string;
  detail: string;
};

export const demoMemory: MemoryEvent[] = [
  {
    date: "Mar 8",
    type: "attended",
    title: "Joined free masterclass",
    detail: "Stayed for the full session — high engagement on career transition content.",
  },
  {
    date: "Mar 10",
    type: "call",
    title: "First AI follow-up",
    detail: "Interested in the program, but said the investment felt like a big step right now.",
  },
  {
    date: "Mar 10",
    type: "objection",
    title: "Objection captured",
    detail: "“I need to sit with the price before I commit to anything.”",
  },
  {
    date: "Mar 18",
    type: "booked",
    title: "Discovery call booked",
    detail: "AI reframed the investment around her goals. Tue, Mar 18 · 5:00 PM.",
  },
];

export const memoryNextAction = {
  label: "Next best action",
  value: "Send the program overview and payment plan options before the discovery call.",
};
