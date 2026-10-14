import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { Rise, RollButton } from './motion.jsx';
import { NAV_LINKS } from '../content.js';

export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);
  return (
    <Rise as="header" className="nav" y={-32}>
      <div className="nav-in">
        <Logo />
        <nav className="nav-links" aria-label="Sections">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <RollButton href="#cta">Book a demo</RollButton>
        <button className="burger" aria-label="Menu" aria-expanded={open} aria-controls="mobnav" onClick={() => setOpen((o) => !o)}><i /></button>
      </div>
      <div className="mobnav" id="mobnav" hidden={!open}>
        {NAV_LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <RollButton href="#cta" onClick={() => setOpen(false)}>Book a demo</RollButton>
      </div>
    </Rise>
  );
}
