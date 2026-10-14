import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** True once (or while, if once=false) the element is on screen. */
export function useInView({ rootMargin = '0px 0px -8% 0px', threshold = 0, once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        if (once) io.disconnect();
      } else if (!once) setInView(false);
    }, { rootMargin, threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, threshold, once]);
  return [ref, inView];
}

/** Steps through `count` items every `ms`, only while visible and not hovered. */
export function useCycle(count, ms) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ref, visible] = useInView({ threshold: 0.3, once: false, rootMargin: '0px' });
  const [run, setRun] = useState(0); // bumps to restart the progress bar
  const calm = prefersReducedMotion();
  useEffect(() => {
    if (!visible || paused || calm) return;
    const t = setTimeout(() => { setActive((a) => (a + 1) % count); setRun((r) => r + 1); }, ms);
    return () => clearTimeout(t);
  }, [active, visible, paused, count, ms, calm, run]);
  const select = (i) => { setActive(i); setRun((r) => r + 1); };
  const running = visible && !paused && !calm;
  const hover = { onMouseEnter: () => setPaused(true), onMouseLeave: () => { setPaused(false); setRun((r) => r + 1); } };
  return { ref, active, select, running, run, ms, hover };
}
