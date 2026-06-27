import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localeLabels, locales, type Locale } from "@dedsec/i18n";
import "../globals.css";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export const metadata: Metadata = {
  title: "DedSec",
  description:
    "Open source tool for mobile phone repair, maintenance, device identification, diagnostics, and optimization.",
  authors: [{ name: "Mauricio Vuljevas", url: "https://www.mvuljevas.com" }],
  metadataBase: new URL("https://www.mvuljevas.com"),
  openGraph: {
    title: "DedSec",
    description:
      "Open source desktop and web product for mobile phone repair and optimization.",
    url: "https://github.com/mvuljevas/DedSec",
    siteName: "DedSec",
    type: "website"
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <div className="page-shell">
          <header className="topbar" aria-label="DedSec">
            <div className="brand">
              <strong>DedSec</strong>
              <span>Mauricio Vuljevas</span>
            </div>
            <nav className="locale-switcher" aria-label="Language">
              {locales.map((item: Locale) => (
                <a
                  aria-current={item === locale ? "page" : undefined}
                  href={`/${item}`}
                  key={item}
                >
                  {localeLabels[item]}
                </a>
              ))}
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
