import { useState } from 'react';
import { Rise, RevealHeading } from './motion.jsx';
import { FAQ } from '../content.js';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="band" id="faq">
      <div className="head center">
        <RevealHeading className="h2" lines={['Your questions answered']} />
      </div>
      <Rise className="faq">
        {FAQ.map((f, i) => (
          <div key={f.q} className={`q ${open === i ? 'open' : ''}`}>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <h3>{f.q}</h3><span className="pm" />
            </button>
            <div className="a"><p>{f.a}</p></div>
          </div>
        ))}
      </Rise>
    </section>
  );
}
