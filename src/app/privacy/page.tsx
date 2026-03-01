import { createMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Privacy Policy - Informativa sulla Privacy",
  description: "Informativa sulla privacy di Content Empire ai sensi del GDPR. Scopri come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://contentempire.it" },
        { name: "Privacy Policy", url: "https://contentempire.it/privacy" },
      ]} />

      <section className="bg-gradient-to-br from-navy to-navy-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-300">Ultimo aggiornamento: 1 Marzo 2025</p>
        </div>
      </section>

      <section className="py-12 bg-grigio-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-card shadow-soft p-8 md:p-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-navy mt-0">1. Titolare del Trattamento</h2>
            <p className="text-navy/80">Il titolare del trattamento dei dati personali è Content Empire S.r.l., con sede legale in Italia. Per qualsiasi richiesta relativa alla privacy, puoi contattarci all&apos;indirizzo email: <a href="mailto:privacy@contentempire.it" className="text-viola">privacy@contentempire.it</a>.</p>

            <h2 className="text-2xl font-heading font-bold text-navy">2. Dati Raccolti</h2>
            <p className="text-navy/80">Raccogliamo le seguenti categorie di dati personali:</p>
            <ul className="text-navy/80">
              <li><strong>Dati di registrazione:</strong> nome, indirizzo email, immagine del profilo (se fornita tramite OAuth)</li>
              <li><strong>Dati di utilizzo:</strong> contenuti generati, canali collegati, preferenze di pubblicazione, analytics di performance</li>
              <li><strong>Dati tecnici:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, tempo di permanenza</li>
              <li><strong>Dati di pagamento:</strong> gestiti direttamente da Stripe; non memorizziamo numeri di carta di credito sui nostri server</li>
              <li><strong>Dati della newsletter:</strong> indirizzo email e nome (opzionale) per l&apos;invio di comunicazioni periodiche</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy">3. Finalità del Trattamento</h2>
            <p className="text-navy/80">I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="text-navy/80">
              <li>Erogazione del servizio e gestione dell&apos;account utente</li>
              <li>Generazione di contenuti tramite AI e pubblicazione cross-platform</li>
              <li>Gestione dei pagamenti e fatturazione</li>
              <li>Invio di comunicazioni relative al servizio e alla newsletter</li>
              <li>Miglioramento del servizio tramite analytics anonimizzate</li>
              <li>Adempimento di obblighi legali e fiscali</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy">4. Base Giuridica</h2>
            <p className="text-navy/80">Il trattamento dei dati si basa su: esecuzione del contratto (per l&apos;erogazione del servizio), consenso esplicito (per la newsletter e comunicazioni marketing), legittimo interesse (per analytics e miglioramento del servizio), obbligo legale (per adempimenti fiscali e normativi).</p>

            <h2 className="text-2xl font-heading font-bold text-navy">5. Conservazione dei Dati</h2>
            <p className="text-navy/80">I dati personali sono conservati per il tempo necessario alle finalità per cui sono stati raccolti: dati dell&apos;account fino alla cancellazione dello stesso, dati di fatturazione per 10 anni (obbligo fiscale), dati della newsletter fino alla disiscrizione, dati tecnici per 26 mesi.</p>

            <h2 className="text-2xl font-heading font-bold text-navy">6. Diritti dell&apos;Interessato</h2>
            <p className="text-navy/80">Ai sensi del GDPR (Regolamento UE 2016/679), hai diritto di:</p>
            <ul className="text-navy/80">
              <li><strong>Accesso:</strong> ottenere conferma dell&apos;esistenza di dati che ti riguardano e una copia degli stessi</li>
              <li><strong>Rettifica:</strong> richiedere la correzione di dati inesatti o incompleti</li>
              <li><strong>Cancellazione:</strong> richiedere la cancellazione dei tuoi dati (&ldquo;diritto all&apos;oblio&rdquo;)</li>
              <li><strong>Limitazione:</strong> richiedere la limitazione del trattamento in determinati casi</li>
              <li><strong>Portabilità:</strong> ricevere i tuoi dati in formato strutturato e leggibile da dispositivo automatico</li>
              <li><strong>Opposizione:</strong> opporti al trattamento per motivi legittimi</li>
              <li><strong>Revoca del consenso:</strong> revocare in qualsiasi momento il consenso prestato</li>
            </ul>
            <p className="text-navy/80">Per esercitare i tuoi diritti, contattaci a: <a href="mailto:privacy@contentempire.it" className="text-viola">privacy@contentempire.it</a>.</p>

            <h2 className="text-2xl font-heading font-bold text-navy">7. Sicurezza dei Dati</h2>
            <p className="text-navy/80">Tutti i dati sono processati su server situati nell&apos;Unione Europea (Hetzner, Germania), conformi al GDPR. L&apos;AI è completamente self-hosted: nessun dato viene trasmesso a servizi terzi come OpenAI, Google o altri provider cloud. Utilizziamo crittografia SSL/TLS, backup giornalieri e monitoraggio continuo.</p>

            <h2 className="text-2xl font-heading font-bold text-navy">8. Cookie</h2>
            <p className="text-navy/80">Per informazioni dettagliate sull&apos;uso dei cookie, consulta la nostra <a href="/cookie-policy" className="text-viola">Cookie Policy</a>.</p>

            <h2 className="text-2xl font-heading font-bold text-navy">9. Contatti DPO</h2>
            <p className="text-navy/80">Il Responsabile della Protezione dei Dati (DPO) è contattabile all&apos;indirizzo: <a href="mailto:dpo@contentempire.it" className="text-viola">dpo@contentempire.it</a>. Hai inoltre il diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali.</p>
          </div>
        </div>
      </section>
    </>
  );
}
