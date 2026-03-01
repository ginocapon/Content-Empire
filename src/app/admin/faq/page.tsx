"use client";

import { useState } from "react";
import {
  Plus,
  Edit3,
  Trash2,
  GripVertical,
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  order: number;
  published: boolean;
}

const faqData: FAQ[] = [
  {
    id: 1,
    question: "Cos'e' Content Empire e come funziona?",
    answer:
      "Content Empire e' una piattaforma completa per la gestione dei contenuti digitali. Offre strumenti per la creazione, ottimizzazione e distribuzione di contenuti su piu' canali. Grazie all'integrazione con strumenti SEO avanzati, aiutiamo le aziende a massimizzare la visibilita' online.",
    category: "Generale",
    order: 1,
    published: true,
  },
  {
    id: 2,
    question: "Quali piani tariffari sono disponibili?",
    answer:
      "Offriamo tre piani principali: Starter per piccole imprese, Professional per aziende in crescita e Enterprise per grandi organizzazioni. Ogni piano include funzionalita' diverse pensate per le esigenze specifiche di ogni tipo di business.",
    category: "Generale",
    order: 2,
    published: true,
  },
  {
    id: 3,
    question: "Come posso ottimizzare i miei contenuti per la SEO?",
    answer:
      "La nostra piattaforma include un modulo SEO integrato che analizza i tuoi contenuti in tempo reale, suggerendo miglioramenti per parole chiave, meta tag, struttura dei titoli e leggibilita'. Puoi anche monitorare il punteggio SEO di ogni pagina.",
    category: "SEO",
    order: 1,
    published: true,
  },
  {
    id: 4,
    question: "E' possibile integrare Content Empire con altri strumenti?",
    answer:
      "Si', Content Empire si integra con numerosi strumenti tra cui Google Analytics, Search Console, Mailchimp, HubSpot, WordPress e molti altri. Le integrazioni sono disponibili a partire dal piano Professional.",
    category: "Integrazioni",
    order: 1,
    published: true,
  },
  {
    id: 5,
    question: "Come funziona la gestione della newsletter?",
    answer:
      "Il modulo newsletter ti permette di creare, inviare e monitorare campagne email direttamente dalla piattaforma. Include template personalizzabili, segmentazione del pubblico, A/B testing e report dettagliati sulle performance.",
    category: "Newsletter",
    order: 1,
    published: true,
  },
  {
    id: 6,
    question: "Quali metriche SEO vengono monitorate?",
    answer:
      "Monitoriamo Core Web Vitals (LCP, CLS, FID), meta tag, struttura dei link, velocita' di caricamento, accessibilita', dati strutturati e molto altro. Il nostro sistema di punteggio ti da' una visione immediata dello stato SEO del tuo sito.",
    category: "SEO",
    order: 2,
    published: true,
  },
  {
    id: 7,
    question: "Posso esportare i dati degli iscritti alla newsletter?",
    answer:
      "Certamente. Puoi esportare l'elenco completo degli iscritti in formato CSV in qualsiasi momento. L'export include nome, email, data di iscrizione, stato e fonte di acquisizione.",
    category: "Newsletter",
    order: 2,
    published: false,
  },
  {
    id: 8,
    question: "Come posso contattare il supporto tecnico?",
    answer:
      "Il nostro team di supporto e' disponibile via email a supporto@contentempire.it, tramite chat live nella piattaforma o telefonicamente al numero verde. I clienti Enterprise hanno accesso a un account manager dedicato.",
    category: "Generale",
    order: 3,
    published: true,
  },
];

