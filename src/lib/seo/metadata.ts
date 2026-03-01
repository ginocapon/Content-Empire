// =============================================================================
// Content Empire - Metadata Factory
// =============================================================================

import type { Metadata } from "next";

import {
  SITE_NAME,
  SITE_URL,
  SITE_LOCALE,
  DEFAULT_OG_IMAGE,
} from "./constants";

// ---------------------------------------------------------------------------
// Options
// ---------------------------------------------------------------------------

export interface CreateMetadataOptions {
  /** Page title (without the site-name suffix). */
  title: string;
  /** Meta description for the page. */
  description: string;
  /** Path relative to the site root, e.g. "/prezzi". */
  path: string;
  /** Optional custom Open Graph image URL (absolute or relative). */
  ogImage?: string;
  /** When true the page will not be indexed by search engines. */
  noIndex?: boolean;
  /** Optional additional keywords for meta tags. */
  keywords?: string[];
  /** Optional canonical URL override (absolute). */
  canonicalUrl?: string;
}

// ---------------------------------------------------------------------------
// Factory
// ---------------------------------------------------------------------------

/**
 * Creates a fully-formed Next.js `Metadata` object for a given page.
 *
 * Title pattern: "Page Title | Content Empire"
 *
 * @example
 * ```ts
 * export const metadata = createMetadata({
 *   title: "Prezzi",
 *   description: "Scopri i piani di Content Empire...",
 *   path: "/prezzi",
 * });
 * ```
 */
export function createMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
  keywords,
  canonicalUrl: canonicalUrlOverride,
}: CreateMetadataOptions): Metadata {
  const canonicalUrl = canonicalUrlOverride ?? `${SITE_URL}${path}`;
  const resolvedOgImage = ogImage ?? DEFAULT_OG_IMAGE;
  const absoluteOgImage = resolvedOgImage.startsWith("http")
    ? resolvedOgImage
    : `${SITE_URL}${resolvedOgImage}`;

  return {
    title: {
      default: `${title} | ${SITE_NAME}`,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    ...(keywords && keywords.length > 0 && { keywords }),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [
        {
          url: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [absoluteOgImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
          },
        },
  };
}
