import { absoluteUrl, siteConfig } from "@/lib/seo";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: absoluteUrl("/icon"),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Founding access — free during early access",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is TractionFlo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TractionFlo helps businesses turn social conversations into leads, follow-ups and customers using intelligent workflows — without complex automation builders.",
        },
      },
      {
        "@type": "Question",
        name: "Who is TractionFlo for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Creators, coaches, agencies and businesses who get leads from comments and DMs and want more sales without manual follow-up work.",
        },
      },
      {
        "@type": "Question",
        name: "How is TractionFlo different from automation builders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You describe your goal in plain language. TractionFlo builds the workflow for you — no drag-and-drop builders, arrows or conditions.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
