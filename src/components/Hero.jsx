import hero from '../assets/art/hero.svg?raw';
import Art from './Art.jsx';
import { Rise, RollButton, WordsIn } from './motion.jsx';
import { HERO } from '../content.js';

// Entrance timings come from the reference site: buttons at 2.0s / 2.1s (+20px), artwork at 2.8s (+60px).
export default function Hero() {
  return (
    <section className="band hero">
      <WordsIn text={HERO.title} />
      <Rise as="p" className="lede" delay={1200}>{HERO.lede}</Rise>
      <div className="cta-row">
        <Rise as="span" delay={2000} y={20} style={{ display: 'inline-flex' }}><RollButton href="#cta">Book a demo</RollButton></Rise>
        <Rise as="span" delay={2100} y={20} style={{ display: 'inline-flex' }}><RollButton variant="play" href="#how">See how it works</RollButton></Rise>
      </div>
      <Rise className="hero-art" delay={2800} y={60}><Art svg={hero} /></Rise>
    </section>
  );
}
