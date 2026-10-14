import engine from '../assets/art/engine.svg?raw';
import Art from './Art.jsx';
import { Rise, RevealHeading } from './motion.jsx';
import { STEPS, AUTONOMY } from '../content.js';

export default function HowItWorks() {
  return (
    <section className="band flush" id="how">
      <div className="split split-pad">
        <div className="head">
          <RevealHeading className="h2" lines={['Your call', 'always']} />
          <Rise as="p" className="lede">You have never handed over the final say. Pulse will not ask you to. It works up to the line you draw.</Rise>
        </div>
        <Rise><Art className="art art-engine" svg={engine} /></Rise>
      </div>
      <div className="steps">
        {STEPS.map((s, i) => (
          <Rise className="step" key={s.title} delay={i * 90}>
            <span className="n">0{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p>
          </Rise>
        ))}
      </div>
      <div className="autonomy">
        <Rise className="auto-head">
          <h3>You decide how far Pulse goes</h3>
          <p>Your authority, your settings. Change them any time.</p>
        </Rise>
        {AUTONOMY.map((a, i) => (
          <Rise className="level" key={a.title} delay={i * 90}>
            <span className="meter" aria-hidden="true">{[1, 2, 3].map((n) => <i key={n} className={n <= a.level ? 'f' : ''} />)}</span>
            <h4>{a.title}</h4>
            <p>{a.text}</p>
          </Rise>
        ))}
      </div>
    </section>
  );
}
