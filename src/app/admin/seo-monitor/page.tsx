"use client";

import { useState } from "react";
import {
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Info,
  Tag,
  Zap,
  Accessibility,
  Code2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface PageAudit {
  url: string;
  title: string;
  score: number;
  lcp: string;
  cls: string;
  issues: number;
  issueCategories: string[];
}

const pageAudits: PageAudit[] = [
  {
    url: "/",
    title: "Homepage",
    score: 96,
    lcp: "1.2s",
    cls: "0.02",
    issues: 1,
    issueCategories: ["Meta Tag"],
  },
  {
    url: "/blog",
    title: "Blog",
    score: 94,
    lcp: "1.5s",
    cls: "0.05",
    issues: 2,
    issueCategories: ["Performance", "Dati Strutturati"],
  },
  {
    url: "/faq",
    title: "FAQ",
    score: 98,
    lcp: "0.9s",
    cls: "0.01",
    issues: 0,
    issueCategories: [],
  },
  {
    url: "/prezzi",
    title: "Prezzi",
    score: 88,
    lcp: "2.1s",
    cls: "0.08",
    issues: 4,
    issueCategories: ["Performance", "Accessibilita'", "Meta Tag", "Dati Strutturati"],
  },
  {
    url: "/chi-siamo",
    title: "Chi Siamo",
    score: 91,
    lcp: "1.8s",
    cls: "0.03",
    issues: 2,
    issueCategories: ["Meta Tag", "Accessibilita'"],
  },
  {
    url: "/contatti",
    title: "Contatti",
    score: 85,
    lcp: "2.4s",
    cls: "0.1",
    issues: 5,
    issueCategories: ["Performance", "Accessibilita'", "Meta Tag", "Dati Strutturati"],
  },
];

const overallScore = 92;

const issueCategories = [
  {
    name: "Meta Tag",
    icon: Tag,
    count: 4,
    color: "text-arancione",
    bg: "bg-arancione/10",
    description: "Titoli e descrizioni mancanti o non ottimizzati",
  },
  {
    name: "Performance",
    icon: Zap,
    count: 3,
    color: "text-red-500",
    bg: "bg-red-50",
    description: "Tempi di caricamento e Core Web Vitals da migliorare",
  },
  {
    name: "Accessibilita'",
    icon: Accessibility,
    count: 3,
    color: "text-viola",
    bg: "bg-viola/10",
    description: "Problemi di accessibilita' per utenti con disabilita'",
  },
  {
    name: "Dati Strutturati",
    icon: Code2,
    count: 3,
    color: "text-navy",
    bg: "bg-navy/10",
    description: "Schema markup mancante o incompleto",
  },
];

const recommendations = [
  {
    title: "Ottimizza le immagini della pagina Contatti",
    description:
      "Le immagini sulla pagina contatti non sono ottimizzate. Usa formati WebP e implementa il lazy loading per migliorare il LCP.",
    priority: "Alta",
    page: "/contatti",
  },
  {
    title: "Aggiungi meta description alla pagina Prezzi",
    description:
      "La pagina dei prezzi manca di una meta description personalizzata. Questo influisce negativamente sul CTR nei risultati di ricerca.",
    priority: "Media",
    page: "/prezzi",
  },
  {
    title: "Implementa Schema FAQ nella pagina FAQ",
    description:
      "Aggiungi i dati strutturati FAQPage per ottenere i rich snippet nei risultati di ricerca di Google.",
    priority: "Media",
    page: "/faq",
  },
  {
    title: "Migliora il contrasto dei colori nella sezione prezzi",
    description:
      "Alcuni elementi di testo nella pagina prezzi non rispettano il rapporto di contrasto WCAG AA minimo di 4.5:1.",
    priority: "Bassa",
    page: "/prezzi",
  },
];

function getScoreColor(score: number): string {
  if (score >= 90) return "text-verde";
  if (score >= 70) return "text-arancione";
  return "text-red-500";
}

function getScoreRingColor(score: number): string {
  if (score >= 90) return "stroke-verde";
  if (score >= 70) return "stroke-arancione";
  return "stroke-red-500";
}

function getScoreBgColor(score: number): string {
  if (score >= 90) return "bg-verde/10";
  if (score >= 70) return "bg-arancione/10";
  return "bg-red-50";
}

function getPriorityColor(priority: string): string {
  switch (priority) {
    case "Alta":
      return "bg-red-50 text-red-600";
    case "Media":
      return "bg-arancione/10 text-arancione";
    case "Bassa":
      return "bg-grigio-bg text-grigio-text";
    default:
      return "bg-grigio-bg text-grigio-text";
  }
}

export default function SEOMonitorPage() {
  const [isAuditing, setIsAuditing] = useState(false);

  const handleAudit = async () => {
    setIsAuditing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAuditing(false);
    alert("Audit completato! Tutti i dati sono stati aggiornati.");
  };

  const circumference = 2 * Math.PI * 56;
  const strokeDashoffset = circumference - (overallScore / 100) * circumference;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold text-navy">
            SEO Monitor
          </h2>
          <p className="mt-1 text-sm text-grigio-text">
            Monitora le performance SEO del tuo sito
          </p>
        </div>
        <button
          onClick={handleAudit}
          disabled={isAuditing}
          className="inline-flex items-center gap-2 rounded-button bg-viola px-6 py-3 text-sm font-bold text-white transition-all hover:bg-viola-dark hover:shadow-hover disabled:opacity-50"
        >
          <RefreshCw
            className={`h-4 w-4 ${isAuditing ? "animate-spin" : ""}`}
          />
          {isAuditing ? "Audit in corso..." : "Esegui Audit"}
        </button>
      </div>

      {/* Overall score + Issue categories */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Overall score card */}
        <div className="flex flex-col items-center rounded-card border border-grigio-border bg-white p-8 shadow-soft">
          <h3 className="mb-6 font-heading text-lg font-bold text-navy">
            Punteggio Globale
          </h3>
          <div className="relative">
            <svg className="h-36 w-36 -rotate-90 transform" viewBox="0 0 128 128">
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="8"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                className={getScoreRingColor(overallScore)}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: "stroke-dashoffset 1s ease" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className={`font-heading text-4xl font-bold ${getScoreColor(
                  overallScore
                )}`}
              >
                {overallScore}
              </span>
              <span className="text-xs text-grigio-text">su 100</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-verde" />
            <span className="text-sm font-medium text-verde">
              +3 punti rispetto al mese scorso
            </span>
          </div>
        </div>

        {/* Issue categories */}
        <div className="rounded-card border border-grigio-border bg-white p-6 shadow-soft lg:col-span-2">
          <h3 className="mb-4 font-heading text-lg font-bold text-navy">
            Categorie Problemi
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {issueCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className="flex items-start gap-3 rounded-lg border border-grigio-border p-4 transition-colors hover:border-viola/30"
                >
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${cat.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${cat.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-navy">
                        {cat.name}
                      </p>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-bold ${cat.bg} ${cat.color}`}
                      >
                        {cat.count}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-grigio-text">
                      {cat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Page-by-page audit table */}
      <div className="overflow-hidden rounded-card border border-grigio-border bg-white shadow-soft">
        <div className="border-b border-grigio-border px-6 py-4">
          <h3 className="font-heading text-lg font-bold text-navy">
            Audit per Pagina
          </h3>
          <p className="mt-0.5 text-xs text-grigio-text">
            Analisi dettagliata delle performance SEO per ogni pagina
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-grigio-border bg-grigio-bg/50">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-grigio-text">
                  Pagina
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-grigio-text">
                  Punteggio
                </th>
                <th className="hidden px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-grigio-text md:table-cell">
                  LCP
                </th>
                <th className="hidden px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-grigio-text md:table-cell">
                  CLS
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-grigio-text">
                  Problemi
                </th>
                <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-grigio-text lg:table-cell">
                  Categorie
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-grigio-border">
              {pageAudits.map((page) => (
                <tr
                  key={page.url}
                  className="transition-colors hover:bg-grigio-bg/30"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-navy">
                        {page.title}
                      </p>
                      <p className="text-xs text-grigio-text">{page.url}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${getScoreBgColor(
                        page.score
                      )} ${getScoreColor(page.score)}`}
                    >
                      {page.score}
                    </span>
                  </td>
                  <td className="hidden px-6 py-4 text-center md:table-cell">
                    <span
                      className={`text-sm font-medium ${
                        parseFloat(page.lcp) <= 1.5
                          ? "text-verde"
                          : parseFloat(page.lcp) <= 2.5
                          ? "text-arancione"
                          : "text-red-500"
                      }`}
                    >
                      {page.lcp}
                    </span>
                  </td>
                  <td className="hidden px-6 py-4 text-center md:table-cell">
                    <span
                      className={`text-sm font-medium ${
                        parseFloat(page.cls) <= 0.05
                          ? "text-verde"
                          : parseFloat(page.cls) <= 0.1
                          ? "text-arancione"
                          : "text-red-500"
                      }`}
                    >
                      {page.cls}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {page.issues === 0 ? (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-verde">
                        <CheckCircle2 className="h-4 w-4" />
                        0
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-arancione">
                        <AlertTriangle className="h-4 w-4" />
                        {page.issues}
                      </span>
                    )}
                  </td>
                  <td className="hidden px-6 py-4 lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {page.issueCategories.length > 0 ? (
                        page.issueCategories.map((cat) => (
                          <span
                            key={cat}
                            className="rounded-full bg-grigio-bg px-2 py-0.5 text-xs text-grigio-text"
                          >
                            {cat}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-verde">
                          Tutto OK
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendations */}
      <div className="rounded-card border border-grigio-border bg-white p-6 shadow-soft">
        <div className="mb-4 flex items-center gap-2">
          <Info className="h-5 w-5 text-viola" />
          <h3 className="font-heading text-lg font-bold text-navy">
            Consigli e Raccomandazioni
          </h3>
        </div>
        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg border border-grigio-border p-4 transition-colors hover:border-viola/30"
            >
              <div className="mt-0.5 flex-shrink-0">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${getPriorityColor(
                    rec.priority
                  )}`}
                >
                  {rec.priority}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-navy">{rec.title}</p>
                <p className="mt-1 text-xs text-grigio-text">
                  {rec.description}
                </p>
                <p className="mt-2 text-xs font-medium text-viola">
                  Pagina: {rec.page}
                </p>
              </div>
              <button className="flex-shrink-0 rounded-lg p-2 text-grigio-text transition-colors hover:bg-viola/10 hover:text-viola">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
