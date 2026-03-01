import { createMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Termini di Servizio - Condizioni d'Uso",
  description:
    "Termini e condizioni d'uso della piattaforma Content Empire. Leggi attentamente prima di utilizzare il servizio.",
  path: "/termini",
});

export default function TerminiPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://contentempire.it" },
          {
            name: "Termini di Servizio",
            url: "https://contentempire.it/termini",
          },
        ]}
      />

      <section className="bg-gradient-to-br from-navy to-navy-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-2">
            Termini di Servizio
          </h1>
          <p className="text-gray-300">Ultimo aggiornamento: 1 Marzo 2026</p>
        </div>
      </section>

      <section className="py-12 bg-grigio-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-card shadow-soft p-8 md:p-12 prose prose-lg max-w-none">
            <p className="text-navy/80">
              I presenti Termini di Servizio (di seguito
              &ldquo;Termini&rdquo;) regolano l&apos;accesso e l&apos;utilizzo
              della piattaforma Content Empire, accessibile all&apos;indirizzo{" "}
              <a href="https://contentempire.it" className="text-viola">
                contentempire.it
              </a>{" "}
              e tramite le relative applicazioni. L&apos;utilizzo del Servizio
              implica l&apos;accettazione integrale dei presenti Termini.
            </p>

            {/* 1. Definizioni */}
            <h2 className="text-2xl font-heading font-bold text-navy mt-10">
              1. Definizioni
            </h2>
            <ul className="text-navy/80">
              <li>
                <strong>&ldquo;Piattaforma&rdquo;:</strong> l&apos;insieme del
                sito web, delle applicazioni e dei servizi forniti da Content
                Empire.
              </li>
              <li>
                <strong>&ldquo;Utente&rdquo;:</strong> qualsiasi persona
                fisica o giuridica che accede o utilizza la Piattaforma.
              </li>
              <li>
                <strong>&ldquo;Account&rdquo;:</strong> il profilo personale
                creato dall&apos;Utente per accedere alle funzionalit&agrave;
                della Piattaforma.
              </li>
              <li>
                <strong>&ldquo;Contenuti Generati&rdquo;:</strong> testi,
                immagini, video e altri materiali creati tramite gli strumenti
                AI della Piattaforma.
              </li>
              <li>
                <strong>&ldquo;Contenuti Utente&rdquo;:</strong> materiali
                caricati dall&apos;Utente sulla Piattaforma (testi, immagini,
                video, dati).
              </li>
              <li>
                <strong>&ldquo;Marketplace&rdquo;:</strong> la sezione della
                Piattaforma dedicata alla compravendita di template, contenuti
                e risorse digitali tra Utenti.
              </li>
              <li>
                <strong>&ldquo;Piano&rdquo;:</strong> l&apos;offerta
                tariffaria scelta dall&apos;Utente (Free, Starter, Pro o
                Business).
              </li>
            </ul>

            {/* 2. Oggetto del servizio */}
            <h2 className="text-2xl font-heading font-bold text-navy mt-10">
              2. Oggetto del Servizio
            </h2>
            <p className="text-navy/80">
              Content Empire fornisce una piattaforma SaaS (Software as a
              Service) basata sull&apos;intelligenza artificiale per la
              creazione, gestione, programmazione e pubblicazione di contenuti
              digitali su molteplici canali social e piattaforme online. Il
              Servizio include, a seconda del Piano sottoscritto:
            </p>
            <ul className="text-navy/80">
              <li>
                Generazione di contenuti tramite intelligenza artificiale
                (testi, immagini, script)
              </li>
              <li>
                Calendario editoriale e programmazione automatica delle
                pubblicazioni
              </li>
              <li>
                Collegamento e gestione di account social (Instagram, TikTok,
                LinkedIn, YouTube, ecc.)
              </li>
              <li>
                Dashboard di analytics con metriche di performance unificate
              </li>
              <li>
                Accesso al Marketplace per la compravendita di template e
                risorse digitali
              </li>
              <li>
                Strumenti di collaborazione per team e agenzie
              </li>
            </ul>
            <p className="text-navy/80">
              Content Empire si riserva il diritto di modificare, aggiungere o
              rimuovere funzionalit&agrave; del Servizio in qualsiasi momento,
              dandone comunicazione agli Utenti con un preavviso ragionevole.
            </p>

            {/* 3. Registrazione */}
            <h2 className="text-2xl font-heading font-bold text-navy mt-10">
              3. Registrazione e Account
            </h2>
            <p className="text-navy/80">
              Per utilizzare le funzionalit&agrave; della Piattaforma &egrave;
              necessario creare un Account. Al momento della registrazione,
              l&apos;Utente si impegna a:
            </p>
            <ul className="text-navy/80">
              <li>
                Fornire informazioni veritiere, accurate e aggiornate
              </li>
              <li>
                Mantenere riservate le proprie credenziali di accesso (email e
                password)
              </li>
              <li>
                Notificare immediatamente Content Empire in caso di accesso non
                autorizzato al proprio Account
              </li>
              <li>
                Non creare pi&ugrave; di un Account per persona fisica o
                giuridica, salvo diversa autorizzazione
              </li>
              <li>
                Non condividere le proprie credenziali con terzi
              </li>
              <li>
                Non registrarsi con dati falsi o appartenenti a terzi
              </li>
            </ul>
            <p className="text-navy/80">
              L&apos;Utente &egrave; l&apos;unico responsabile di tutte le
              attivit&agrave; svolte tramite il proprio Account. Content Empire
              si riserva il diritto di sospendere o eliminare Account che
              violino i presenti Termini. L&apos;accesso alla Piattaforma
              &egrave; riservato a persone fisiche di et&agrave; non inferiore
              ai 16 anni.
            </p>

            {/* 4. Piani e pagamenti */}
            <h2 className="text-2xl font-heading font-bold text-navy mt-10">
              4. Piani e Pagamenti
            </h2>
            <h3 className="text-xl font-heading font-semibold text-navy mt-6">
              4.1 Piani tariffari
            </h3>
            <p className="text-navy/80">
              Il Servizio &egrave; disponibile in diversi piani tariffari
              (Free, Starter a &euro;9,90/mese, Pro a &euro;19,90/mese,
              Business a &euro;49,90/mese). I prezzi sono espressi in Euro
              (EUR) e si intendono IVA esclusa dove applicabile. I dettagli
              completi di ciascun Piano sono disponibili nella pagina{" "}
              <a href="/prezzi" className="text-viola">
                Prezzi
              </a>
              .
            </p>
            <h3 className="text-xl font-heading font-semibold text-navy mt-6">
              4.2 Fatturazione e rinnovo
            </h3>
            <p className="text-navy/80">
              I Piani a pagamento vengono fatturati con cadenza mensile o
              annuale, a seconda della scelta dell&apos;Utente.
              L&apos;abbonamento si rinnova automaticamente alla scadenza del
              periodo scelto. L&apos;addebito avviene automaticamente alla
              data di rinnovo tramite il metodo di pagamento indicato
              dall&apos;Utente.
            </p>
            <h3 className="text-xl font-heading font-semibold text-navy mt-6">
              4.3 Metodi di pagamento
            </h3>
            <p className="text-navy/80">
              Accettiamo carte di credito e debito (Visa, Mastercard, American
              Express), PayPal e bonifico bancario SEPA per i piani annuali.
              L&apos;elaborazione dei pagamenti &egrave; gestita da Stripe
              Inc. in modo sicuro e conforme agli standard PCI-DSS.
            </p>
            <h3 className="text-xl font-heading font-semibold text-navy mt-6">
              4.4 Variazioni di prezzo
            </h3>
            <p className="text-navy/80">
              Content Empire si riserva il diritto di modificare i prezzi dei
              Piani con un preavviso di almeno 30 giorni. Le variazioni di
              prezzo non si applicano al periodo di fatturazione in corso.
              L&apos;Utente pu&ograve; modificare o cancellare il proprio
              Piano in qualsiasi momento.
            </p>

            {/* 5. Proprietà intellettuale */}
            <h2 className="text-2xl font-heading font-bold text-navy mt-10">
              5. Propriet&agrave; Intellettuale
            </h2>
            <h3 className="text-xl font-heading font-semibold text-navy mt-6">
              5.1 Propriet&agrave; di Content Empire
            </h3>
            <p className="text-navy/80">
              La Piattaforma, il codice sorgente, il design, i marchi, i
              loghi e la documentazione sono di propriet&agrave; esclusiva di
              Content Empire S.r.l. e sono protetti dalle leggi sulla
              propriet&agrave; intellettuale italiane, europee e
              internazionali. L&apos;Utente non acquisisce alcun diritto di
              propriet&agrave; sulla Piattaforma.
            </p>
            <h3 className="text-xl font-heading font-semibold text-navy mt-6">
              5.2 Contenuti dell&apos;Utente
            </h3>
            <p className="text-navy/80">
              L&apos;Utente mantiene tutti i diritti sui Contenuti Utente
              caricati sulla Piattaforma. Caricando contenuti, l&apos;Utente
              concede a Content Empire una licenza non esclusiva, mondiale e
              gratuita per ospitare, memorizzare e elaborare tali contenuti
              al solo fine di erogare il Servizio.
            </p>
            <h3 className="text-xl font-heading font-semibold text-navy mt-6">
              5.3 Contenuti Generati dall&apos;AI
            </h3>
            <p className="text-navy/80">
              I contenuti generati dall&apos;Utente tramite gli strumenti AI
              della Piattaforma sono di propriet&agrave; dell&apos;Utente
              stesso. Content Empire non rivendica alcun diritto sui contenuti
              generati. L&apos;Utente &egrave; responsabile dell&apos;utilizzo
              di tali contenuti e deve verificarne la conformit&agrave; alle
              leggi applicabili prima della pubblicazione.
            </p>

            {/* 6. Limitazioni */}
            <h2 className="text-2xl font-heading font-bold text-navy mt-10">
              6. Limitazioni e Divieti di Utilizzo
            </h2>
            <p className="text-navy/80">
              L&apos;Utente si impegna a non utilizzare la Piattaforma per:
            </p>
            <ul className="text-navy/80">
              <li>
                Generare, pubblicare o distribuire contenuti illegali,
                diffamatori, osceni, violenti o che violino i diritti di terzi
              </li>
              <li>
                Attivit&agrave; di spam, phishing o qualsiasi altra
                attivit&agrave; fraudolenta
              </li>
              <li>
                Tentare di accedere in modo non autorizzato alla Piattaforma,
                ai server o alle reti connesse
              </li>
              <li>
                Effettuare reverse engineering, decompilare o disassemblare
                il software della Piattaforma
              </li>
              <li>
                Rivendere, sublicenziare o distribuire il Servizio a terzi
                senza autorizzazione scritta
              </li>
              <li>
                Utilizzare bot, scraper o altri strumenti automatizzati per
                accedere alla Piattaforma in modo massivo
              </li>
              <li>
                Generare contenuti che violino diritti d&apos;autore, marchi
                registrati o altri diritti di propriet&agrave; intellettuale
              </li>
            </ul>
            <p className="text-navy/80">
              Content Empire non &egrave; responsabile per
              l&apos;accuratezza dei contenuti generati dall&apos;AI, per
              eventuali perdite di dati dovute a cause di forza maggiore o
              per l&apos;uso improprio della Piattaforma da parte
              dell&apos;Utente. La responsabilit&agrave; complessiva di
              Content Empire non potr&agrave; in ogni caso superare
              l&apos;importo totale pagato dall&apos;Utente nei 12 mesi
              precedenti l&apos;evento.
            </p>

            {/* 7. Recesso */}
            <h2 className="text-2xl font-heading font-bold text-navy mt-10">
              7. Recesso e Cancellazione
            </h2>
            <h3 className="text-xl font-heading font-semibold text-navy mt-6">
              7.1 Recesso dell&apos;Utente
            </h3>
            <p className="text-navy/80">
              L&apos;Utente pu&ograve; recedere dal contratto e cancellare il
              proprio Account in qualsiasi momento dalle Impostazioni
              dell&apos;Account. La cancellazione avr&agrave; effetto alla
              fine del periodo di fatturazione corrente.
            </p>
            <h3 className="text-xl font-heading font-semibold text-navy mt-6">
              7.2 Diritto di recesso (consumatori)
            </h3>
            <p className="text-navy/80">
              Ai sensi degli artt. 52 e seguenti del D.Lgs. 206/2005
              (Codice del Consumo), l&apos;Utente consumatore ha diritto di
              recedere entro 14 giorni dall&apos;attivazione di un piano a
              pagamento. In caso di recesso entro tale termine, &egrave;
              previsto il rimborso completo. Per esercitare il diritto,
              contattare{" "}
              <a
                href="mailto:supporto@contentempire.it"
                className="text-viola"
              >
                supporto@contentempire.it
              </a>
              .
            </p>
            <h3 className="text-xl font-heading font-semibold text-navy mt-6">
              7.3 Effetti della cessazione
            </h3>
            <p className="text-navy/80">
              Dopo la cancellazione, l&apos;Utente avr&agrave; 30 giorni per
              esportare i propri dati e contenuti. Trascorso tale termine, i
              dati saranno eliminati definitivamente, salvo obblighi di
              conservazione previsti dalla legge. Content Empire si riserva
              il diritto di sospendere o terminare Account che violino i
              presenti Termini, senza preavviso e senza diritto a rimborso.
            </p>

            {/* 8. Legge applicabile */}
            <h2 className="text-2xl font-heading font-bold text-navy mt-10">
              8. Legge Applicabile e Foro Competente
            </h2>
            <p className="text-navy/80">
              I presenti Termini sono regolati dalla legge italiana. Per
              qualsiasi controversia derivante dall&apos;interpretazione o
              esecuzione dei presenti Termini, sar&agrave; competente in via
              esclusiva il Foro di Milano, fatto salvo il foro del
              consumatore ai sensi dell&apos;art. 33, comma 2, lett. u) del
              D.Lgs. 206/2005.
            </p>
            <p className="text-navy/80">
              L&apos;Utente consumatore residente nell&apos;UE pu&ograve;
              inoltre ricorrere alla piattaforma di risoluzione delle
              controversie online (ODR) della Commissione Europea, accessibile
              all&apos;indirizzo{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-viola"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>

            {/* 9. Contatti */}
            <h2 className="text-2xl font-heading font-bold text-navy mt-10">
              9. Contatti
            </h2>
            <p className="text-navy/80">
              Per qualsiasi domanda relativa ai presenti Termini di Servizio,
              contattaci ai seguenti recapiti:
            </p>
            <ul className="text-navy/80">
              <li>
                <strong>Content Empire S.r.l.</strong>
              </li>
              <li>
                Via dell&apos;Innovazione 42, 20121 Milano (MI), Italia
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:legale@contentempire.it"
                  className="text-viola"
                >
                  legale@contentempire.it
                </a>
              </li>
              <li>PEC: contentempire@pec.it</li>
              <li>P.IVA: IT12345678901</li>
            </ul>

            <hr className="border-grigio-border my-10" />

            <p className="text-navy/80 text-sm">
              I presenti Termini possono essere aggiornati periodicamente. Le
              modifiche sostanziali saranno comunicate agli Utenti via email o
              tramite avviso sulla Piattaforma con un preavviso di almeno 15
              giorni. L&apos;utilizzo continuato del Servizio dopo la notifica
              delle modifiche costituisce accettazione dei nuovi Termini.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
