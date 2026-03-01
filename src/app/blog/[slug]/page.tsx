import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getPostBySlug, getAllPosts } from "@/lib/blog/mock-data";
import { Calendar, Clock, ArrowLeft, User, Tag, ChevronRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Props {
  params: Promise<{ slug: string }>;
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Articolo non trovato",
      description: "L'articolo cercato non esiste o è stato rimosso.",
      path: "/blog",
    });
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

// ---------------------------------------------------------------------------
// Static Params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// ---------------------------------------------------------------------------
// Helper: format a date string in Italian
// ---------------------------------------------------------------------------

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* ── Structured Data ───────────────────────────────────────────── */}
      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        datePublished={post.publishedAt}
        dateModified={post.publishedAt}
        authorName={post.author}
        image="/og-image.jpg"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      {/* ── Hero / Cover Area ─────────────────────────────────────────── */}
      <section className="relative bg-navy pt-28 pb-0 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-white/50 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80 truncate max-w-xs">
              {post.title}
            </span>
          </nav>

          {/* Back link (mobile-friendly) */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-viola-light hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna al Blog
          </Link>

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mb-6">
            {post.title}
          </h1>

          {/* Author / Date / Read Time */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60 pb-10">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime} di lettura
            </span>
          </div>
        </div>

        {/* Cover image area (gradient placeholder) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-56 md:h-72 lg:h-80 rounded-t-card bg-gradient-to-br from-viola/30 to-arancione/30 flex items-center justify-center">
            <span className="text-white/10 font-heading text-8xl font-bold select-none">
              CE
            </span>
          </div>
        </div>
      </section>

      {/* ── Article Body ──────────────────────────────────────────────── */}
      <section className="bg-grigio-bg pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* ── Main Article ────────────────────────────────────────── */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-b-card lg:rounded-card shadow-soft -mt-px lg:-mt-4 p-6 md:p-10">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-viola/10 text-viola mb-6">
                  {post.category}
                </span>

                {/* Article content with clean typography */}
                <div className="max-w-none">
                  {paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-navy/80 text-base md:text-lg leading-relaxed mb-6 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-grigio-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-4 w-4 text-grigio-text" />
                    <span className="text-sm font-semibold text-navy">Tag</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1.5 text-xs font-medium rounded-full bg-grigio-bg text-grigio-text hover:bg-viola/10 hover:text-viola cursor-pointer transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Sidebar ─────────────────────────────────────────────── */}
            <aside className="w-full lg:w-72 xl:w-80 shrink-0 space-y-8 lg:pt-0">
              {/* Related Posts */}
              <div className="bg-white rounded-card shadow-soft p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-5">
                  Articoli Correlati
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/blog/${related.slug}`}
                      className="block group"
                    >
                      <h4 className="text-sm font-semibold text-navy group-hover:text-viola transition-colors leading-snug line-clamp-2 mb-1">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-grigio-text">
                        <span>{formatDate(related.publishedAt)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {related.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup CTA */}
              <div className="bg-gradient-to-br from-viola to-viola-dark rounded-card p-6 text-white">
                <h3 className="font-heading text-lg font-bold mb-2">
                  Non perderti nessun articolo
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Iscriviti alla newsletter per ricevere guide esclusive e le
                  ultime strategie per content creator.
                </p>
                <div className="space-y-2.5">
                  <input
                    type="email"
                    placeholder="La tua email"
                    className="w-full px-4 py-2.5 rounded-input bg-white/20 text-white placeholder-white/50 border border-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <button
                    type="button"
                    className="w-full px-4 py-2.5 rounded-button bg-arancione text-white font-bold text-sm hover:bg-arancione-dark transition-colors"
                  >
                    Iscriviti Ora
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
