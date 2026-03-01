// =============================================================================
// Content Empire - JSON-LD Structured Data Components
// =============================================================================

import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  ORGANIZATION_NAME,
  ORGANIZATION_LOGO,
  SOCIAL_LINKS,
} from "@/lib/seo/constants";

// ---------------------------------------------------------------------------
// Organization
// ---------------------------------------------------------------------------

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    logo: ORGANIZATION_LOGO,
    description: SITE_DESCRIPTION,
    sameAs: [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.tiktok,
      SOCIAL_LINKS.youtube,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.facebook,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@contentempire.it",
      contactType: "customer service",
      availableLanguage: "Italian",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ---------------------------------------------------------------------------
// WebSite (with SearchAction)
// ---------------------------------------------------------------------------

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "it-IT",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ---------------------------------------------------------------------------
// FAQ Page
// ---------------------------------------------------------------------------

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ---------------------------------------------------------------------------
// Blog Posting
// ---------------------------------------------------------------------------

interface BlogPostingJsonLdProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image: string;
}

export function BlogPostingJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  authorName,
  image,
}: BlogPostingJsonLdProps) {
  const absoluteImage = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    image: absoluteImage,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
      logo: {
        "@type": "ImageObject",
        url: ORGANIZATION_LOGO,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ---------------------------------------------------------------------------
// Breadcrumb List
// ---------------------------------------------------------------------------

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
