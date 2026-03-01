export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: string;
  published: boolean;
}

const posts: BlogPost[] = [
  {
    id: "1",
    title: "Come l'AI Sta Rivoluzionando la Creazione di Contenuti nel 2025",
    slug: "ai-rivoluzione-creazione-contenuti-2025",
    excerpt:
      "L'intelligenza artificiale generativa sta trasformando radicalmente il modo in cui i content creator producono e distribuiscono contenuti. Scopri le tendenze principali.",
    content: `L'intelligenza artificiale generativa rappresenta la più grande rivoluzione nella creazione di contenuti dalla nascita dei social media. Nel 2025, il 91% dei content creator utilizza almeno uno strumento AI nel proprio workflow quotidiano.\n\nI modelli di linguaggio come LLaMA e Mistral permettono di generare testi di alta qualità in pochi secondi, mentre strumenti di generazione immagini come Stable Diffusion creano grafiche professionali senza competenze di design.\n\nContent Empire integra tutte queste tecnologie in un'unica piattaforma, eliminando la necessità di sottoscrivere 5-10 abbonamenti separati. Con un solo input — una foto, un testo breve o un messaggio vocale — l'AI genera automaticamente contenuti ottimizzati per ogni piattaforma social.`,
    category: "AI e Tecnologia",
    tags: ["AI", "Content Creation", "Tendenze"],
    author: "Marco Rossi",
    publishedAt: "2025-01-15",
    readTime: "5 min",
    published: true,
  },
  {
    id: "2",
    title: "Guida Completa alla Monetizzazione per Content Creator",
    slug: "guida-monetizzazione-content-creator",
    excerpt:
      "Dalla vendita di template al sistema di affiliazione: tutte le strategie per trasformare i tuoi contenuti in una fonte di reddito stabile.",
    content: `Monetizzare i propri contenuti è l'obiettivo di ogni creator, ma solo il 4% riesce a superare i 100.000€ di fatturato annuo. La chiave è diversificare le fonti di reddito e utilizzare gli strumenti giusti.\n\nLe principali strategie di monetizzazione includono: vendita di template e contenuti premium attraverso marketplace dedicati, sistemi di affiliazione con commissioni sull'8-10%, e-commerce integrato per prodotti digitali e fisici, e abbonamenti premium per contenuti esclusivi.\n\nContent Empire offre tutte queste opzioni in un'unica piattaforma. Il marketplace integrato permette di vendere template ad altri creator con una commissione del solo 10%, mentre il sistema di affiliazione nativo genera entrate passive su ogni vendita referral.`,
    category: "Monetizzazione",
    tags: ["Monetizzazione", "Business", "Creator Economy"],
    author: "Laura Bianchi",
    publishedAt: "2025-01-10",
    readTime: "7 min",
    published: true,
  },
  {
    id: "3",
    title: "Cross-Platform Publishing: Come Pubblicare su 10 Social con 1 Click",
    slug: "cross-platform-publishing-guida",
    excerpt:
      "Gestire più canali social è un incubo? Scopri come il publishing cross-platform automatico può farti risparmiare ore ogni settimana.",
    content: `Il content creator medio gestisce 4-6 piattaforme social diverse, dedicando fino a 15 ore settimanali solo alla pubblicazione e adattamento dei contenuti per ciascun canale.\n\nIl cross-platform publishing automatico risolve questo problema: un singolo contenuto viene automaticamente riadattato per formato, tono e specifiche tecniche di ogni piattaforma — Instagram (quadrato + caption), TikTok (verticale + trend audio), YouTube (thumbnail + SEO), LinkedIn (tono professionale), e molti altri.\n\nL'AI Adapter Engine di Content Empire analizza le best practice di ogni piattaforma e adatta automaticamente il contenuto, calcola l'orario di pubblicazione ottimale e pubblica simultaneamente su tutti i canali collegati.`,
    category: "Social Media",
    tags: ["Social Media", "Publishing", "Automazione"],
    author: "Marco Rossi",
    publishedAt: "2025-01-05",
    readTime: "6 min",
    published: true,
  },
  {
    id: "4",
    title: "Marketplace Digitale per Creator: Vendere Template e Contenuti Premium",
    slug: "marketplace-digitale-creator-template",
    excerpt:
      "Il marketplace tra creator è il nuovo modello di business. Scopri come vendere i tuoi template e guadagnare anche quando non lavori.",
    content: `Il marketplace digitale tra creator rappresenta una delle opportunità di crescita più significative nella creator economy. Vendere template, preset, format e contenuti premium ad altri creator genera entrate passive e crea un effetto network positivo.\n\nI creator di maggior successo sui marketplace generano tra 500 e 5.000€ al mese vendendo template riutilizzabili. La chiave è creare contenuti che risolvano problemi specifici: template per caroselli Instagram, format per newsletter, strutture per articoli SEO.\n\nContent Empire include un marketplace nativo dove ogni creator può pubblicare e vendere i propri template. La piattaforma gestisce pagamenti, preview, rating e distribuzione, trattenendo solo il 10% di commissione — molto meno del 30% di piattaforme come Gumroad o Creative Market.`,
    category: "Marketplace",
    tags: ["Marketplace", "Template", "Passive Income"],
    author: "Giulia Verdi",
    publishedAt: "2024-12-28",
    readTime: "5 min",
    published: true,
  },
  {
    id: "5",
    title: "SEO per Content Creator: Ottimizzazione AEO e GEO nel 2025",
    slug: "seo-content-creator-aeo-geo-2025",
    excerpt:
      "Le regole del SEO stanno cambiando con l'AI Overview di Google. Ecco come ottimizzare i tuoi contenuti per essere citati sia dai motori di ricerca che dall'AI.",
    content: `Il SEO tradizionale non basta più. Con l'introduzione di AI Overview di Google, i content creator devono ottimizzare i contenuti non solo per i motori di ricerca classici (SEO), ma anche per le risposte generate dall'intelligenza artificiale (AEO - Answer Engine Optimization) e per la ricerca geolocalizzata (GEO).\n\nLe prime 40-60 parole di ogni sezione devono fornire una risposta diretta e completa alla query dell'utente. Le frasi devono essere dichiarative e definitive, supportate da dati numerici verificabili. Lo structured data (Schema.org) è fondamentale per comunicare il contesto semantico dei contenuti.\n\nContent Empire genera automaticamente contenuti ottimizzati per SEO/AEO/GEO, inserendo Schema JSON-LD, meta tag ottimizzati, struttura heading corretta e risposte featured snippet-ready in ogni articolo prodotto dall'AI.`,
    category: "SEO",
    tags: ["SEO", "AEO", "GEO", "Google"],
    author: "Laura Bianchi",
    publishedAt: "2024-12-20",
    readTime: "8 min",
    published: true,
  },
  {
    id: "6",
    title: "Come Scegliere la Piattaforma Giusta per il Tuo Business di Creator",
    slug: "scegliere-piattaforma-business-creator",
    excerpt:
      "Confronto tra le principali piattaforme per creator: pro, contro e quale scegliere in base al tuo modello di business.",
    content: `La scelta della piattaforma giusta può determinare il successo o il fallimento di un business da content creator. Con oltre 50 tool disponibili sul mercato, orientarsi è sempre più complesso.\n\nI creator tipicamente spendono tra 200 e 500 dollari al mese su 5-10 piattaforme diverse: strumenti di scrittura AI (ChatGPT, Jasper), grafica (Canva, Midjourney), scheduling (Buffer, Later), analytics (Metricool), email marketing (Mailchimp) e hosting (WordPress).\n\nLa soluzione ideale è una piattaforma all-in-one che integri tutte queste funzionalità. Content Empire è stata progettata esattamente per questo: un'unica dashboard con AI generativa interna, publishing cross-platform, marketplace, e-commerce e analytics unificata, a partire da soli 9,90€ al mese.`,
    category: "Guide",
    tags: ["Piattaforme", "Confronto", "Business"],
    author: "Marco Rossi",
    publishedAt: "2024-12-15",
    readTime: "6 min",
    published: true,
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.filter((p) => p.published).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  return Array.from(new Set(posts.map((p) => p.category)));
}

export function getTags(): string[] {
  return Array.from(new Set(posts.flatMap((p) => p.tags)));
}
