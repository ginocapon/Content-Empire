"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  highlighted: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: "0",
    period: "per sempre",
    description: "Perfetto per iniziare e scoprire la piattaforma.",
    features: [
      "1 canale social collegato",
      "10 contenuti AI al mese",
      "Calendario editoriale base",
      "Analisi metriche essenziali",
      "Community access",
    ],
    cta: "Inizia Gratis",
    popular: false,
    highlighted: false,
  },
  {
    name: "Starter",
    price: "9,90",
    period: "/mese",
    description: "Per creator che vogliono crescere piu velocemente.",
    features: [
      "5 canali social collegati",
      "100 contenuti AI al mese",
      "Calendario editoriale avanzato",
      "Analisi metriche complete",
      "Programmazione automatica post",
      "Supporto email prioritario",
    ],
    cta: "Scegli Starter",
    popular: false,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "19,90",
    period: "/mese",
    description: "Per professionisti che vivono di contenuti.",
    features: [
      "15 canali social collegati",
      "Contenuti AI illimitati",
      "Calendario editoriale avanzato",
      "Report e analisi avanzate",
      "Programmazione automatica post",
      "Strumenti di monetizzazione",
      "A/B testing contenuti",
      "Supporto prioritario via chat",
    ],
    cta: "Scegli Pro",
    popular: true,
    highlighted: true,
  },
  {
    name: "Business",
    price: "49,90",
    period: "/mese",
    description: "Per team e agenzie con esigenze avanzate.",
    features: [
      "Canali social illimitati",
      "Contenuti AI illimitati",
      "Calendario editoriale team",
      "Report personalizzati",
      "Programmazione automatica post",
      "Monetizzazione avanzata",
      "A/B testing contenuti",
      "Gestione team e ruoli",
      "API access",
      "Account manager dedicato",
    ],
    cta: "Scegli Business",
    popular: false,
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="prezzi" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-viola/10 text-viola text-sm font-semibold mb-4">
            Prezzi
          </span>
          <h2 className="section-title">
            Piani Semplici,{" "}
            <span className="gradient-text">Risultati Straordinari</span>
          </h2>
          <p className="section-subtitle">
            Scegli il piano perfetto per il tuo percorso da creator. Upgrade o
            downgrade in qualsiasi momento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-card p-6 lg:p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-b from-viola to-viola-dark text-white shadow-hover scale-[1.02] lg:scale-105 z-10"
                  : "glass-card"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 bg-arancione text-white text-xs font-bold rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    PIU POPOLARE
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3
                className={`font-heading text-xl font-bold mb-2 ${
                  plan.highlighted ? "text-white" : "text-navy"
                }`}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-white/70" : "text-grigio-text"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-medium">&euro;</span>
                  <span
                    className={`font-heading text-4xl lg:text-5xl font-bold ${
                      plan.highlighted ? "text-white" : "text-navy"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      plan.highlighted ? "text-white/60" : "text-grigio-text"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-verde-light" : "text-verde"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/80" : "text-navy/70"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`inline-flex items-center justify-center gap-2 w-full py-3.5 font-heading font-bold text-sm rounded-button transition-all duration-300 hover:scale-105 group ${
                  plan.highlighted
                    ? "bg-white text-viola hover:bg-gray-50"
                    : "bg-viola text-white hover:bg-viola-dark"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-grigio-text text-sm mt-10"
        >
          Tutti i piani includono 14 giorni di prova gratuita. Nessuna carta di credito richiesta.
        </motion.p>
      </div>
    </section>
  );
}
