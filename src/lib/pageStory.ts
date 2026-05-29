/**
 * One narrative thread for the landing page.
 * Each section answers ONE question — no repeated headlines or demos.
 */
export const pageStory = {
  hero: {
    eyebrow: "Turn DMs into paying customers",
    headline: "Your audience is already trying to buy from you.",
    subhead:
      "TractionFlo turns your Instagram DMs and comments into paying customers — spot who's ready, reply with a message personalized to each one, and get paid. All on autopilot.",
    bullets: [
      "Spot every follower ready to buy",
      "Personalized to each person — sent automatically",
      "Take the offer to payment and get paid",
    ],
    roi: "One recovered sale can pay for a whole year.",
  },
  problem: {
    eyebrow: "The real problem",
    headline: "You don't have a traffic problem. You have a follow-up problem.",
    subhead:
      "You're getting DMs, comments and story replies. The money leaks out between “interested” and “paid” — because nobody follows up in time.",
    close: "More reach won't fix it. Catching and closing the buyers you already have will.",
    roi: "Most creators lose 5–15 ready buyers a month to slow follow-up. Win back just one and TractionFlo more than pays for itself.",
  },
  personas: {
    eyebrow: "Personal, at scale",
    headline: "Every interested follower gets personal attention.",
    subhead: "No mass blasts. Each person gets the right message at the right moment — in your voice.",
    items: [
      {
        tag: "Ready to buy",
        signal: "“How much? Do you have spots?”",
      },
      {
        tag: "On the fence",
        signal: "“Does this actually work for…?”",
      },
      {
        tag: "Silent but hot",
        signal: "Saves posts, watches every story — never messages",
        star: true,
        starLabel: "Most creators never see this one",
      },
      {
        tag: "Past customer",
        signal: "Bought before — ready to buy again",
      },
    ],
    note: "TractionFlo surfaces every one — and sends each a personal message, automatically.",
  },
  journey: {
    eyebrow: "How a sale happens",
    headline: "From follower to paying customer.",
    subhead: "TractionFlo carries each person through the whole journey — without you juggling tools.",
    steps: [
      { label: "Follower", text: "Someone shows interest — a comment, a save, a story reply." },
      { label: "Conversation", text: "You reply personally, with the right message at the right time." },
      { label: "Offer", text: "Send your offer right inside the chat." },
      { label: "Payment", text: "They pay in the same conversation — no clunky links." },
      { label: "Customer", text: "Now a customer you can re-engage and resell." },
    ],
  },
  showcase: {
    eyebrow: "The platform",
    headline: "Everything you need to sell in the DMs. One place.",
    subhead: "Your inbox, your hottest opportunities, payments and customers — together, not scattered across five tools.",
    tabs: [
      {
        id: "inbox",
        label: "Inbox",
        title: "A smart inbox",
        text: "Every conversation in one place, sorted by who's most ready to buy.",
      },
      {
        id: "opportunities",
        label: "Opportunities",
        title: "Live opportunities",
        text: "Followers showing buying signals, surfaced daily — each with a reply ready to send.",
      },
      {
        id: "payments",
        label: "Payments",
        title: "Get paid in the chat",
        text: "Send your offer and collect payment without ever leaving the conversation.",
      },
      {
        id: "customers",
        label: "Customers",
        title: "Your customer list",
        text: "Everyone who bought, in one list — ready to re-engage and resell to.",
      },
    ],
  },
  comparison: {
    eyebrow: "Why switch",
    headline: "Five tools. Or one platform.",
    subhead: "Stop duct-taping a DM app, a bot builder, a spreadsheet, a link and a checkout. TractionFlo does it all — and keeps it personal.",
    note: "Bots blast everyone the same canned reply. TractionFlo writes a different message for each person — their name, what they asked, what they did — and sends it automatically. Automatic, but never generic.",
  },
  founderNote: {
    eyebrow: "From the founder",
    headline: "We're building this with our first 25 users.",
    body: [
      "I kept watching creators lose real money — not because their content was bad, but because a ready buyer sat unanswered in their inbox for days.",
      "TractionFlo brings the whole sale into one place: spot the people worth messaging, send each a message personalized to them, take it to payment, and get paid. No generic bot blasts. No five-tool maze.",
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
        a: "It auto-replies, but not like a bot. A bot sends everyone the same canned message. TractionFlo writes a unique message for each person — using their name, their question, and what they did — so it reads like you actually wrote it. You set the voice and rules; it personalizes and sends.",
      },
      {
        q: "Why one platform instead of the tools I already use?",
        a: "Most creators duct-tape a DM app, a bot builder, a spreadsheet of leads, a payment link and manual follow-ups. TractionFlo replaces all of it: spot buyers, reply personally, send the offer and get paid — in one place, without the busywork.",
      },
      {
        q: "Do you really handle payments?",
        a: "Yes. You can send your offer and collect payment right inside the conversation — no clunky links or separate checkout. Buyers pay where they're already talking to you.",
      },
      {
        q: "Can it still auto-send my lead magnet or freebie?",
        a: "Yes. When someone comments for your freebie, TractionFlo delivers it instantly — then follows up with a message personalized to that person, automatically. Same speed as a bot, without the canned, copy-paste feel.",
      },
      {
        q: "Do I need any technical skills or setup?",
        a: "None. There are no builders, flowcharts, or integrations to wire up. Connect your account and you'll see who to message today.",
      },
      {
        q: "What does it cost after the 90 days?",
        a: "Founders lock 10% of our public Pro price — for life. Whatever Pro costs at launch, you only ever pay a tenth of it. No credit card to join.",
      },
      {
        q: "Which platforms does it work with?",
        a: "Instagram first — where most creator sales happen. TikTok and YouTube are next on the roadmap, and founders get them included.",
      },
      {
        q: "When do I get access?",
        a: "We're onboarding the first 25 founders in waves as we build. Join now to hold your spot and your pricing before public launch.",
      },
      {
        q: "Is my data safe?",
        a: "Yes. We only access what's needed to spot warm leads and process payments you choose to send, never message without your action, and you can disconnect anytime.",
      },
    ],
  },
  founding: {
    eyebrow: "Founding access",
    headline: "Be an early founder. Not just another user.",
    subhead:
      "Join before public launch. Shape the product. Lock founder pricing while spots last.",
  },
  finalCta: {
    eyebrow: "Last thing",
    headline: "Stop losing customers in your DMs.",
    subhead:
      "Your next customer already follows you. Start turning conversations into revenue today.",
  },
} as const;
