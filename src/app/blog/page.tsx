import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllPosts, getCategories, getTags } from "@/lib/blog/mock-data";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createMetadata({
  title: "Blog - Guide e Strategie per Content Creator",
  description:
    "Guide, strategie e novità per content creator. Scopri come utilizzare l'AI per generare, pubblicare e monetizzare i tuoi contenuti.",
  path: "/blog",
});

// ---------------------------------------------------------------------------
// Gradient palette for cover image placeholders
// ---------------------------------------------------------------------------

const cardGradients = [
  "from-viola to-arancione",
  "from-arancione to-verde",
  "from-verde to-viola-light",
  "from-viola-dark to-arancione-light",
  "from-verde-dark to-viola",
  "from-arancione-dark to-verde-light",
];

// ---------------------------------------------------------------------------
// Category badge color mapping
// ---------------------------------------------------------------------------

function categoryColor(category: string): string {
  const map: Record<string, string> = {
    "AI e Tecnologia": "bg-viola/10 text-viola",
    "Intelligenza Artificiale": "bg-viola/10 text-viola",
    Monetizzazione: "bg-arancione/10 text-arancione-dark",
    "Social Media": "bg-verde/10 text-verde-dark",
    "Strategia Contenuti": "bg-blue-50 text-blue-700",
    Marketplace: "bg-amber-50 text-amber-700",
    SEO: "bg-emerald-50 text-emerald-700",
    Guide: "bg-indigo-50 text-indigo-700",
  };
  return map[category] ?? "bg-gray-100 text-gray-700";
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();
  const tags = getTags();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />

      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-viola/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-arancione/15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Guide, strategie e novità per content creator
          </p>
        </div>
      </section>

      {/* ── Content Section ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-grigio-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* ── Main: Post Grid ─────────────────────────────────────── */}
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <article
                    key={post.id}
                    className="group flex flex-col bg-white rounded-card shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden"
                  >
                    {/* Cover image placeholder (gradient) */}
                    <div
                      className={`relative h-48 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} flex items-center justify-center`}
                    >
                      <span className="text-white/20 font-heading text-6xl font-bold select-none">
                        CE
                      </span>
                      {/* Category badge */}
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${categoryColor(post.category)}`}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-heading text-lg font-bold text-navy leading-snug mb-2 group-hover:text-viola transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-grigio-text text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta row */}
                      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-grigio-text mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString(
                            "it-IT",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            },
                          )}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <User className="h-3.5 w-3.5" />
                          {post.author}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Read more link */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-viola hover:text-viola-dark transition-colors"
                      >
                        Leggi di più
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* ── Sidebar ─────────────────────────────────────────────── */}
            <aside className="w-full lg:w-72 xl:w-80 shrink-0 space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-card shadow-soft p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">
                  Categorie
                </h3>
                <ul className="space-y-2.5">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <span className="flex items-center gap-2 text-sm text-grigio-text hover:text-viola transition-colors cursor-pointer">
                        <Tag className="h-3.5 w-3.5 text-viola/50" />
                        {cat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-card shadow-soft p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">
                  Tag Popolari
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1.5 text-xs font-medium rounded-full bg-grigio-bg text-grigio-text hover:bg-viola/10 hover:text-viola cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-gradient-to-br from-viola to-viola-dark rounded-card p-6 text-white">
                <h3 className="font-heading text-lg font-bold mb-2">
                  Resta Aggiornato
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Iscriviti alla newsletter per ricevere guide esclusive e
                  strategie per content creator.
                </p>
                <div className="space-y-2.5">
                  <input
                    type="email"
                    placeholder="La tua email"
                    className="w-full px-4 py-2.5 rounded-input bg-white/20 text-white placeholder-white/50 border border-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <button
                    type="button"
                    className="w-full px-4 py-2.5 rounded-button bg-white text-viola font-bold text-sm hover:bg-white/90 transition-colors"
                  >
                    Iscriviti
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
