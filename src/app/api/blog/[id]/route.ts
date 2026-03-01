import { NextRequest, NextResponse } from "next/server";

const mockPosts = [
  {
    id: "1",
    title: "Come Ottimizzare il Tuo Sito per i Motori di Ricerca",
    slug: "come-ottimizzare-sito-motori-ricerca",
    excerpt:
      "Scopri le migliori strategie SEO per migliorare il posizionamento del tuo sito web nei risultati di ricerca.",
    content:
      "<p>L'ottimizzazione per i motori di ricerca (SEO) è fondamentale per qualsiasi sito web che voglia ottenere visibilità online. In questo articolo esploreremo le strategie più efficaci per migliorare il tuo posizionamento.</p><p>Dalla ricerca delle parole chiave all'ottimizzazione on-page, ogni aspetto contribuisce al successo della tua strategia SEO.</p>",
    published: true,
    category: "SEO",
    author: "Marco Rossi",
    createdAt: "2026-01-15T10:00:00Z",
    updatedAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Guida Completa al Content Marketing nel 2026",
    slug: "guida-completa-content-marketing-2026",
    excerpt:
      "Tutto quello che devi sapere per creare una strategia di content marketing efficace quest'anno.",
    content:
      "<p>Il content marketing continua ad essere una delle strategie più potenti per attrarre e fidelizzare i clienti. Nel 2026, le tendenze stanno evolvendo rapidamente.</p><p>Scopri come adattare la tua strategia per rimanere competitivo nel mercato digitale.</p>",
    published: true,
    category: "Content Marketing",
    author: "Laura Bianchi",
    createdAt: "2026-01-28T14:30:00Z",
    updatedAt: "2026-01-28T14:30:00Z",
  },
  {
    id: "3",
    title: "Newsletter Efficaci: Strategie per Aumentare il Tasso di Apertura",
    slug: "newsletter-efficaci-strategie-tasso-apertura",
    excerpt:
      "Impara a scrivere newsletter che i tuoi iscritti vorranno davvero leggere e condividere.",
    content:
      "<p>Le newsletter rimangono uno degli strumenti di marketing più efficaci. Ma come fare in modo che le persone le aprano effettivamente?</p><p>In questa guida, condividiamo le strategie testate per aumentare significativamente il tasso di apertura delle tue email.</p>",
    published: true,
    category: "Email Marketing",
    author: "Giuseppe Verdi",
    createdAt: "2026-02-05T09:15:00Z",
    updatedAt: "2026-02-05T09:15:00Z",
  },
  {
    id: "4",
    title: "Intelligenza Artificiale e Creazione di Contenuti",
    slug: "intelligenza-artificiale-creazione-contenuti",
    excerpt:
      "Come l'IA sta rivoluzionando il modo in cui creiamo e distribuiamo contenuti digitali.",
    content:
      "<p>L'intelligenza artificiale sta trasformando radicalmente il panorama della creazione di contenuti. Dalla generazione di testi alla personalizzazione, le possibilità sono infinite.</p><p>Esploriamo insieme come integrare l'IA nella tua strategia di contenuti senza perdere l'autenticità.</p>",
    published: false,
    category: "Tecnologia",
    author: "Anna Ferrari",
    createdAt: "2026-02-18T16:45:00Z",
    updatedAt: "2026-02-18T16:45:00Z",
  },
  {
    id: "5",
    title: "Social Media Marketing: Tendenze da Seguire",
    slug: "social-media-marketing-tendenze",
    excerpt:
      "Le tendenze più importanti nel social media marketing che ogni professionista dovrebbe conoscere.",
    content:
      "<p>Il mondo dei social media è in continua evoluzione. Restare aggiornati sulle ultime tendenze è essenziale per mantenere una presenza online efficace.</p><p>Dall'ascesa dei video brevi alla crescita del social commerce, scopri cosa aspettarti nel 2026.</p>",
    published: true,
    category: "Social Media",
    author: "Marco Rossi",
    createdAt: "2026-02-25T11:00:00Z",
    updatedAt: "2026-02-25T11:00:00Z",
  },
];

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const post = mockPosts.find((p) => p.id === params.id);

  if (!post) {
    return NextResponse.json(
      {
        success: false,
        error: "Articolo non trovato.",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    post,
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const post = mockPosts.find((p) => p.id === params.id);

  if (!post) {
    return NextResponse.json(
      {
        success: false,
        error: "Articolo non trovato.",
      },
      { status: 404 }
    );
  }

  try {
    const body = await request.json();

    const updatedPost = {
      ...post,
      ...body,
      id: post.id,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      post: updatedPost,
      message: "Articolo aggiornato con successo.",
    });
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

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const post = mockPosts.find((p) => p.id === params.id);

  if (!post) {
    return NextResponse.json(
      {
        success: false,
        error: "Articolo non trovato.",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    message: `Articolo "${post.title}" eliminato con successo.`,
  });
}