export default function FAQManagementPage() {
  const [faqs, setFaqs] = useState<FAQ[]>(faqData);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories = [...new Set(faqs.map((f) => f.category))];

  const togglePublished = (id: number) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === id ? { ...faq, published: !faq.published } : faq
      )
    );
  };

  const faqsByCategory = categories.map((cat) => ({
    category: cat,
    items: faqs
      .filter((f) => f.category === cat)
      .sort((a, b) => a.order - b.order),
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold text-navy">
            Gestione FAQ
          </h2>
          <p className="mt-1 text-sm text-grigio-text">
            Gestisci le domande frequenti organizzate per categoria
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-button bg-viola px-6 py-3 text-sm font-bold text-white transition-all hover:bg-viola-dark hover:shadow-hover">
          <Plus className="h-4 w-4" />
          Nuova FAQ
        </button>
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-card border border-grigio-border bg-white p-4 shadow-soft">
          <p className="text-sm text-grigio-text">Totale FAQ</p>
          <p className="mt-1 font-heading text-2xl font-bold text-navy">
            {faqs.length}
          </p>
        </div>
        <div className="rounded-card border border-grigio-border bg-white p-4 shadow-soft">
          <p className="text-sm text-grigio-text">Pubblicate</p>
          <p className="mt-1 font-heading text-2xl font-bold text-verde">
            {faqs.filter((f) => f.published).length}
          </p>
        </div>
        <div className="rounded-card border border-grigio-border bg-white p-4 shadow-soft">
          <p className="text-sm text-grigio-text">Categorie</p>
          <p className="mt-1 font-heading text-2xl font-bold text-viola">
            {categories.length}
          </p>
        </div>
      </div>

      {/* FAQ list by category */}
      <div className="space-y-6">
        {faqsByCategory.map((group) => (
          <div key={group.category}>
            <div className="mb-3 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-viola" />
              <h3 className="font-heading text-lg font-bold text-navy">
                {group.category}
              </h3>
              <span className="rounded-full bg-grigio-bg px-2.5 py-0.5 text-xs font-medium text-grigio-text">
                {group.items.length}
              </span>
            </div>

            <div className="space-y-2">
              {group.items.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-card border border-grigio-border bg-white shadow-soft transition-shadow hover:shadow-hover"
                >
                  <div className="flex items-start gap-3 p-4">
                    {/* Drag handle */}
                    <div className="mt-1 flex-shrink-0 cursor-grab text-grigio-border hover:text-grigio-text">
                      <GripVertical className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <button
                          onClick={() =>
                            setExpandedId(
                              expandedId === faq.id ? null : faq.id
                            )
                          }
                          className="flex items-center gap-2 text-left"
                        >
                          <p className="text-sm font-semibold text-navy">
                            {faq.question}
                          </p>
                          {expandedId === faq.id ? (
                            <ChevronUp className="h-4 w-4 flex-shrink-0 text-grigio-text" />
                          ) : (
                            <ChevronDown className="h-4 w-4 flex-shrink-0 text-grigio-text" />
                          )}
                        </button>
                      </div>

                      {/* Truncated or full answer */}
                      {expandedId === faq.id ? (
                        <p className="mt-2 text-sm text-grigio-text">
                          {faq.answer}
                        </p>
                      ) : (
                        <p className="mt-1 truncate text-xs text-grigio-text">
                          {faq.answer}
                        </p>
                      )}

                      {/* Meta info */}
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="text-xs text-grigio-text">
                          Ordine: {faq.order}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-shrink-0 items-center gap-2">
                      {/* Published toggle */}
                      <button
                        onClick={() => togglePublished(faq.id)}
                        className={`relative inline-flex h-6 w-10 flex-shrink-0 items-center rounded-full transition-colors duration-200 ${
                          faq.published ? "bg-verde" : "bg-gray-300"
                        }`}
                        title={faq.published ? "Pubblicata" : "Non pubblicata"}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                            faq.published ? "translate-x-5" : "translate-x-1"
                          }`}
                        />
                      </button>

                      <button
                        className="rounded-lg p-2 text-grigio-text transition-colors hover:bg-viola/10 hover:text-viola"
                        title="Modifica"
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button
                        className="rounded-lg p-2 text-grigio-text transition-colors hover:bg-red-50 hover:text-red-500"
                        title="Elimina"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
