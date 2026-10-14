import { SOURCES } from '../content.js';

export default function Marquee({ label, reverse = false }) {
  const items = [...SOURCES, ...SOURCES];
  return (
    <>
      {label && <p className="eyebrow">{label}</p>}
      <div className="marq-mask">
        <div className="marq-track" style={reverse ? { animationDirection: 'reverse' } : undefined}>
          {items.map((s, i) => (
            <span className="logo" key={i} aria-hidden={i >= SOURCES.length}><i />{s}</span>
          ))}
        </div>
      </div>
    </>
  );
}
