import { createMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Cookie Policy - Informativa sui Cookie",
  description: "Informativa sui cookie utilizzati da Content Empire. Scopri quali cookie utilizziamo e come gestire le tue preferenze.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://contentempire.it" },
        { name: "Cookie Policy", url: "https://contentempire.it/cookie-policy" },
      ]} />

      <section className="bg-gradient-to-br from-navy to-navy-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-2">Cookie Policy</h1>
          <p className="text-gray-300">Ultimo aggiornamento: 1 Marzo 2025</p>
        </div>
      </section>

      <section className="py-12 bg-grigio-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-card shadow-soft p-8 md:p-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-navy mt-0">1. Cosa Sono i Cookie</h2>
            <p className="text-navy/80">I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Servono a migliorare l&apos;esperienza di navigazione, ricordare le tue preferenze e fornire informazioni utili ai proprietari del sito.</p>

            <h2 className="text-2xl font-heading font-bold text-navy">2. Cookie Tecnici (Necessari)</h2>
            <p className="text-navy/80">Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati:</p>
            <ul className="text-navy/80">
              <li><strong>Sessione:</strong> mantengono la tua sessione di autenticazione attiva</li>
              <li><strong>CSRF:</strong> proteggono da attacchi cross-site request forgery</li>
              <li><strong>Preferenze:</strong> memorizzano la tua scelta di tema (chiaro/scuro) e lingua</li>
              <li><strong>Consenso cookie:</strong> registrano la tua scelta relativa ai cookie</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy">3. Cookie Analitici</h2>
            <p className="text-navy/80">Utilizziamo cookie analitici per comprendere come i visitatori interagiscono con il sito. Questi cookie raccolgono informazioni in forma anonima e aggregata, come le pagine più visitate, il tempo di permanenza e le fonti di traffico. Non utilizziamo Google Analytics; le analytics sono gestite tramite il nostro sistema self-hosted nel rispetto del GDPR.</p>

            <h2 className="text-2xl font-heading font-bold text-navy">4. Cookie di Profilazione</h2>
            <p className="text-navy/80">Content Empire non utilizza cookie di profilazione di terze parti. Non vendiamo né condividiamo i tuoi dati con inserzionisti o network pubblicitari. Eventuali cookie di terze parti sono limitati ai servizi essenziali (es. Stripe per i pagamenti) e sono soggetti alle rispettive privacy policy.</p>

            <h2 className="text-2xl font-heading font-bold text-navy">5. Come Gestire i Cookie</h2>
            <p className="text-navy/80">Puoi gestire le tue preferenze sui cookie in diversi modi:</p>
            <ul className="text-navy/80">
              <li><strong>Impostazioni del browser:</strong> puoi configurare il tuo browser per bloccare o eliminare i cookie</li>
              <li><strong>Banner cookie:</strong> al primo accesso puoi scegliere quali categorie di cookie accettare</li>
              <li><strong>Impostazioni account:</strong> se sei registrato, puoi gestire le preferenze dal tuo profilo</li>
            </ul>
            <p className="text-navy/80">Nota: la disattivazione di alcuni cookie potrebbe influire sul funzionamento del sito.</p>

            <h2 className="text-2xl font-heading font-bold text-navy">6. Aggiornamenti</h2>
            <p className="text-navy/80">Questa Cookie Policy può essere aggiornata periodicamente per riflettere modifiche ai cookie utilizzati o alla normativa applicabile. Ti invitiamo a consultarla regolarmente. La data dell&apos;ultimo aggiornamento è indicata in cima a questa pagina.</p>

            <p className="text-navy/80 mt-8">Per maggiori informazioni, consulta la nostra <a href="/privacy" className="text-viola">Privacy Policy</a> o contattaci a <a href="mailto:privacy@contentempire.it" className="text-viola">privacy@contentempire.it</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
