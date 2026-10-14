import { CountUp, Rise, RevealHeading } from './motion.jsx';
import { STATS } from '../content.js';

export default function Stats() {
  return (
    <section className="band flush">
      <div className="head center stats-head">
        <RevealHeading className="h2" lines={['A rollout in numbers']} />
      </div>
      <div className="stats">
        {STATS.map((s, i) => (
          <Rise className="stat" key={s.label} delay={i * 90}>
            <CountUp to={s.value} suffix={s.suffix} /><span>{s.label}</span>
          </Rise>
        ))}
      </div>
    </section>
  );
}
