import { useEffect, useRef } from 'react';
import brainsArt from '../assets/art/brains.svg?raw';
import Art from './Art.jsx';
import { Rise, RevealHeading } from './motion.jsx';
import { useCycle } from '../hooks/motion.js';
import { BRAINS } from '../content.js';

export default function Brains() {
  const { ref, active, select, running, run, ms, hover } = useCycle(BRAINS.length, 3200);
  const art = useRef(null);
  // light up the matching node and connector in the drawing
  useEffect(() => {
    art.current?.querySelectorAll('[data-k]').forEach((n) => n.classList.toggle('hot', +n.dataset.k === active));
  }, [active]);
  return (
    <section className="band" id="brains">
      <div className="head">
        <RevealHeading className="h2" lines={['Five leaders', 'one brief']} />
        <Rise as="p" className="lede">One specialist for every chair around your table. They weigh up the numbers and bring you one point of view. You get the answer, not the meeting.</Rise>
      </div>
      <Rise>
        <div className="brains" ref={ref} {...hover}>
          {BRAINS.map((b, i) => (
            <button key={b.name} className={`brain ${i === active ? 'on' : ''}`} onClick={() => select(i)}>
              <h3>{b.name}</h3><span className="role">{b.role}</span><p>{b.text}</p>
              <i key={i === active ? run : 'idle'} className={`bar ${i === active && running ? 'run' : ''}`} style={{ '--ms': `${ms}ms` }} />
            </button>
          ))}
        </div>
      </Rise>
      <Rise><Art ref={art} className="art art-brains" svg={brainsArt} /></Rise>
    </section>
  );
}
