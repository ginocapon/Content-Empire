"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

interface FaqCategory {
  name: string;
  faqs: Faq[];
}

export default function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  const [openCategory, setOpenCategory] = useState<string | null>(categories[0]?.name || null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category.name} className="bg-white rounded-card shadow-soft overflow-hidden">
          <button
            onClick={() => setOpenCategory(openCategory === category.name ? null : category.name)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-heading font-bold text-navy">{category.name}</h2>
            <ChevronDown
              size={20}
              className={`text-viola transition-transform duration-300 ${
                openCategory === category.name ? "rotate-180" : ""
              }`}
            />
          </button>

          {openCategory === category.name && (
            <div className="border-t border-grigio-border">
              {category.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-grigio-border last:border-b-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.question ? null : faq.question)}
                    className="w-full flex items-center justify-between p-5 pl-8 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-navy font-medium pr-4">{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className={`text-grigio-text flex-shrink-0 transition-transform duration-300 ${
                        openFaq === faq.question ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === faq.question && (
                    <div className="px-8 pb-5 text-grigio-text leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
