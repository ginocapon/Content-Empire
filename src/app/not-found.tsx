import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-grigio-bg">
      <div className="text-center px-4">
        <h1 className="text-8xl font-heading font-bold text-viola mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-navy mb-4">
          Pagina non trovata
        </h2>
        <p className="text-grigio-text mb-8 max-w-md mx-auto">
          La pagina che stai cercando non esiste o è stata spostata.
          Torna alla homepage per continuare la navigazione.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-viola text-white font-semibold rounded-button hover:bg-viola-dark transition-colors"
        >
          Torna alla Homepage
        </Link>
      </div>
    </div>
  );
}
