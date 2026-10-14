import { useState } from 'react';
import { Rise, RevealHeading } from './motion.jsx';
import DemoButton from './DemoButton.jsx';
import { EMAIL } from '../content.js';

export default function Cta() {
  const [label, setLabel] = useState('Copy');
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setLabel('Copied'); }
    catch { setLabel('Select it'); }
    setTimeout(() => setLabel('Copy'), 1600);
  };
  return (
    <section className="band cta" id="cta">
      <RevealHeading lines={['See it on your own numbers']} />
      <Rise as="p" className="lede">We connect two of your sources and bring the five brains back with a live read of your business. No commitment.</Rise>
      <Rise className="cta-row"><DemoButton /></Rise>
      <Rise as="p" className="mail"><span>{EMAIL}</span><button className="copy" type="button" onClick={copy}>{label}</button></Rise>
    </section>
  );
}
