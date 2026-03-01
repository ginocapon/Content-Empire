import { createMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import NewsletterForm from "./NewsletterForm";
import { Mail, BookOpen, Lightbulb, Gift } from "lucide-react";

export const metadata = createMetadata({
  title: "Newsletter - Resta Aggiornato sulle Novità per Creator",
  description:
    "Iscriviti alla newsletter di Content Empire e ricevi ogni settimana guide, strategie e tips esclusivi per content creator.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://contentempire.it" },
          { name: "Newsletter", url: "https://contentempire.it/newsletter" },
        ]}
      />

      <section className="bg-gradient-to-br from-navy to-navy-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Iscriviti alla Newsletter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ogni settimana ricevi strategie, guide e tips esclusivi per far crescere
            il tuo business da content creator
          </p>
        </div>
      </section>

      <section className="py-16 bg-grigio-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-6">
                Cosa riceverai
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Gift, title: "Anteprime Esclusive", desc: "Accesso anticipato a nuove funzionalità e aggiornamenti della piattaforma" },
                  { icon: BookOpen, title: "Guide Gratuite", desc: "PDF e tutorial approfonditi su content creation, SEO e monetizzazione" },
                  { icon: Lightbulb, title: "Tips Settimanali", desc: "Consigli pratici e strategie testate per aumentare engagement e revenue" },
                  { icon: Mail, title: "Offerte Riservate", desc: "Sconti esclusivi sui piani a pagamento e accesso prioritario al beta" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-card bg-viola/10 flex items-center justify-center">
                      <item.icon size={24} className="text-viola" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy">{item.title}</h3>
                      <p className="text-sm text-grigio-text">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-card shadow-soft">
                <p className="text-grigio-text italic mb-3">
                  &ldquo;La newsletter di Content Empire è la migliore risorsa settimanale per creator
                  che ho trovato. Ogni email contiene almeno un tip che posso applicare subito.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-viola/20 flex items-center justify-center text-viola font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Alessia Conti</p>
                    <p className="text-xs text-grigio-text">Content Creator, 45K follower</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
