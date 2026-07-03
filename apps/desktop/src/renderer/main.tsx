import React from "react";
import { createRoot } from "react-dom/client";
import { getMessages } from "@dedsec/i18n";
import { product, serviceAreas } from "@dedsec/domain";
import "./styles.css";

const messages = getMessages("es");

function App() {
  const openRepository = () => {
    void window.dedsec.shell.openExternal(product.repositoryUri);
  };

  return (
    <main className="desktop-shell">
      <section className="intro-panel">
        <p className="eyebrow">{messages.desktop.status}</p>
        <h1>{messages.desktop.title}</h1>
        <p>{messages.desktop.description}</p>
        <button onClick={openRepository} type="button">
          {messages.desktop.openRepository}
        </button>
      </section>

      <section className="boundary-panel">
        <h2>{messages.desktop.safetyTitle}</h2>
        <p>{messages.desktop.boundary}</p>
      </section>

      <section className="service-grid" aria-label="DedSec modules">
        {serviceAreas.map((area) => (
          <article key={area.id}>
            <span>{area.id}</span>
            <h3>{area.label}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
