// =============================================================================
// Content Empire - SEO Constants
// =============================================================================

// ---------------------------------------------------------------------------
// Site Identity
// ---------------------------------------------------------------------------

export const SITE_NAME = "Content Empire";
export const SITE_URL = "https://contentempire.it";
export const SITE_DESCRIPTION =
  "La piattaforma all-in-one con AI generativa per content creator. Genera, pubblica e monetizza contenuti su tutti i canali da un'unica dashboard.";
export const SITE_LOCALE = "it_IT";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

// ---------------------------------------------------------------------------
// Organization
// ---------------------------------------------------------------------------

export const ORGANIZATION_NAME = "Content Empire";
export const ORGANIZATION_LOGO = `${SITE_URL}/logo.png`;

// ---------------------------------------------------------------------------
// Color Palette
// ---------------------------------------------------------------------------

export const COLORS = {
  navy: "#0D1B2A",
  viola: "#8E44AD",
  arancione: "#E67E22",
  verde: "#27AE60",
} as const;

export type BrandColor = (typeof COLORS)[keyof typeof COLORS];

// ---------------------------------------------------------------------------
// Navigation Links (public site)
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Funzionalit\u00E0", href: "/funzionalita" },
  { label: "Prezzi", href: "/prezzi" },
  { label: "Blog", href: "/blog" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
];

// ---------------------------------------------------------------------------
// Social Links
// ---------------------------------------------------------------------------

export interface SocialLinks {
  instagram: string;
  tiktok: string;
  youtube: string;
  linkedin: string;
  twitter: string;
  facebook: string;
}

export const SOCIAL_LINKS: SocialLinks = {
  instagram: "https://instagram.com/contentempire",
  tiktok: "https://tiktok.com/@contentempire",
  youtube: "https://youtube.com/@contentempire",
  linkedin: "https://linkedin.com/company/contentempire",
  twitter: "https://twitter.com/contentempire",
  facebook: "https://facebook.com/contentempire",
};

// ---------------------------------------------------------------------------
// Pricing Plans
// ---------------------------------------------------------------------------

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  billingPeriod: "mese" | "anno";
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    currency: "EUR",
    billingPeriod: "mese",
    description: "Perfetto per iniziare e scoprire la piattaforma.",
    features: [
      "1 canale social collegato",
      "10 contenuti AI al mese",
      "Calendario editoriale base",
      "Analisi metriche essenziali",
    ],
    cta: "Inizia Gratis",
    highlighted: false,
  },
  {
    id: "starter",
    name: "Starter",
    price: 9.9,
    currency: "EUR",
    billingPeriod: "mese",
    description: "Per creator che vogliono crescere pi\u00F9 velocemente.",
    features: [
      "5 canali social collegati",
      "100 contenuti AI al mese",
      "Calendario editoriale avanzato",
      "Analisi metriche complete",
      "Programmazione automatica post",
      "Supporto email prioritario",
    ],
    cta: "Scegli Starter",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 19.9,
    currency: "EUR",
    billingPeriod: "mese",
    description: "Per professionisti che vivono di contenuti.",
    features: [
      "15 canali social collegati",
      "Contenuti AI illimitati",
      "Calendario editoriale avanzato",
      "Analisi metriche e report avanzati",
      "Programmazione automatica post",
      "Strumenti di monetizzazione",
      "A/B testing contenuti",
      "Supporto prioritario via chat",
    ],
    cta: "Scegli Pro",
    highlighted: true,
  },
  {
    id: "business",
    name: "Business",
    price: 49.9,
    currency: "EUR",
    billingPeriod: "mese",
    description: "Per team e agenzie con esigenze avanzate.",
    features: [
      "Canali social illimitati",
      "Contenuti AI illimitati",
      "Calendario editoriale team",
      "Analisi metriche e report personalizzati",
      "Programmazione automatica post",
      "Strumenti di monetizzazione avanzati",
      "A/B testing contenuti",
      "Gestione team e ruoli",
      "API access",
      "Account manager dedicato",
    ],
    cta: "Scegli Business",
    highlighted: false,
  },
];
