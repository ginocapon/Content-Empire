import { FileText, Users, Eye, Search, Plus, HelpCircle, Download } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Articoli Pubblicati", value: "24", icon: FileText, trend: "+3 questo mese", color: "bg-viola/10 text-viola" },
  { label: "Iscritti Newsletter", value: "1.847", icon: Users, trend: "+126 questo mese", color: "bg-verde/10 text-verde" },
  { label: "Visite Mese", value: "12.543", icon: Eye, trend: "+18% vs mese precedente", color: "bg-arancione/10 text-arancione" },
  { label: "Punteggio SEO Medio", value: "92", icon: Search, trend: "+4 punti vs mese precedente", color: "bg-blue-100 text-blue-600" },
];

const recentPosts = [
  { title: "Come l'AI Sta Rivoluzionando la Creazione di Contenuti", status: "Pubblicato", date: "15 Gen 2025", views: 1234 },
  { title: "Guida Completa alla Monetizzazione per Creator", status: "Pubblicato", date: "10 Gen 2025", views: 987 },
  { title: "Cross-Platform Publishing: La Guida Definitiva", status: "Pubblicato", date: "5 Gen 2025", views: 756 },
  { title: "SEO per Content Creator nel 2025", status: "Bozza", date: "3 Gen 2025", views: 0 },
  { title: "Marketplace Digitale: Come Vendere Template", status: "Pubblicato", date: "28 Dic 2024", views: 543 },
];

const recentSubscribers = [
  { email: "marco.r@gmail.com", name: "Marco Rossi", date: "15 Gen 2025" },
  { email: "laura.b@yahoo.it", name: "Laura Bianchi", date: "14 Gen 2025" },
  { email: "giuseppe.v@outlook.com", name: "Giuseppe Verdi", date: "13 Gen 2025" },
  { email: "anna.c@gmail.com", name: "Anna Conti", date: "12 Gen 2025" },
  { email: "paolo.m@libero.it", name: "Paolo Moretti", date: "11 Gen 2025" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-heading font-bold text-navy">Dashboard</h1>
          <p className="text-grigio-text">Panoramica della piattaforma</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-card shadow-soft p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-card flex items-center justify-center ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
            <p className="text-3xl font-heading font-bold text-navy mb-1">{stat.value}</p>
            <p className="text-sm text-grigio-text">{stat.label}</p>
            <p className="text-xs text-verde mt-2">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-card shadow-soft p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-heading font-bold text-navy">Articoli Recenti</h2>
            <Link href="/admin/blog" className="text-sm text-viola hover:underline">Vedi tutti</Link>
          </div>
          <div className="space-y-3">
            {recentPosts.map((post) => (
              <div key={post.title} className="flex items-center justify-between py-2 border-b border-grigio-border last:border-0">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-navy truncate">{post.title}</p>
                  <p className="text-xs text-grigio-text">{post.date}</p>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <span className={`px-2 py-0.5 text-xs rounded-full ${post.status === "Pubblicato" ? "bg-verde/10 text-verde" : "bg-gray-100 text-grigio-text"}`}>
                    {post.status}
                  </span>
                  <span className="text-xs text-grigio-text">{post.views} visite</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-card shadow-soft p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-heading font-bold text-navy">Ultimi Iscritti Newsletter</h2>
            <Link href="/admin/newsletter" className="text-sm text-viola hover:underline">Vedi tutti</Link>
          </div>
          <div className="space-y-3">
            {recentSubscribers.map((sub) => (
              <div key={sub.email} className="flex items-center justify-between py-2 border-b border-grigio-border last:border-0">
                <div>
                  <p className="text-sm font-medium text-navy">{sub.name}</p>
                  <p className="text-xs text-grigio-text">{sub.email}</p>
                </div>
                <span className="text-xs text-grigio-text">{sub.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-card shadow-soft p-6">
        <h2 className="text-lg font-heading font-bold text-navy mb-4">Azioni Rapide</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/blog/nuovo" className="inline-flex items-center gap-2 px-4 py-2 bg-viola text-white rounded-button text-sm font-semibold hover:bg-viola-dark transition-colors">
            <Plus size={16} /> Nuovo Articolo
          </Link>
          <Link href="/admin/faq" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-grigio-border text-navy rounded-button text-sm font-semibold hover:bg-gray-50 transition-colors">
            <HelpCircle size={16} /> Gestisci FAQ
          </Link>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-grigio-border text-navy rounded-button text-sm font-semibold hover:bg-gray-50 transition-colors">
            <Download size={16} /> Esporta Report
          </button>
        </div>
      </div>
    </div>
  );
}
