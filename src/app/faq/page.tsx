import { createMetadata } from "@/lib/seo/metadata";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import FaqAccordion from "./FaqAccordion";

export const metadata = createMetadata({
  title: "FAQ - Domande Frequenti su Content Empire",
  description:
    "Trova le risposte alle domande più frequenti su Content Empire: prezzi, funzionalità AI, pubblicazione cross-platform, marketplace e supporto.",
  path: "/faq",
});

const faqCategories = [
  {
    name: "Generale",
    faqs: [
      { question: "Cos'è Content Empire?", answer: "Content Empire è la piattaforma all-in-one con intelligenza artificiale generativa interna per content creator. Permette di generare contenuti multi-formato da un singolo input, pubblicarli su tutte le piattaforme social, venderli nel marketplace integrato e monitorare le performance con analytics unificata. Tutto in un'unica dashboard, sostituendo 5-10 tool separati." },
      { question: "Come funziona la generazione AI?", answer: "Basta caricare un input minimo — una foto, un breve testo, un video o un messaggio vocale — e l'AI genera automaticamente contenuti ottimizzati per ogni piattaforma: post Instagram, Reel/TikTok, articoli blog SEO, newsletter, schede prodotto e molto altro. L'AI è 100% self-hosted, senza API esterne a pagamento." },
      { question: "A chi è rivolta la piattaforma?", answer: "Content Empire è pensata per content creator, influencer, social media manager, piccole imprese e agenzie che vogliono ottimizzare la produzione e distribuzione di contenuti. È ideale per chi gestisce più canali social e vuole risparmiare tempo e denaro." },
      { question: "In quali lingue è disponibile?", answer: "Attualmente Content Empire è disponibile in italiano. L'architettura è predisposta per l'internazionalizzazione e presto saranno supportate anche inglese, spagnolo, francese e tedesco." },
      { question: "Posso provare Content Empire gratuitamente?", answer: "Sì! Il piano Free ti permette di generare fino a 5 contenuti al mese con 1 canale collegato, senza carta di credito richiesta. Puoi passare a un piano a pagamento in qualsiasi momento." },
    ],
  },
  {
    name: "Prezzi e Piani",
    faqs: [
      { question: "Quanto costa Content Empire?", answer: "Content Empire offre 4 piani: Free (gratuito, 5 contenuti/mese), Starter (€9,90/mese, contenuti illimitati, 3 canali), Pro (€19,90/mese, tutto incluso, 5 video/mese, 3 team member) e Business (€49,90/mese, tutto illimitato, analytics predittiva, 10 team member)." },
      { question: "Cosa include il piano gratuito?", answer: "Il piano Free include 5 generazioni AI al mese, 1 canale social collegato, accesso al marketplace in modalità acquisto e analytics base. Non è richiesta carta di credito per registrarsi." },
      { question: "Quali metodi di pagamento accettate?", answer: "Accettiamo tutte le principali carte di credito e debito (Visa, Mastercard, American Express), PayPal e bonifico SEPA per i piani annuali. I pagamenti sono gestiti in modo sicuro tramite Stripe." },
      { question: "Posso cancellare l'abbonamento in qualsiasi momento?", answer: "Sì, puoi cancellare il tuo abbonamento in qualsiasi momento dalle impostazioni del tuo account. L'accesso rimarrà attivo fino alla fine del periodo di fatturazione corrente." },
      { question: "Offrite rimborsi?", answer: "Offriamo un rimborso completo entro 14 giorni dall'attivazione di qualsiasi piano a pagamento, senza domande. Dopo i 14 giorni, puoi cancellare ma non è previsto rimborso per il periodo rimanente." },
    ],
  },
  {
    name: "AI e Tecnologia",
    faqs: [
      { question: "Quali modelli AI utilizzate?", answer: "Content Empire utilizza modelli AI self-hosted di ultima generazione: LLaMA 3.1 e Mistral 7B per la generazione testi, Stable Diffusion XL per le immagini, Whisper per la trascrizione audio/video. Tutti i modelli girano sui nostri server europei, garantendo privacy e zero costi API." },
      { question: "I miei dati sono al sicuro?", answer: "Assolutamente sì. Tutti i dati sono processati su server EU (Hetzner, Germania) conformi al GDPR. L'AI è completamente self-hosted: nessun dato viene inviato a servizi terzi come OpenAI o Google. I tuoi contenuti restano tuoi al 100%." },
      { question: "L'AI self-hosted è paragonabile a ChatGPT?", answer: "Per la generazione di contenuti social, caption, articoli blog e schede prodotto, i nostri modelli ottimizzati offrono risultati comparabili ai servizi cloud. Inoltre, il Brand Voice AI impara il tuo stile personale per contenuti sempre più accurati nel tempo." },
      { question: "Che tipi di contenuti può generare l'AI?", answer: "L'AI genera: post social (caption + hashtag), caroselli Instagram, script per Reel/TikTok, articoli blog SEO (800+ parole), newsletter, schede prodotto e-commerce, thumbnail e grafiche, sottotitoli video multilingua. Tutto da un singolo input." },
      { question: "Come funziona il Brand Voice AI?", answer: "Durante l'onboarding, carichi esempi del tuo stile di comunicazione. L'AI analizza tono, vocabolario, struttura e crea un profilo vocale unico. Ogni contenuto generato successivamente rispecchia il tuo stile personale." },
    ],
  },
  {
    name: "Pubblicazione",
    faqs: [
      { question: "Su quali piattaforme posso pubblicare?", answer: "Content Empire supporta la pubblicazione su: Instagram (post, storie, reel), TikTok, YouTube, LinkedIn, Facebook, Pinterest, blog personale e newsletter. Nuove integrazioni vengono aggiunte regolarmente." },
      { question: "Come funziona lo scheduling?", answer: "L'AI analizza i dati di engagement dei tuoi canali e calcola l'orario ottimale di pubblicazione per ciascuna piattaforma. Puoi programmare i contenuti nel calendario drag & drop o lasciare che l'AI pubblichi automaticamente." },
      { question: "L'AI adatta il contenuto per ogni piattaforma?", answer: "Sì! L'AI Adapter Engine riadatta automaticamente formato, dimensioni, tono e stile per ogni piattaforma: quadrato per Instagram, verticale per TikTok, professionale per LinkedIn, SEO per il blog, ecc." },
      { question: "Posso vedere le analytics di tutti i canali?", answer: "Sì, la dashboard Analytics unificata mostra follower, engagement, reach, conversioni e revenue di tutti i canali collegati in un unico cruscotto con grafici interattivi e possibilità di export." },
      { question: "Come collego i miei canali social?", answer: "Dalla sezione 'Canali Collegati' della dashboard, fai click su 'Aggiungi canale', scegli la piattaforma e autorizza l'accesso con OAuth. Il processo richiede meno di 30 secondi per canale." },
    ],
  },
  {
    name: "Marketplace",
    faqs: [
      { question: "Cos'è il Marketplace di Content Empire?", answer: "Il Marketplace è uno spazio dove i creator possono vendere e acquistare template, contenuti premium e format riutilizzabili. È integrato nativamente nella piattaforma: nessun setup aggiuntivo richiesto." },
      { question: "Quanto guadagno vendendo template?", answer: "Tratteniamo solo il 10% di commissione su ogni vendita — molto meno del 30% di piattaforme come Gumroad o Creative Market. Il restante 90% va direttamente nel tuo wallet." },
      { question: "Come funziona il sistema di affiliazione?", answer: "Ogni creator ha un link affiliato unico. Quando qualcuno si registra o acquista tramite il tuo link, guadagni l'8% su ogni transazione. Le commissioni si accumulano nel tuo wallet e puoi prelevarle in qualsiasi momento." },
      { question: "Come ritiro i miei guadagni?", answer: "I guadagni si accumulano nel tuo Wallet. Puoi richiedere un prelievo tramite bonifico bancario SEPA quando raggiungi la soglia minima di €50. I prelievi vengono elaborati entro 5 giorni lavorativi." },
      { question: "Che tipo di template posso vendere?", answer: "Puoi vendere qualsiasi tipo di contenuto riutilizzabile: template per caroselli Instagram, strutture per articoli blog, format per newsletter, preset grafici, script per video e molto altro. Ogni template viene verificato dal nostro team prima della pubblicazione." },
    ],
  },
  {
    name: "Supporto",
    faqs: [
      { question: "Come posso contattare il supporto?", answer: "Il supporto è disponibile via email per tutti i piani (risposta entro 24h), chat in tempo reale per i piani Pro e Business, e call dedicate per il piano Business. La community è accessibile a tutti gli utenti." },
      { question: "Offrite formazione o onboarding?", answer: "Sì! Ogni nuovo utente segue un onboarding guidato di 3 minuti. Inoltre, il blog contiene guide dettagliate, e i piani Pro e Business includono sessioni di onboarding personalizzato con il nostro team." },
      { question: "Con quale frequenza aggiornate la piattaforma?", answer: "Rilasciamo aggiornamenti settimanali con miglioramenti e bug fix, e aggiornamenti mensili con nuove funzionalità. La roadmap è pubblica e i creator possono votare le feature più richieste." },
      { question: "Qual è il vostro SLA?", answer: "Garantiamo un uptime del 99.9% per tutti i piani a pagamento. In caso di disservizi, il nostro team interviene entro 1 ora per i piani Business, entro 4 ore per i piani Pro e entro 24 ore per i piani Starter." },
      { question: "Posso migrare i miei contenuti da altre piattaforme?", answer: "Sì, offriamo strumenti di importazione per migrare contenuti da WordPress, Buffer, Hootsuite e altre piattaforme. Per migrazioni complesse, il team supporto Business offre assistenza dedicata." },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd faqs={allFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://contentempire.it" },
          { name: "FAQ", url: "https://contentempire.it/faq" },
        ]}
      />

      <section className="bg-gradient-to-br from-navy to-navy-light py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Domande Frequenti
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tutto quello che devi sapere su Content Empire. Non trovi la risposta?
            Contattaci e ti risponderemo entro 24 ore.
          </p>
        </div>
      </section>

      <section className="py-16 bg-grigio-bg">
        <div className="max-w-4xl mx-auto px-4">
          <FaqAccordion categories={faqCategories} />

          <div className="mt-16 text-center bg-white rounded-card shadow-soft p-8">
            <h2 className="text-2xl font-heading font-bold text-navy mb-3">
              Non hai trovato la risposta?
            </h2>
            <p className="text-grigio-text mb-6">
              Il nostro team è pronto ad aiutarti. Scrivici e ti risponderemo entro 24 ore.
            </p>
            <a
              href="mailto:supporto@contentempire.it"
              className="inline-flex items-center px-6 py-3 bg-viola text-white font-semibold rounded-button hover:bg-viola-dark transition-colors"
            >
              Contattaci
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
