import s1 from '../assets/art/security-1.svg?raw';
import s2 from '../assets/art/security-2.svg?raw';
import s3 from '../assets/art/security-3.svg?raw';
import s4 from '../assets/art/security-4.svg?raw';
import s5 from '../assets/art/security-5.svg?raw';
import { Rise, RevealHeading } from './motion.jsx';
import { useCycle } from '../hooks/motion.js';
import { SECURITY } from '../content.js';

const ART = [s1, s2, s3, s4, s5];

// One drawing per point; the drawing swaps with the active item.
export default function Security() {
  const { ref, active, select, running, run, ms, hover } = useCycle(SECURITY.length, 5200);
  return (
    <section className="band" id="security">
      <div className="head">
        <RevealHeading className="h2" lines={['Your numbers stay yours']} />
        <Rise as="p" className="lede">What reaches your desk stays in the room. Encrypted, never used to train models, deleted when you say.</Rise>
      </div>
      <div className="split">
        <Rise>
          <div className="acc" ref={ref} {...hover}>
            {SECURITY.map((s, i) => (
              <div key={s.title} className={`acc-item ${i === active ? 'on' : ''}`}>
                <button aria-expanded={i === active} onClick={() => select(i)}><h3>{s.title}</h3></button>
                <div className="acc-body"><p>{s.text}</p></div>
                <i key={i === active ? run : 'idle'} className={`bar ${i === active && running ? 'run' : ''}`} style={{ '--ms': `${ms}ms` }} />
              </div>
            ))}
          </div>
        </Rise>
        <Rise className="vault">
          <div className="sec-art">
            {ART.map((svg, i) => (
              <div key={i} className={`sec-frame ${i === active ? 'on' : ''}`} dangerouslySetInnerHTML={{ __html: svg }} />
            ))}
          </div>
          <span className="vault-tag">{SECURITY[active].tag}</span>
        </Rise>
      </div>
    </section>
  );
}
