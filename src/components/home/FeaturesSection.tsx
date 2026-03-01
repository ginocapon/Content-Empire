"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  FileStack,
  Share2,
  LayoutGrid,
  ShoppingBag,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Generativa Interna",
    description:
      "Motore AI proprietario che genera testi, immagini e video ottimizzati per ogni piattaforma. Nessun tool esterno necessario.",
    color: "from-viola to-viola-light",
  },
  {
    icon: FileStack,
    title: "Multi-formato Automatico",
    description:
      "Da un singolo input genera automaticamente post, reel, storie, caroselli, newsletter e articoli blog.",
    color: "from-arancione to-arancione-light",
  },
  {
    icon: Share2,
    title: "Publishing Cross-Platform",
    description:
      "Pubblica su Instagram, TikTok, YouTube, LinkedIn, Twitter, Facebook e altri canali con un solo click.",
    color: "from-verde to-verde-light",
  },
  {
    icon: LayoutGrid,
    title: "Marketplace Template",
    description:
      "Accedi a migliaia di template professionali creati dalla community. Vendi i tuoi template e guadagna.",
    color: "from-viola to-arancione",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Integrato",
    description:
      "Vendi corsi, ebook, template e servizi direttamente dalla piattaforma. Gestisci pagamenti e fatturazione.",
    color: "from-arancione to-verde",
  },
  {
    icon: BarChart3,
    title: "Analytics Unificata",
    description:
      "Dashboard unica con metriche di tutti i canali. Scopri cosa funziona e ottimizza la tua strategia con AI.",
    color: "from-verde to-viola",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FeaturesSection() {
  return (
    <section id="funzionalita" className="section-padding bg-grigio-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-viola/10 text-viola text-sm font-semibold mb-4">
            Funzionalita
          </span>
          <h2 className="section-title">
            Tutto Quello di Cui Hai Bisogno,{" "}
            <span className="gradient-text">In Un Solo Posto</span>
          </h2>
          <p className="section-subtitle">
            Sei strumenti potenti integrati in un&apos;unica piattaforma per gestire
            l&apos;intero ciclo di vita dei tuoi contenuti.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass-card p-8 hover:shadow-hover transition-all duration-300 group cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-grigio-text leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
