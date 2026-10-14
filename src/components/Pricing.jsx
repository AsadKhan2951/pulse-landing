import { Rise, RevealHeading, RollButton } from './motion.jsx';
import { PLANS } from '../content.js';

export default function Pricing() {
  return (
    <section className="band" id="pricing">
      <div className="head center">
        <RevealHeading className="h2" lines={['Simple pricing per business']} />
        <Rise as="p" className="lede">Not per seat, per query or per dashboard. One price for the whole business brain, and you can cancel whenever you like.</Rise>
      </div>
      <div className="plans">
        {PLANS.map((p, i) => (
          <Rise className={`plan ${p.featured ? 'feat' : ''}`} key={p.name} delay={i * 90}>
            <span className="name">{p.name}{p.featured && <span className="badge">Most chosen</span>}</span>
            <p className="for">{p.for}</p>
            <div className="amt"><b>{p.price}</b><span>/ month</span></div>
            <RollButton variant={p.featured ? 'solid' : 'line'} className="wide">{p.cta}</RollButton>
            <h4>What's included:</h4>
            <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </Rise>
        ))}
      </div>
      <Rise as="p" className="plan-note">Both plans are encrypted end to end, and your data is never used to train any model.</Rise>
    </section>
  );
}
