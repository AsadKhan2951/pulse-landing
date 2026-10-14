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
        <Rise as="p" className="lede">ERP, commerce, ad platforms, CRM, HR and warehouse, plus the spreadsheet someone still keeps.</Rise>
      </div>
      <Rise><Art className="art art-integ" svg={integ} /></Rise>
      <Marquee reverse />
    </section>
  );
}
