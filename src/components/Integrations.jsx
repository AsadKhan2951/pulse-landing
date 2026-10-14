import integ from '../assets/art/integrations.svg?raw';
import Art from './Art.jsx';
import Marquee from './Marquee.jsx';
import { Rise, RevealHeading } from './motion.jsx';

export default function Integrations() {
  return (
    <section className="band" id="connect">
      <div className="head center">
        <Rise as="p" className="eyebrow">Integrations</Rise>
        <RevealHeading className="h2" lines={['It plugs into what you already run on']} />
        <Rise as="p" className="lede">Your team keeps its tools. You get one reading of all of them.</Rise>
      </div>
      <Rise><Art className="art art-integ" svg={integ} /></Rise>
      <Marquee reverse />
    </section>
  );
}
