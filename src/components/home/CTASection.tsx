"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative section-padding animated-gradient-bg overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-1/4 w-64 h-64 bg-viola/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-72 h-72 bg-arancione/15 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8">
            <Sparkles className="w-4 h-4 text-arancione" />
            Inizia il tuo percorso oggi
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Pronto a Rivoluzionare
            <br />
            <span className="text-arancione">i Tuoi Contenuti?</span>
          </h2>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Unisciti a migliaia di creator che hanno gia trasformato il loro
            business con Content Empire. Inizia gratis, senza carta di credito.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-viola font-heading font-bold text-lg rounded-button hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-hover group"
            >
              Inizia Gratis Ora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#prezzi"
              className="btn-outline text-lg"
            >
              Vedi i Piani
            </a>
          </div>

          <p className="text-white/40 text-sm mt-6">
            Nessun obbligo. Nessuna carta di credito. Cancella quando vuoi.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
