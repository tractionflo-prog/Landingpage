import { absoluteUrl, siteConfig } from "@/lib/seo";
import { landingFaqs } from "@/lib/landing/faq";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: absoluteUrl("/icon"),
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.supportEmail,
      contactType: "customer support",
    },
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
    url: siteConfig.url,
    image: absoluteUrl("/icon"),
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "AI Voice Agent",
    operatingSystem: "Web",
    description: siteConfig.description,
    keywords: siteConfig.keywords.join(", "),
    featureList: [
      "AI voice agent that calls leads back automatically",
      "Books discovery calls directly on your calendar",
      "Handles objections in natural two-way conversation",
      "Speaks 30+ languages",
      "Remembers every lead's history, notes, and objections",
      "Automatic call summaries and follow-up scheduling",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Coaches, course creators, fitness trainers, yoga instructors",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Founding access — get free access, no credit card",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landingFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
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
