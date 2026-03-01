"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Giulia Marchetti",
    role: "Content Creator & Influencer",
    avatar: "GM",
    quote:
      "Content Empire ha rivoluzionato il mio workflow. Prima usavo 7 tool diversi, ora faccio tutto da un'unica dashboard. Il tempo risparmiato e incredibile: da 4 ore al giorno a meno di 30 minuti.",
    rating: 5,
    platform: "Instagram - 320K follower",
  },
  {
    name: "Marco Rossi",
    role: "YouTuber & Digital Educator",
    avatar: "MR",
    quote:
      "L'AI di Content Empire capisce il mio stile e genera contenuti che sembrano scritti da me. I miei studenti non credono che uso l'AI. E il publishing cross-platform mi ha fatto raddoppiare la reach in 3 mesi.",
    rating: 5,
    platform: "YouTube - 150K iscritti",
  },
  {
    name: "Alessandra Conti",
    role: "Social Media Manager",
    avatar: "AC",
    quote:
      "Gestisco 12 clienti e prima era un incubo. Con Content Empire riesco a creare contenuti personalizzati per ogni brand in frazione del tempo. Il marketplace template e una miniera d'oro. Lo consiglio a tutti i professionisti.",
    rating: 5,
    platform: "Agenzia - 12 clienti attivi",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-grigio-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-verde/10 text-verde text-sm font-semibold mb-4">
            Testimonianze
          </span>
          <h2 className="section-title">
            Amato dai{" "}
            <span className="gradient-text">Creator di Tutta Italia</span>
          </h2>
          <p className="section-subtitle">
            Scopri cosa dicono i creator che hanno gia trasformato il loro
            business con Content Empire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 flex flex-col"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-viola/30" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-arancione text-arancione"
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-navy/80 leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-grigio-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-viola to-arancione flex items-center justify-center text-white font-heading font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-heading font-bold text-navy text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-grigio-text text-xs">{testimonial.role}</p>
                  <p className="text-viola text-xs font-medium">
                    {testimonial.platform}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
