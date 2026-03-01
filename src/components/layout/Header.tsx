"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Come Funziona", href: "/#come-funziona" },
  { label: "Prezzi", href: "/prezzi" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contatti", href: "/contatti" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  /* ── Scroll listener ─────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Dark mode — read persisted preference ───── */
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  /* ── Lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ─── Fixed Header Bar ───────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading text-2xl font-bold gradient-text">
              Content Empire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative font-body text-sm font-medium text-[var(--foreground)] hover:text-viola transition-colors duration-200
                             after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-viola after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dark / light toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Cambia tema"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-color)]
                         text-[var(--foreground)] hover:bg-viola/10 hover:border-viola transition-all duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* CTA */}
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-viola text-white text-sm font-heading font-semibold rounded-button
                         hover:bg-viola-dark hover:shadow-hover hover:scale-105 transition-all duration-300"
            >
              Inizia Gratis
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleDarkMode}
              aria-label="Cambia tema"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border-color)]
                         text-[var(--foreground)] hover:bg-viola/10 transition-colors"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Apri menu"
              className="flex items-center justify-center w-9 h-9 rounded-full text-[var(--foreground)] hover:bg-viola/10 transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* ─── Mobile Slide-in Drawer ─────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 h-full w-[300px] max-w-[85vw]
                         bg-[var(--background-secondary)] shadow-elevated lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-color)]">
                <span className="font-heading text-lg font-bold gradient-text">
                  Content Empire
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Chiudi menu"
                  className="flex items-center justify-center w-9 h-9 rounded-full text-[var(--foreground)] hover:bg-viola/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col px-6 py-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-3 rounded-input text-[var(--foreground)] font-body font-medium
                                 hover:bg-viola/10 hover:text-viola transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.25 }}
                  className="mt-4"
                >
                  <Link
                    href="/auth/register"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full py-3 bg-viola text-white font-heading font-semibold rounded-button
                               hover:bg-viola-dark transition-all duration-300"
                  >
                    Inizia Gratis
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
