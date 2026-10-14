import engine from '../assets/art/engine.svg?raw';
import Art from './Art.jsx';
import { Rise, RevealHeading } from './motion.jsx';
import { STEPS } from '../content.js';

export default function HowItWorks() {
  return (
    <section className="band flush" id="how">
      <div className="split split-pad">
        <div className="head">
          <RevealHeading className="h2" lines={['Four steps', 'no project plan']} />
          <Rise as="p" className="lede">Point Pulse at your systems and it does the rest. It maps the fields, squares the currencies and watches every day after that.</Rise>
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
    </section>
  );
}
