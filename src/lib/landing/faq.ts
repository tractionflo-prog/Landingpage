import { agentBrand } from "@/lib/agent";

export const landingFaqs = [
  {
    q: "What is an AI voice agent?",
    a: `An AI voice agent is software that makes real phone calls and holds natural, two-way conversations — it listens, answers questions, and responds like a person. ${agentBrand.name} is an AI voice agent built for coaches: it calls the leads on your list, handles their objections, and books discovery calls straight onto your calendar.`,
  },
  {
    q: "Will it sound like a robot?",
    a: `No. ${agentBrand.name} sounds natural — pauses, listens, and responds to what your lead actually says. Prospects hear a real conversation, not a rigid script or a robocall.`,
  },
  {
    q: "How is a call different from my email follow-up?",
    a: `Emails and DMs are one-way — easy to skim, easier to ignore. A phone call is a two-way conversation: ${agentBrand.name} hears the real objection, answers it in the moment, and books the call while you have their attention.`,
  },
  {
    q: "Which leads can it call?",
    a: `Anyone who showed interest but didn't enroll — free class attendees, webinar sign-ups, waitlist contacts, past clients who went quiet. ${agentBrand.name} works best on warm leads who already know your work.`,
  },
  {
    q: "Will this annoy my audience or get me in trouble?",
    a: `You control who gets called, when, and how often. ${agentBrand.name} respects your calling windows and consent settings, and honors opt-outs immediately — so outreach stays on your terms.`,
  },
  {
    q: "What happens when someone is ready to enroll?",
    a: `${agentBrand.name} books a discovery call on your calendar and sends the invite. Leads who aren't ready yet are remembered and followed up with automatically — with the right context each time.`,
  },
  {
    q: "How long does it take to set up?",
    a: `Most coaches are live the same afternoon. Upload your lead list, link your calendar, and ${agentBrand.name} starts calling — no scripts to write and no VA to manage.`,
  },
  {
    q: "What does it cost?",
    a: `Get free access — no credit card required. You only grow your usage once ${agentBrand.name} is actually booking discovery calls for you.`,
  },
] as const;
