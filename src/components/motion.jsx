import { useEffect, useRef } from 'react';
import { useInView, prefersReducedMotion } from '../hooks/motion.js';

/**
 * Fades and lifts its child into place when it scrolls into view.
 * delay in ms, y = starting offset (reference values: buttons 20px, hero art 60px, nav -32px).
 */
export function Rise({ as: Tag = 'div', delay = 0, y, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`rise ${inView ? 'in' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}ms`, ...(y !== undefined ? { '--y': `${y}px` } : null), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Splits text into letters. `lines` is an array; each entry starts on a new line. */
function Letters({ lines }) {
  return lines.map((line, li) => (
    <span key={li}>
      {li > 0 && <br />}
      {line.split(' ').map((word, wi, arr) => (
        <span key={wi}>
          <span className="w" aria-hidden="true">
            {[...word].map((c, ci) => <span className="ch" key={ci}>{c}</span>)}
          </span>
          {wi < arr.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  ));
}

/**
 * Section heading whose letters darken as you scroll (as in the reference).
 * Starts when the heading is 85% down the viewport and is finished by 45%,
 * and always completes, even for headings near the bottom of the page.
 */
export function RevealHeading({ as: Tag = 'h2', lines, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = [...el.querySelectorAll('.ch')];
    if (prefersReducedMotion()) { chars.forEach((c) => c.classList.add('on')); return; }
    let last = -1, raf = 0;
    const paint = () => {
      raf = 0;
      const vh = window.innerHeight;
      const maxS = document.documentElement.scrollHeight - vh;
      const r = el.getBoundingClientRect();
      const topAtEnd = r.top + window.scrollY - maxS;
      const start = vh * 0.85;
      const end = Math.min(start - 40, Math.max(vh * 0.45, topAtEnd + 20));
      const p = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
      const n = Math.round(p * chars.length);
      if (n !== last) { chars.forEach((c, i) => c.classList.toggle('on', i < n)); last = n; }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(paint); };
    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <Tag ref={ref} className={className} aria-label={lines.join(' ')}>
      <Letters lines={lines} />
    </Tag>
  );
}

/** Hero headline: words rise out of a blur one after another on load. */
export function WordsIn({ text, as: Tag = 'h1', start = 120, step = 110 }) {
  return (
    <Tag aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i}>
          <span className="wd" aria-hidden="true" style={{ animationDelay: `${start + i * step}ms` }}>{w}</span>{' '}
        </span>
      ))}
    </Tag>
  );
}

/** Button/link whose label rolls up on hover (0.4s linear, as in the reference). */
export function RollButton({ variant = 'solid', href = '#cta', className = '', children, ...rest }) {
  return (
    <a className={`btn ${variant} ${className}`.trim()} href={href} {...rest}>
      {variant === 'play' && <i />}
      <span className="roll"><span>{children}</span><span aria-hidden="true">{children}</span></span>
    </a>
  );
}

/** Number that counts up once it is on screen. */
export function CountUp({ to, suffix = '' }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const out = useRef(null);
  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    const t0 = performance.now(), dur = 1400;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      if (out.current) out.current.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, suffix]);
  return <b ref={(el) => { ref.current = el; out.current = el; }}>{to}{suffix}</b>;
}
