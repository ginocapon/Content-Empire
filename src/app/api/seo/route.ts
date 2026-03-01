import { NextRequest, NextResponse } from "next/server";

const mockAuditResults = {
  auditDate: "2026-02-28T15:00:00Z",
  overallScore: 78,
  pages: [
    {
      url: "/",
      title: "Home - Content Empire",
      score: 85,
      issues: [
        {
          type: "warning",
          message: "La meta description potrebbe essere più descrittiva.",
          suggestion:
            "Aggiungi una meta description di 150-160 caratteri che descriva chiaramente il servizio.",
        },
      ],
      metrics: {
        titleLength: 22,
        metaDescriptionLength: 95,
        h1Count: 1,
        imageWithoutAlt: 0,
        internalLinks: 8,
        externalLinks: 2,
        wordCount: 450,
        loadTime: 1.2,
      },
    },
    {
      url: "/blog",
      title: "Blog - Content Empire",
      score: 72,
      issues: [
        {
          type: "error",
          message: "Manca il tag H1 nella pagina.",
          suggestion: "Aggiungi un tag H1 unico e descrittivo nella pagina del blog.",
        },
        {
          type: "warning",
          message: "3 immagini senza attributo alt.",
          suggestion:
            "Aggiungi un testo alternativo descrittivo a tutte le immagini per migliorare l'accessibilità e la SEO.",
        },
      ],
      metrics: {
        titleLength: 23,
        metaDescriptionLength: 0,
        h1Count: 0,
        imageWithoutAlt: 3,
        internalLinks: 15,
        externalLinks: 0,
        wordCount: 280,
        loadTime: 1.8,
      },
    },
    {
      url: "/faq",
      title: "FAQ - Content Empire",
      score: 90,
      issues: [
        {
          type: "info",
          message: "Considera l'aggiunta di schema markup FAQ.",
          suggestion:
            "Implementa lo schema markup FAQPage per migliorare la visibilità nei risultati di ricerca.",
        },
      ],
      metrics: {
        titleLength: 22,
        metaDescriptionLength: 145,
        h1Count: 1,
        imageWithoutAlt: 0,
        internalLinks: 5,
        externalLinks: 1,
        wordCount: 1200,
        loadTime: 0.9,
      },
    },
    {
      url: "/contatti",
      title: "Contatti - Content Empire",
      score: 65,
      issues: [
        {
          type: "error",
          message: "Meta description mancante.",
          suggestion:
            "Aggiungi una meta description che includa informazioni di contatto e parole chiave rilevanti.",
        },
        {
          type: "warning",
          message: "Il tempo di caricamento è superiore a 3 secondi.",
          suggestion:
            "Ottimizza le immagini e riduci le risorse JavaScript per migliorare le prestazioni.",
        },
        {
          type: "warning",
          message: "Pochi link interni nella pagina.",
          suggestion:
            "Aggiungi link ad altre pagine rilevanti del sito per migliorare la navigazione e la distribuzione del link juice.",
        },
      ],
      metrics: {
        titleLength: 27,
        metaDescriptionLength: 0,
        h1Count: 1,
        imageWithoutAlt: 1,
        internalLinks: 2,
        externalLinks: 3,
        wordCount: 150,
        loadTime: 3.5,
      },
    },
  ],
  summary: {
    totalPages: 4,
    averageScore: 78,
    totalErrors: 2,
    totalWarnings: 4,
    totalInfo: 1,
    topIssue: "Meta description mancanti o troppo corte",
  },
};

export async function GET() {
  return NextResponse.json({
    success: true,
    audit: mockAuditResults,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const urls = body.urls || ["/"];

    return NextResponse.json(
      {
        success: true,
        message: "Audit SEO avviato con successo.",
        auditId: `audit_${Date.now()}`,
        urls,
        status: "in_progress",
        estimatedTime: "2-5 minuti",
      },
      { status: 202 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Formato della richiesta non valido.",
      },
      { status: 400 }
    );
  }
}
