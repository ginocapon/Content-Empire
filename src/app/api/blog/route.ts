import { NextRequest, NextResponse } from "next/server";

const mockPosts = [
  {
    id: "1",
    title: "Come Ottimizzare il Tuo Sito per i Motori di Ricerca",
    slug: "come-ottimizzare-sito-motori-ricerca",
    excerpt:
      "Scopri le migliori strategie SEO per migliorare il posizionamento del tuo sito web nei risultati di ricerca.",
    published: true,
    category: "SEO",
    createdAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Guida Completa al Content Marketing nel 2026",
    slug: "guida-completa-content-marketing-2026",
    excerpt:
      "Tutto quello che devi sapere per creare una strategia di content marketing efficace quest'anno.",
    published: true,
    category: "Content Marketing",
    createdAt: "2026-01-28T14:30:00Z",
  },
  {
    id: "3",
    title: "Newsletter Efficaci: Strategie per Aumentare il Tasso di Apertura",
    slug: "newsletter-efficaci-strategie-tasso-apertura",
    excerpt:
      "Impara a scrivere newsletter che i tuoi iscritti vorranno davvero leggere e condividere.",
    published: true,
    category: "Email Marketing",
    createdAt: "2026-02-05T09:15:00Z",
  },
  {
    id: "4",
    title: "Intelligenza Artificiale e Creazione di Contenuti",
    slug: "intelligenza-artificiale-creazione-contenuti",
    excerpt:
      "Come l'IA sta rivoluzionando il modo in cui creiamo e distribuiamo contenuti digitali.",
    published: false,
    category: "Tecnologia",
    createdAt: "2026-02-18T16:45:00Z",
  },
  {
    id: "5",
    title: "Social Media Marketing: Tendenze da Seguire",
    slug: "social-media-marketing-tendenze",
    excerpt:
      "Le tendenze pi\u00f9 importanti nel social media marketing che ogni professionista dovrebbe conoscere.",
    published: true,
    category: "Social Media",
    createdAt: "2026-02-25T11:00:00Z",
  },
];

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export async function GET() {
  return NextResponse.json({
    success: true,
    posts: mockPosts,
    total: mockPosts.length,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || typeof body.title !== "string" || body.title.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          error: "Il titolo è obbligatorio.",
        },
        { status: 400 }
      );
    }

    const slug = body.slug || generateSlug(body.title);

    const newPost = {
      id: String(mockPosts.length + 1),
      title: body.title.trim(),
      slug,
      excerpt: body.excerpt || "",
      published: body.published ?? false,
      category: body.category || "Senza categoria",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        post: newPost,
        message: "Articolo creato con successo.",
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
