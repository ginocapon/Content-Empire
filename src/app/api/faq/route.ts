import { NextRequest, NextResponse } from "next/server";

const mockFaqs = [
  {
    category: "Generale",
    items: [
      {
        id: "1",
        question: "Cos'è Content Empire?",
        answer:
          "Content Empire è una piattaforma completa per la gestione dei contenuti digitali. Ti permette di creare, organizzare e pubblicare articoli, newsletter e molto altro da un'unica dashboard.",
      },
      {
        id: "2",
        question: "Come posso iniziare a usare la piattaforma?",
        answer:
          "Per iniziare, crea un account gratuito, accedi alla dashboard e inizia a creare i tuoi primi contenuti. La nostra guida introduttiva ti accompagnerà passo dopo passo.",
      },
      {
        id: "3",
        question: "È disponibile un piano gratuito?",
        answer:
          "Sì, offriamo un piano gratuito con funzionalità di base che ti permette di gestire fino a 10 articoli e 100 iscritti alla newsletter.",
      },
    ],
  },
  {
    category: "Contenuti",
    items: [
      {
        id: "4",
        question: "Quanti articoli posso pubblicare?",
        answer:
          "Il numero di articoli dipende dal tuo piano. Il piano gratuito consente fino a 10 articoli, mentre i piani a pagamento offrono pubblicazioni illimitate.",
      },
      {
        id: "5",
        question: "Posso importare contenuti da altre piattaforme?",
        answer:
          "Sì, supportiamo l'importazione di contenuti da WordPress, Medium e file CSV/JSON. Puoi trovare gli strumenti di importazione nella sezione Impostazioni.",
      },
      {
        id: "6",
        question: "Come funziona l'ottimizzazione SEO automatica?",
        answer:
          "Il nostro sistema analizza automaticamente i tuoi contenuti e fornisce suggerimenti per migliorare il posizionamento sui motori di ricerca, inclusi meta tag, struttura dei titoli e densità delle parole chiave.",
      },
    ],
  },
  {
    category: "Newsletter",
    items: [
      {
        id: "7",
        question: "Come gestisco gli iscritti alla newsletter?",
        answer:
          "Dalla sezione Newsletter della dashboard puoi visualizzare, segmentare e gestire tutti i tuoi iscritti. Puoi anche creare liste personalizzate per campagne mirate.",
      },
      {
        id: "8",
        question: "Posso personalizzare il template delle email?",
        answer:
          "Assolutamente sì. Offriamo un editor drag-and-drop per creare template personalizzati, oltre a una libreria di template predefiniti pronti all'uso.",
      },
    ],
  },
  {
    category: "Account e Fatturazione",
    items: [
      {
        id: "9",
        question: "Come posso aggiornare il mio piano?",
        answer:
          "Puoi aggiornare il tuo piano in qualsiasi momento dalla sezione Fatturazione nelle Impostazioni del tuo account. Il cambio è immediato e la differenza di prezzo viene calcolata proporzionalmente.",
      },
      {
        id: "10",
        question: "Quali metodi di pagamento accettate?",
        answer:
          "Accettiamo tutte le principali carte di credito (Visa, Mastercard, American Express), PayPal e bonifico bancario per i piani annuali.",
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    categories: mockFaqs,
    totalQuestions: mockFaqs.reduce(
      (total, category) => total + category.items.length,
      0
    ),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.question || typeof body.question !== "string" || body.question.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          error: "La domanda è obbligatoria.",
        },
        { status: 400 }
      );
    }

    if (!body.answer || typeof body.answer !== "string" || body.answer.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          error: "La risposta è obbligatoria.",
        },
        { status: 400 }
      );
    }

    const newFaq = {
      id: String(Date.now()),
      question: body.question.trim(),
      answer: body.answer.trim(),
      category: body.category || "Generale",
    };

    return NextResponse.json(
      {
        success: true,
        faq: newFaq,
        message: "FAQ creata con successo.",
      },
      { status: 201 }
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
