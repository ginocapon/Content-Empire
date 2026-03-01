"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg("Inserisci un indirizzo email valido");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setName("");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Errore durante l'iscrizione");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Errore di connessione. Riprova più tardi.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-card shadow-soft p-8 text-center">
        <CheckCircle size={48} className="text-verde mx-auto mb-4" />
        <h3 className="text-xl font-heading font-bold text-navy mb-2">
          Iscrizione confermata!
        </h3>
        <p className="text-grigio-text">
          Grazie per esserti iscritto alla newsletter di Content Empire.
          Riceverai la prossima email nella tua casella di posta.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-card shadow-soft p-8">
      <h3 className="text-xl font-heading font-bold text-navy mb-6">
        Iscriviti ora — è gratuito
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
            Nome <span className="text-grigio-text">(opzionale)</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Il tuo nome"
            className="w-full px-4 py-3 rounded-input border border-grigio-border focus:border-viola focus:ring-2 focus:ring-viola/20 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
            placeholder="la-tua@email.com"
            required
            className="w-full px-4 py-3 rounded-input border border-grigio-border focus:border-viola focus:ring-2 focus:ring-viola/20 outline-none transition-all"
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <AlertCircle size={16} />
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-viola text-white font-semibold rounded-button hover:bg-viola-dark transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          {status === "loading" ? (
            "Iscrizione in corso..."
          ) : (
            <>
              <Send size={18} />
              Iscriviti alla Newsletter
            </>
          )}
        </button>
      </form>

      <p className="mt-4 text-xs text-grigio-text text-center">
        Iscrivendoti accetti la nostra{" "}
        <Link href="/privacy" className="text-viola hover:underline">
          Privacy Policy
        </Link>
        . Puoi disiscriverti in qualsiasi momento.
      </p>
    </div>
  );
}
