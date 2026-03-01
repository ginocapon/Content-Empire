"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/lib/faq-data";
import type { FAQItem } from "@/lib/faq-data";

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-grigio-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 px-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-navy text-base md:text-lg pr-4 group-hover:text-viola transition-colors">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-grigio-text group-hover:text-viola transition-colors" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-grigio-text leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-grigio-bg">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-arancione/10 text-arancione text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="section-title">
            Domande{" "}
            <span className="gradient-text">Frequenti</span>
          </h2>
          <p className="section-subtitle">
            Tutto quello che devi sapere su Content Empire. Non trovi la risposta? Contattaci!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card overflow-hidden"
        >
          {faqData.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
