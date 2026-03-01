"use client";

import { useState } from "react";
import {
  Users,
  UserCheck,
  UserMinus,
  Download,
  Search,
  Mail,
  Clock,
} from "lucide-react";

interface Subscriber {
  id: number;
  email: string;
  name: string;
  dateSubscribed: string;
  status: "Attivo" | "Disiscritto";
  source: string;
}

const subscribers: Subscriber[] = [
  {
    id: 1,
    email: "marco.rossi@email.it",
    name: "Marco Rossi",
    dateSubscribed: "1 Mar 2026",
    status: "Attivo",
    source: "Blog",
  },
  {
    id: 2,
    email: "giulia.bianchi@email.it",
    name: "Giulia Bianchi",
    dateSubscribed: "28 Feb 2026",
    status: "Attivo",
    source: "Homepage",
  },
  {
    id: 3,
    email: "luca.ferrari@email.it",
    name: "Luca Ferrari",
    dateSubscribed: "27 Feb 2026",
    status: "Attivo",
    source: "Landing Page",
  },
  {
    id: 4,
    email: "anna.greco@email.it",
    name: "Anna Greco",
    dateSubscribed: "26 Feb 2026",
    status: "Disiscritto",
    source: "Blog",
  },
  {
    id: 5,
    email: "paolo.moretti@email.it",
    name: "Paolo Moretti",
    dateSubscribed: "25 Feb 2026",
    status: "Attivo",
    source: "Referral",
  },
  {
    id: 6,
    email: "chiara.colombo@email.it",
    name: "Chiara Colombo",
    dateSubscribed: "23 Feb 2026",
    status: "Attivo",
    source: "Social Media",
  },
  {
    id: 7,
    email: "davide.ricci@email.it",
    name: "Davide Ricci",
    dateSubscribed: "20 Feb 2026",
    status: "Attivo",
    source: "Homepage",
  },
  {
    id: 8,
    email: "francesca.marino@email.it",
    name: "Francesca Marino",
    dateSubscribed: "18 Feb 2026",
    status: "Disiscritto",
    source: "Landing Page",
  },
  {
    id: 9,
    email: "giorgio.conti@email.it",
    name: "Giorgio Conti",
    dateSubscribed: "15 Feb 2026",
    status: "Attivo",
    source: "Blog",
  },
  {
    id: 10,
    email: "valentina.romano@email.it",
    name: "Valentina Romano",
    dateSubscribed: "12 Feb 2026",
    status: "Attivo",
    source: "Referral",
  },
  {
    id: 11,
    email: "alessandro.gallo@email.it",
    name: "Alessandro Gallo",
    dateSubscribed: "10 Feb 2026",
    status: "Attivo",
    source: "Homepage",
  },
  {
    id: 12,
    email: "sara.esposito@email.it",
    name: "Sara Esposito",
    dateSubscribed: "8 Feb 2026",
    status: "Disiscritto",
    source: "Social Media",
  },
];

const totalIscritti = 1847;
const attivi = 1792;
const disiscritti = 12;

export default function NewsletterManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubscribers = subscribers.filter(
    (sub) =>
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExportCSV = () => {
    alert("Export CSV avviato. Il file verra' scaricato a breve.");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold text-navy">
            Gestione Newsletter
          </h2>
          <p className="mt-1 text-sm text-grigio-text">
            Monitora e gestisci gli iscritti alla newsletter
          </p>
        </div>
        <button
          onClick={handleExportCSV}
          className="inline-flex items-center gap-2 rounded-button bg-viola px-6 py-3 text-sm font-bold text-white transition-all hover:bg-viola-dark hover:shadow-hover"
        >
          <Download className="h-4 w-4" />
          Esporta CSV
        </button>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-card border border-grigio-border bg-white p-6 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-viola/20">
              <Users className="h-6 w-6 text-viola" />
            </div>
            <div>
              <p className="text-sm text-grigio-text">Totale Iscritti</p>
              <p className="font-heading text-2xl font-bold text-navy">
                {totalIscritti.toLocaleString("it-IT")}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-grigio-border bg-white p-6 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-verde/20">
              <UserCheck className="h-6 w-6 text-verde" />
            </div>
            <div>
              <p className="text-sm text-grigio-text">Attivi</p>
              <p className="font-heading text-2xl font-bold text-verde">
                {attivi.toLocaleString("it-IT")}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-grigio-border bg-white p-6 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-arancione/20">
              <UserMinus className="h-6 w-6 text-arancione" />
            </div>
            <div>
              <p className="text-sm text-grigio-text">Disiscritti (questo mese)</p>
              <p className="font-heading text-2xl font-bold text-arancione">
                {disiscritti}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="rounded-card border border-grigio-border bg-white p-4 shadow-soft">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-grigio-text" />
          <input
            type="text"
            placeholder="Cerca per nome o email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-input border border-grigio-border bg-grigio-bg py-2.5 pl-10 pr-4 text-sm text-navy placeholder-grigio-text transition-colors focus:border-viola focus:outline-none focus:ring-2 focus:ring-viola/20"
          />
        </div>
      </div>

      {/* Subscribers table */}
      <div className="overflow-hidden rounded-card border border-grigio-border bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-grigio-border bg-grigio-bg/50">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-grigio-text">
                  Iscritto
                </th>
                <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-grigio-text md:table-cell">
                  Data Iscrizione
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-grigio-text">
                  Stato
                </th>
                <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-grigio-text sm:table-cell">
                  Fonte
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-grigio-border">
              {filteredSubscribers.map((sub) => (
                <tr
                  key={sub.id}
                  className="transition-colors hover:bg-grigio-bg/30"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-viola/10">
                        <span className="text-sm font-semibold text-viola">
                          {sub.name.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-navy">
                          {sub.name}
                        </p>
                        <p className="truncate text-xs text-grigio-text">
                          {sub.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden px-6 py-4 md:table-cell">
                    <div className="flex items-center gap-1 text-sm text-grigio-text">
                      <Clock className="h-3.5 w-3.5" />
                      {sub.dateSubscribed}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        sub.status === "Attivo"
                          ? "bg-verde/10 text-verde"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </td>
                  <td className="hidden px-6 py-4 sm:table-cell">
                    <span className="rounded-full bg-grigio-bg px-3 py-1 text-xs font-medium text-grigio-text">
                      {sub.source}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredSubscribers.length === 0 && (
          <div className="px-6 py-12 text-center">
            <Mail className="mx-auto h-12 w-12 text-grigio-border" />
            <p className="mt-4 text-sm font-medium text-navy">
              Nessun iscritto trovato
            </p>
            <p className="mt-1 text-xs text-grigio-text">
              Prova a modificare la ricerca
            </p>
          </div>
        )}
      </div>

      {/* Subscriber count */}
      <div className="text-sm text-grigio-text">
        Mostrando {filteredSubscribers.length} di {subscribers.length} iscritti
        recenti
      </div>
    </div>
  );
}
