/** Fire conversion events when a founding access signup succeeds. */
export function trackFoundingAccessSignup() {
  if (typeof window === "undefined") return;

  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };

  w.gtag?.("event", "generate_lead", {
    event_category: "founding_quiz",
    event_label: "Founding Access",
  });

  w.fbq?.("track", "Lead");
}
