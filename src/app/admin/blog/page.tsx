"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";

const mockPosts = [
  { id: "1", title: "Come l'AI Sta Rivoluzionando la Creazione di Contenuti nel 2025", category: "AI e Tecnologia", status: "published", date: "15 Gen 2025", views: 1234 },
  { id: "2", title: "Guida Completa alla Monetizzazione per Content Creator", category: "Monetizzazione", status: "published", date: "10 Gen 2025", views: 987 },
  { id: "3", title: "Cross-Platform Publishing: Come Pubblicare su 10 Social", category: "Social Media", status: "published", date: "5 Gen 2025", views: 756 },
  { id: "4", title: "Marketplace Digitale per Creator: Vendere Template", category: "Marketplace", status: "published", date: "28 Dic 2024", views: 543 },
  { id: "5", title: "SEO per Content Creator: Ottimizzazione AEO e GEO", category: "SEO", status: "draft", date: "20 Dic 2024", views: 0 },
  { id: "6", title: "Come Scegliere la Piattaforma Giusta per il Tuo Business", category: "Guide", status: "published", date: "15 Dic 2024", views: 321 },
  { id: "7", title: "Strategie Avanzate di Content Marketing per Creator", category: "Marketing", status: "draft", date: "10 Dic 2024", views: 0 },
  { id: "8", title: "Analytics per Creator: Metriche che Contano Davvero", category: "Analytics", status: "draft", date: "5 Dic 2024", views: 0 },
];

export default function AdminBlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = mockPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-heading font-bold text-navy">Gestione Blog</h1>
          <p className="text-grigio-text">{mockPosts.length} articoli totali</p>
        </div>
        <Link href="/admin/blog/nuovo" className="inline-flex items-center gap-2 px-4 py-2 bg-viola text-white rounded-button text-sm font-semibold hover:bg-viola-dark transition-colors">
          <Plus size={16} /> Nuovo Articolo
        </Link>
      </div>

      <div className="bg-white rounded-card shadow-soft p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-grigio-text" />
            <input
              type="text"
              placeholder="Cerca articoli..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-input border border-grigio-border focus:border-viola focus:ring-2 focus:ring-viola/20 outline-none"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 rounded-input border border-grigio-border focus:border-viola outline-none"
          >
            <option value="all">Tutti gli stati</option>
            <option value="published">Pubblicati</option>
            <option value="draft">Bozze</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-card shadow-soft overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-grigio-border">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-grigio-text uppercase">Titolo</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-grigio-text uppercase hidden md:table-cell">Categoria</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-grigio-text uppercase">Stato</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-grigio-text uppercase hidden sm:table-cell">Data</th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-grigio-text uppercase">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((post) => (
              <tr key={post.id} className="border-b border-grigio-border last:border-0 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-navy">{post.title}</p>
                  <p className="text-xs text-grigio-text md:hidden">{post.category}</p>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className="text-sm text-grigio-text">{post.category}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${post.status === "published" ? "bg-verde/10 text-verde" : "bg-gray-100 text-grigio-text"}`}>
                    {post.status === "published" ? "Pubblicato" : "Bozza"}
                  </span>
                </td>
                <td className="px-6 py-4 hidden sm:table-cell">
                  <span className="text-sm text-grigio-text">{post.date}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-grigio-text hover:text-viola transition-colors" title="Visualizza">
                      <Eye size={16} />
                    </button>
                    <button className="p-1.5 text-grigio-text hover:text-viola transition-colors" title="Modifica">
                      <Edit size={16} />
                    </button>
                    <button className="p-1.5 text-grigio-text hover:text-red-500 transition-colors" title="Elimina">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
