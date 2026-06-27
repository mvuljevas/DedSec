export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";
export const fallbackLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  es: "Español",
  en: "English"
};

const messages = {
  es: {
    product: {
      name: "DedSec",
      description:
        "Herramienta open source para reparación, mantenimiento, identificación, diagnóstico y optimización de celulares."
    },
    web: {
      eyebrow: "Open source · Desktop · Reparación móvil",
      headline: "Reparación y optimización de celulares, hecha simple.",
      intro:
        "DedSec prepara una app desktop multiplataforma para tareas reales de reparación, mantenimiento, identificación de dispositivos, diagnóstico y optimización.",
      downloadCta: "Descargas en preparación",
      docsCta: "Documentación",
      author: "Creado por Mauricio Vuljevas"
    },
    desktop: {
      title: "DedSec Desktop",
      status: "Base desktop inicial",
      description:
        "Shell seguro para la futura herramienta de reparación, mantenimiento, identificación, diagnóstico y optimización de celulares.",
      boundary:
        "Las acciones de sistema vivirán en el proceso principal de Electron y requerirán consentimiento explícito.",
      openRepository: "Abrir repositorio",
      safetyTitle: "Límite seguro"
    }
  },
  en: {
    product: {
      name: "DedSec",
      description:
        "Open source tool for mobile phone repair, maintenance, identification, diagnostics, and optimization."
    },
    web: {
      eyebrow: "Open source · Desktop · Mobile repair",
      headline: "Mobile phone repair and optimization, made simple.",
      intro:
        "DedSec is preparing a cross-platform desktop app for real repair tasks, maintenance, device identification, diagnostics, and optimization.",
      downloadCta: "Downloads in preparation",
      docsCta: "Documentation",
      author: "Created by Mauricio Vuljevas"
    },
    desktop: {
      title: "DedSec Desktop",
      status: "Initial desktop foundation",
      description:
        "Secure shell for the future mobile phone repair, maintenance, identification, diagnostics, and optimization tool.",
      boundary:
        "System actions will live in Electron's main process and require explicit consent.",
      openRepository: "Open repository",
      safetyTitle: "Safe boundary"
    }
  }
} as const;

export type Messages = (typeof messages)[Locale];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveLocale(value: string | undefined): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages[fallbackLocale];
}
