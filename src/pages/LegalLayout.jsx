import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { DemoProvider } from '../context/demo.jsx';

/** Shared shell for the policy pages: same nav, frame and footer as the home page. */
export default function LegalLayout({ eyebrow, title, updated, intro, sections, children }) {
  return (
    <DemoProvider>
      <Nav base="/" />
      <main className="frame" id="top">
        <section className="band legal-hero">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {intro && <p className="lede">{intro}</p>}
          {updated && <p className="updated">Last updated {updated}</p>}
        </section>
        <section className="band doc">
          {sections && (
            <nav className="toc" aria-label="On this page">
              <p className="toc-h">On this page</p>
              <ol>{sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}</ol>
            </nav>
          )}
          <div className="doc-body">{children}</div>
        </section>
        <Footer base="/" />
      </main>
    </DemoProvider>
  );
}
