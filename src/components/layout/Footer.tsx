"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ArrowRight,
} from "lucide-react";

const footerColumns = {
  Piattaforma: [
    { label: "Funzionalita", href: "/#funzionalita" },
    { label: "Come Funziona", href: "/#come-funziona" },
    { label: "Prezzi", href: "/prezzi" },
    { label: "Template", href: "/template" },
    { label: "Integrazioni", href: "/integrazioni" },
  ],
  Risorse: [
    { label: "Blog", href: "/blog" },
    { label: "Guide", href: "/guide" },
    { label: "Webinar", href: "/webinar" },
    { label: "Community", href: "/community" },
    { label: "Supporto", href: "/supporto" },
  ],
  Legale: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Termini di Servizio", href: "/termini" },
    { label: "GDPR", href: "/gdpr" },
  ],
  Contatti: [
    { label: "Contattaci", href: "/contatti" },
    { label: "Richiedi Demo", href: "/contatti#demo" },
    { label: "Carriere", href: "/carriere" },
    { label: "Stampa", href: "/stampa" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/contentempire", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/contentempire", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/contentempire", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@contentempire", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // In production this would call an API endpoint
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-navy text-white">
      {/* ─── Main Footer Grid ──────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand + Newsletter Column (spans 2 on lg) */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold gradient-text">
                Content Empire
              </span>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              La piattaforma AI all-in-one per content creator. Genera, pubblica
              e monetizza i tuoi contenuti in modo intelligente.
            </p>

            {/* Newsletter mini-form */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <p className="text-white/80 text-sm font-heading font-semibold mb-2">
                Iscriviti alla newsletter
              </p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Send size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="La tua email"
                    required
                    className="w-full pl-9 pr-3 py-2.5 bg-white/10 border border-white/10 rounded-input text-sm text-white
                               placeholder:text-white/30 focus:outline-none focus:border-viola focus:ring-1 focus:ring-viola transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center px-4 py-2.5 bg-viola hover:bg-viola-dark text-white text-sm font-semibold
                             rounded-input transition-all duration-200 hover:scale-105 shrink-0"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-verde-light text-xs font-medium">
                  Grazie per l&apos;iscrizione!
                </p>
              )}
            </form>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10
                             text-white/50 hover:text-white hover:bg-viola/20 hover:border-viola/40 transition-all duration-200"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerColumns).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Bottom Bar ────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Content Empire. Tutti i diritti
            riservati. Fatto con passione in Italia.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Cookie
            </Link>
            <Link
              href="/termini"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Termini
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
