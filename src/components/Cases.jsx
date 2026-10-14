import unify from '../assets/art/case-unify.svg?raw';
import forecast from '../assets/art/case-forecast.svg?raw';
import decide from '../assets/art/case-decide.svg?raw';
import Art from './Art.jsx';
import { Rise, RevealHeading } from './motion.jsx';
import { CASES } from '../content.js';

const ART = [unify, forecast, decide];

export default function Cases() {
  return (
    <section className="band" id="cases">
      <div className="head center">
        <Rise as="p" className="eyebrow">What it does</Rise>
        <RevealHeading className="h2" lines={['Three things a dashboard never could']} />
        <Rise as="p" className="lede">Every chart you own can tell you what happened. These are the parts that change what you do on a Tuesday morning.</Rise>
      </div>
      <div className="cases">
        {CASES.map((c, i) => (
          <Rise as="article" className="case" key={c.tag} delay={i * 90}>
            <Art className="pic" svg={ART[i]} />
            <div className="txt"><span className="tag">{c.tag}</span><h3>{c.title}</h3><p>{c.text}</p></div>
          </Rise>
        ))}
      </div>
    </section>
  );
}
