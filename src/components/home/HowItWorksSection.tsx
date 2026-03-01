"use client";

import { motion } from "framer-motion";
import { Upload, Wand2, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Carica un input",
    description:
      "Carica una foto, un testo, un video o anche solo un'idea. L'AI capisce il tuo contenuto e lo analizza in profondita.",
    detail: "Foto, testo, video, audio o link",
  },
  {
    number: 2,
    icon: Wand2,
    title: "L'AI genera tutti i formati",
    description:
      "In pochi secondi l'AI trasforma il tuo input in post, reel, storie, caroselli, newsletter e articoli ottimizzati per ogni piattaforma.",
    detail: "Post, Reel, Storie, Newsletter e altro",
  },
  {
    number: 3,
    icon: Rocket,
    title: "Pubblica ovunque con 1 click",
    description:
      "Scegli le piattaforme, personalizza se vuoi, e pubblica tutto con un solo click. Programma o pubblica immediatamente.",
    detail: "Instagram, TikTok, YouTube, LinkedIn...",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="come-funziona" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-arancione/10 text-arancione text-sm font-semibold mb-4">
            Come Funziona
          </span>
          <h2 className="section-title">
            Tre Semplici Passaggi per{" "}
            <span className="gradient-text">Dominare i Contenuti</span>
          </h2>
          <p className="section-subtitle">
            Dalla tua idea alla pubblicazione su tutte le piattaforme in meno di 60 secondi.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-viola via-arancione to-verde -translate-y-1/2 mx-20" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 mx-auto mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-viola to-arancione flex items-center justify-center mx-auto shadow-lg">
                    <span className="font-heading text-3xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-viola" />
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-navy mb-3 mt-4">
                  {step.title}
                </h3>
                <p className="text-grigio-text leading-relaxed mb-4 max-w-sm mx-auto">
                  {step.description}
                </p>
                <span className="inline-block px-4 py-1.5 rounded-full bg-grigio-bg text-navy/60 text-sm font-medium">
                  {step.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
