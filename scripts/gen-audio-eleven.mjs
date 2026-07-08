// Generates demo call audio with ElevenLabs, one clip per transcript line.
// Output: public/audio/c{caseIndex}l{lineIndex}.mp3
// Run once:  XI_KEY=sk_... node scripts/gen-audio-eleven.mjs
// This calls the API only at generation time; the site serves the static mp3s (no per-play cost).
import { mkdirSync, writeFileSync } from "node:fs";

const KEY = process.env.XI_KEY;
if (!KEY) {
  console.error("Missing XI_KEY env var");
  process.exit(1);
}

const MODEL = "eleven_multilingual_v2";
const AGENT_VOICE = "cgSgspJ2msm6clMCkdW9"; // Jessica — warm, bright (the AI agent)

// more expressive settings for the leads so they don't sound flat/robotic
const AGENT_SETTINGS = { stability: 0.45, similarity_boost: 0.8, style: 0.15, use_speaker_boost: true };
const LEAD_SETTINGS = { stability: 0.3, similarity_boost: 0.85, style: 0.45, use_speaker_boost: true };

const cases = [
  {
    leadVoice: "hpp4J3VqNfWAUOO0d1Us", // Bella — Jessica (lead)
    lines: [
      ["agent", "Hi Jessica, it's Mia's team at Radiant Path. You joined our manifestation masterclass last month — last time you said you weren't quite ready to invest. Has anything shifted for you?"],
      ["lead", "Actually, yes. I've been doing the practices from the masterclass — I'm ready to talk about the full program."],
      ["agent", "That's wonderful. You also shared you wanted help with career transition and financial abundance — the eight-week program is built for exactly that. Would a call with Mia this week work to see if it's the right fit?"],
      ["lead", "Thursday evening would work."],
      ["agent", "Perfect. I'll book you for Thursday at 6 PM with Mia and send the prep workbook so you come in ready."],
      ["agent", "Before I let you go — quick recap. You're set for Thursday at 6 PM with Mia, and you'll get the prep workbook tonight. We'll focus on your career transition and the abundance goals you shared. Sound good?"],
      ["lead", "Yes, that's perfect. Thank you."],
    ],
  },
  {
    leadVoice: "iP95p4xoKVk53GoZ742B", // Chris — down-to-earth male
    lines: [
      ["agent", "Hi Marcus, following up on your quote request. Last time, the price came in higher than you expected — can I walk you through why it usually pays for itself?"],
      ["lead", "Go on. I did get a cheaper quote elsewhere, to be honest."],
      ["agent", "Understood. Most dealerships make the difference back in the first month from leads they'd have lost — I can show you the math. Does Tuesday work?"],
      ["lead", "Tuesday morning, sure."],
      ["agent", "Great. I'll build the R O I around a two-location setup like yours."],
    ],
  },
  {
    leadVoice: "Xb7hH8MSUJpSbSDYk0k2", // Alice — British female
    lines: [
      ["agent", "Hi Aisha, following up from Bloom Skincare — you'd asked for a demo but wanted to include your co-founder first. Is that still the plan?"],
      ["lead", "Yes, exactly. I didn't want to book anything without her."],
      ["agent", "Makes sense. I can find a time that works for you both and send her the invite directly. Does later this week work?"],
      ["lead", "Friday at eleven would be great."],
      ["agent", "Booked. I'll focus the walkthrough on D T C brands running Shopify and Meta ads, like Bloom."],
    ],
  },
];

mkdirSync("public/audio", { recursive: true });

async function tts(voiceId, text, settings, out) {
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
    {
      method: "POST",
      headers: { "xi-api-key": KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ text, model_id: MODEL, voice_settings: settings }),
    },
  );
  if (!res.ok) {
    throw new Error(`${res.status} ${await res.text()}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(out, buf);
  return buf.length;
}

// ONLY=c0lead re-renders just case 0's lead lines (leaves the agent clips untouched)
const only = process.env.ONLY;

for (let ci = 0; ci < cases.length; ci++) {
  const c = cases[ci];
  for (let li = 0; li < c.lines.length; li++) {
    const [speaker, text] = c.lines[li];
    if (only === "c0lead" && !(ci === 0 && speaker === "lead")) continue;
    if (only === "c0from5" && !(ci === 0 && li >= 5)) continue;
    if (only === "c0" && ci !== 0) continue;
    const voice = speaker === "agent" ? AGENT_VOICE : c.leadVoice;
    const settings = speaker === "agent" ? AGENT_SETTINGS : LEAD_SETTINGS;
    const out = `public/audio/c${ci}l${li}.mp3`;
    const size = await tts(voice, text, settings, out);
    console.log("wrote", out, `${size} bytes (${speaker})`);
  }
}
console.log("done");
