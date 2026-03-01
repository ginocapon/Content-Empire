"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Brain, Tag } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    icon: DollarSign,
    value: 254,
    suffix: " miliardi USD",
    label: "Mercato Creator Economy",
    description: "Valore stimato del mercato globale della creator economy",
  },
  {
    icon: TrendingUp,
    value: 23.4,
    suffix: "%",
    decimals: 1,
    label: "Crescita Annua",
    description: "Tasso di crescita annuale composto del settore",
  },
  {
    icon: Brain,
    value: 91,
    suffix: "%",
    label: "Creator Usa AI",
    description: "Percentuale di creator che utilizzano strumenti AI",
  },
  {
    icon: Tag,
    value: 9.9,
    prefix: "",
    suffix: "€",
    decimals: 1,
    label: "Prezzo Iniziale",
    description: "A partire da meno di 10 euro al mese",
  },
];

function AnimatedStat({ stat }: { stat: StatItem }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = stat.value / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
              setCount(stat.value);
              clearInterval(interval);
            } else {
              setCount(
                stat.decimals
                  ? parseFloat(current.toFixed(stat.decimals))
                  : Math.floor(current)
              );
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat.value, stat.decimals]);

  const displayValue = stat.decimals
    ? count.toFixed(stat.decimals)
    : count.toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-8"
    >
      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
        <stat.icon className="w-8 h-8 text-arancione" />
      </div>
      <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
        {stat.prefix}
        {displayValue}
        {stat.suffix}
      </div>
      <h3 className="font-heading text-lg font-semibold text-white/90 mb-1">
        {stat.label}
      </h3>
      <p className="text-white/50 text-sm max-w-xs mx-auto">
        {stat.description}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative animated-gradient-bg section-padding overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-viola/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-arancione/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-4">
            I Numeri del Mercato
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Un Mercato in{" "}
            <span className="text-arancione">Esplosione</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl text-center max-w-3xl mx-auto">
            La creator economy sta crescendo a ritmi senza precedenti. Non restare indietro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
