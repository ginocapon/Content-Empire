"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Eye,
  Upload,
  X,
  Image as ImageIcon,
  AlertCircle,
} from "lucide-react";

const categorieOptions = [
  "Marketing",
  "SEO",
  "Newsletter",
  "Tecnologia",
  "Social Media",
  "Copywriting",
  "Strategia",
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

interface FormErrors {
  titolo?: string;
  excerpt?: string;
  contenuto?: string;
  categoria?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export default function NuovoArticoloPage() {
  const [titolo, setTitolo] = useState("");
  const [slug, setSlug] = useState("");
  const [slugManual, setSlugManual] = useState(false);
  const [excerpt, setExcerpt] = useState("");
  const [contenuto, setContenuto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [immagine, setImmagine] = useState<string | null>(null);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [pubblicato, setPubblicato] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSaving, setIsSaving] = useState(false);

  const handleTitoloChange = (value: string) => {
    setTitolo(value);
    if (!slugManual) {
      setSlug(slugify(value));
    }
  };

  const handleSlugChange = (value: string) => {
    setSlugManual(true);
    setSlug(slugify(value));
  };

  const addTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
    if (e.key === "Backspace" && tagInput === "" && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!titolo.trim()) newErrors.titolo = "Il titolo e' obbligatorio";
    if (!excerpt.trim()) newErrors.excerpt = "L'estratto e' obbligatorio";
    if (!contenuto.trim()) newErrors.contenuto = "Il contenuto e' obbligatorio";
    if (!categoria) newErrors.categoria = "Seleziona una categoria";
    if (metaTitle.length > 60)
      newErrors.metaTitle = "Il meta title non deve superare i 60 caratteri";
    if (metaDescription.length > 160)
      newErrors.metaDescription =
        "La meta description non deve superare i 160 caratteri";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    setIsSaving(true);
    // Simulate save
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert(
      pubblicato
        ? "Articolo pubblicato con successo!"
        : "Bozza salvata con successo!"
    );
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/blog"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-grigio-border text-grigio-text transition-colors hover:border-viola hover:text-viola"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">
              Nuovo Articolo
            </h2>
            <p className="mt-0.5 text-sm text-grigio-text">
              Crea un nuovo articolo per il blog
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {}}
            className="inline-flex items-center gap-2 rounded-button border-2 border-grigio-border px-5 py-2.5 text-sm font-bold text-navy transition-all hover:border-viola hover:text-viola"
          >
            <Eye className="h-4 w-4" />
            Anteprima
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-button bg-viola px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-viola-dark hover:shadow-hover disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {isSaving ? "Salvataggio..." : "Salva"}
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Main content card */}
        <div className="rounded-card border border-grigio-border bg-white p-6 shadow-soft">
          <h3 className="mb-6 font-heading text-lg font-bold text-navy">
            Contenuto
          </h3>
          <div className="space-y-5">
            {/* Titolo */}
            <div>
              <label
                htmlFor="titolo"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Titolo *
              </label>
              <input
                id="titolo"
                type="text"
                value={titolo}
                onChange={(e) => handleTitoloChange(e.target.value)}
                placeholder="Inserisci il titolo dell'articolo"
                className={`w-full rounded-input border bg-white px-4 py-3 text-sm text-navy placeholder-grigio-text transition-colors focus:outline-none focus:ring-2 ${
                  errors.titolo
                    ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                    : "border-grigio-border focus:border-viola focus:ring-viola/20"
                }`}
              />
              {errors.titolo && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle className="h-3 w-3" />
                  {errors.titolo}
                </p>
              )}
            </div>

            {/* Slug */}
            <div>
              <label
                htmlFor="slug"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Slug
              </label>
              <div className="flex items-center gap-2">
                <span className="flex-shrink-0 text-xs text-grigio-text">
                  /blog/
                </span>
                <input
                  id="slug"
                  type="text"
                  value={slug}
                  onChange={(e) => handleSlugChange(e.target.value)}
                  placeholder="slug-articolo"
                  className="w-full rounded-input border border-grigio-border bg-grigio-bg px-4 py-2.5 text-sm text-navy placeholder-grigio-text transition-colors focus:border-viola focus:outline-none focus:ring-2 focus:ring-viola/20"
                />
              </div>
              <p className="mt-1 text-xs text-grigio-text">
                Generato automaticamente dal titolo. Modifica per personalizzare.
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label
                htmlFor="excerpt"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Estratto *
              </label>
              <textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Breve descrizione dell'articolo che apparira' nei risultati di ricerca e nelle anteprime"
                rows={3}
                className={`w-full resize-none rounded-input border bg-white px-4 py-3 text-sm text-navy placeholder-grigio-text transition-colors focus:outline-none focus:ring-2 ${
                  errors.excerpt
                    ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                    : "border-grigio-border focus:border-viola focus:ring-viola/20"
                }`}
              />
              {errors.excerpt && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle className="h-3 w-3" />
                  {errors.excerpt}
                </p>
              )}
            </div>

            {/* Contenuto */}
            <div>
              <label
                htmlFor="contenuto"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Contenuto *
              </label>
              <textarea
                id="contenuto"
                value={contenuto}
                onChange={(e) => setContenuto(e.target.value)}
                placeholder="Scrivi il contenuto del tuo articolo qui... (Editor completo in arrivo)"
                rows={12}
                className={`w-full resize-y rounded-input border bg-white px-4 py-3 font-mono text-sm text-navy placeholder-grigio-text transition-colors focus:outline-none focus:ring-2 ${
                  errors.contenuto
                    ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                    : "border-grigio-border focus:border-viola focus:ring-viola/20"
                }`}
              />
              <p className="mt-1 text-xs text-grigio-text">
                Supporto Markdown disponibile. Un editor visuale sar&agrave;
                disponibile prossimamente.
              </p>
              {errors.contenuto && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle className="h-3 w-3" />
                  {errors.contenuto}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Settings card */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Category & Tags */}
          <div className="rounded-card border border-grigio-border bg-white p-6 shadow-soft">
            <h3 className="mb-6 font-heading text-lg font-bold text-navy">
              Organizzazione
            </h3>
            <div className="space-y-5">
              {/* Categoria */}
              <div>
                <label
                  htmlFor="categoria"
                  className="mb-1.5 block text-sm font-semibold text-navy"
                >
                  Categoria *
                </label>
                <select
                  id="categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className={`w-full appearance-none rounded-input border bg-white px-4 py-3 text-sm text-navy transition-colors focus:outline-none focus:ring-2 ${
                    errors.categoria
                      ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                      : "border-grigio-border focus:border-viola focus:ring-viola/20"
                  }`}
                >
                  <option value="">Seleziona una categoria</option>
                  {categorieOptions.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.categoria && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" />
                    {errors.categoria}
                  </p>
                )}
              </div>

              {/* Tags */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-navy">
                  Tag
                </label>
                <div className="flex flex-wrap items-center gap-2 rounded-input border border-grigio-border bg-white p-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-viola/10 px-3 py-1 text-xs font-medium text-viola"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="rounded-full p-0.5 hover:bg-viola/20"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    placeholder={
                      tags.length === 0 ? "Aggiungi tag e premi Invio" : "Aggiungi..."
                    }
                    className="min-w-[120px] flex-1 border-none bg-transparent py-1 text-sm text-navy placeholder-grigio-text focus:outline-none"
                  />
                </div>
                <p className="mt-1 text-xs text-grigio-text">
                  Premi Invio per aggiungere un tag
                </p>
              </div>

              {/* Pubblicato toggle */}
              <div className="flex items-center justify-between rounded-lg border border-grigio-border bg-grigio-bg/50 p-4">
                <div>
                  <p className="text-sm font-semibold text-navy">
                    Stato pubblicazione
                  </p>
                  <p className="text-xs text-grigio-text">
                    {pubblicato
                      ? "L'articolo sara' visibile pubblicamente"
                      : "L'articolo sara' salvato come bozza"}
                  </p>
                </div>
                <button
                  onClick={() => setPubblicato(!pubblicato)}
                  className={`relative inline-flex h-7 w-12 flex-shrink-0 items-center rounded-full transition-colors duration-200 ${
                    pubblicato ? "bg-verde" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                      pubblicato ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <p className="text-center text-sm font-semibold">
                {pubblicato ? (
                  <span className="text-verde">Pubblicato</span>
                ) : (
                  <span className="text-arancione">Bozza</span>
                )}
              </p>
            </div>
          </div>

          {/* Image & SEO */}
          <div className="space-y-6">
            {/* Cover image */}
            <div className="rounded-card border border-grigio-border bg-white p-6 shadow-soft">
              <h3 className="mb-4 font-heading text-lg font-bold text-navy">
                Immagine di Copertina
              </h3>
              <div
                className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-grigio-border bg-grigio-bg/50 p-8 transition-colors hover:border-viola/50"
              >
                {immagine ? (
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-12 w-12 text-verde" />
                    <p className="mt-2 text-sm font-medium text-navy">
                      {immagine}
                    </p>
                    <button
                      onClick={() => setImmagine(null)}
                      className="mt-2 text-xs font-medium text-red-500 hover:underline"
                    >
                      Rimuovi immagine
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto h-10 w-10 text-grigio-text" />
                    <p className="mt-2 text-sm font-medium text-navy">
                      Trascina un&apos;immagine qui
                    </p>
                    <p className="mt-1 text-xs text-grigio-text">
                      oppure{" "}
                      <button
                        onClick={() => setImmagine("copertina-articolo.jpg")}
                        className="font-medium text-viola hover:underline"
                      >
                        seleziona dal computer
                      </button>
                    </p>
                    <p className="mt-2 text-xs text-grigio-text">
                      PNG, JPG, WebP fino a 5MB
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* SEO */}
            <div className="rounded-card border border-grigio-border bg-white p-6 shadow-soft">
              <h3 className="mb-4 font-heading text-lg font-bold text-navy">
                SEO
              </h3>
              <div className="space-y-4">
                {/* Meta Title */}
                <div>
                  <label
                    htmlFor="metaTitle"
                    className="mb-1.5 block text-sm font-semibold text-navy"
                  >
                    Meta Title
                  </label>
                  <input
                    id="metaTitle"
                    type="text"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    placeholder="Titolo per i motori di ricerca"
                    className={`w-full rounded-input border bg-white px-4 py-2.5 text-sm text-navy placeholder-grigio-text transition-colors focus:outline-none focus:ring-2 ${
                      errors.metaTitle
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                        : "border-grigio-border focus:border-viola focus:ring-viola/20"
                    }`}
                  />
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs text-grigio-text">
                      Consigliato: massimo 60 caratteri
                    </p>
                    <span
                      className={`text-xs ${
                        metaTitle.length > 60
                          ? "font-semibold text-red-500"
                          : "text-grigio-text"
                      }`}
                    >
                      {metaTitle.length}/60
                    </span>
                  </div>
                  {errors.metaTitle && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" />
                      {errors.metaTitle}
                    </p>
                  )}
                </div>

                {/* Meta Description */}
                <div>
                  <label
                    htmlFor="metaDescription"
                    className="mb-1.5 block text-sm font-semibold text-navy"
                  >
                    Meta Description
                  </label>
                  <textarea
                    id="metaDescription"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    placeholder="Descrizione per i motori di ricerca"
                    rows={3}
                    className={`w-full resize-none rounded-input border bg-white px-4 py-2.5 text-sm text-navy placeholder-grigio-text transition-colors focus:outline-none focus:ring-2 ${
                      errors.metaDescription
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                        : "border-grigio-border focus:border-viola focus:ring-viola/20"
                    }`}
                  />
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs text-grigio-text">
                      Consigliato: massimo 160 caratteri
                    </p>
                    <span
                      className={`text-xs ${
                        metaDescription.length > 160
                          ? "font-semibold text-red-500"
                          : "text-grigio-text"
                      }`}
                    >
                      {metaDescription.length}/160
                    </span>
                  </div>
                  {errors.metaDescription && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle className="h-3 w-3" />
                      {errors.metaDescription}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
