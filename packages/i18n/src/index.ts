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
        "Herramienta open source para reparación, diagnóstico, optimización de recursos, limpieza segura y mantenimiento de computadoras."
    },
    web: {
      eyebrow: "Open source · Desktop · Optimización PC",
      headline: "Reparación y optimización de computadoras, hecha simple.",
      intro:
        "DedSec prepara una app desktop multiplataforma para reparación, diagnóstico, optimización de recursos, monitoreo seguro de instaladores y limpieza de remanentes.",
      downloadCta: "Descargas en preparación",
      docsCta: "Documentación",
      author: "Creado por Mauricio Vuljevas"
    },
    desktop: {
      title: "DedSec Desktop",
      status: "Base desktop inicial",
      description:
        "Shell seguro para la futura herramienta de reparación, diagnóstico, optimización de recursos y mantenimiento de computadoras.",
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
        "Open source tool for PC repair, diagnostics, resource optimization, safe cleanup, and system maintenance."
    },
    web: {
      eyebrow: "Open source · Desktop · PC optimization",
      headline: "PC repair and optimization, made simple.",
      intro:
        "DedSec is preparing a cross-platform desktop app for PC repair, diagnostics, resource optimization, secure installer monitoring, and remnant cleanup.",
      downloadCta: "Downloads in preparation",
      docsCta: "Documentation",
      author: "Created by Mauricio Vuljevas"
    },
    desktop: {
      title: "DedSec Desktop",
      status: "Initial desktop foundation",
      description:
        "Secure shell for the future PC repair, diagnostics, resource optimization, and system maintenance tool.",
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
