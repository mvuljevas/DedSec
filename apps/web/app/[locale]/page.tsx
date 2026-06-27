import { getMessages, resolveLocale } from "@dedsec/i18n";
import { product, serviceAreas } from "@dedsec/domain";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleHome({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const messages = getMessages(locale);

  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">{messages.web.eyebrow}</p>
          <h1>{messages.web.headline}</h1>
          <p className="intro">{messages.web.intro}</p>
          <div className="actions" aria-label="Primary links">
            <a className="action primary" href="https://github.com/mvuljevas/DedSec">
              GitHub
            </a>
            <a className="action secondary" href="https://www.mvuljevas.com">
              {messages.web.docsCta}
            </a>
          </div>
        </div>
        <aside className="terminal" aria-label="DedSec status">
          <div className="terminal-header">
            <span className="dot" />
            <strong>{product.name}</strong>
          </div>
          <div className="terminal-body">
            <div className="metric">
              <span>Author</span>
              <span>{product.author}</span>
            </div>
            <div className="metric">
              <span>Desktop</span>
              <span>Windows · macOS · Linux</span>
            </div>
            <div className="metric">
              <span>Downloads</span>
              <span>{messages.web.downloadCta}</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="feature-band" aria-label="Product areas">
        {serviceAreas.slice(0, 3).map((area) => (
          <article className="feature" key={area.id}>
            <h2>{area.label}</h2>
            <p>{area.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
