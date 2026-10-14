import { useState } from 'react';
import LegalLayout from './LegalLayout.jsx';
import { getConsent, saveConsent, DEFAULT_CONSENT } from '../consent.js';
import { EMAIL } from '../content.js';

const GROUPS = [
  { key: 'necessary', title: 'Strictly necessary', locked: true,
    text: 'Needed for the site to work and to remember the choices you make on this page. These are always on.' },
  { key: 'analytics', title: 'Analytics',
    text: 'Would help us understand which pages are useful, using aggregated visit counts. We do not run any analytics today; if we add it, it will only load when this is switched on.' },
  { key: 'marketing', title: 'Marketing',
    text: 'Would let advertising platforms measure campaigns. We do not use any marketing cookies today; if we ever do, they will only load when this is switched on.' },
];

export default function Cookies() {
  const [prefs, setPrefs] = useState(getConsent);
  const [note, setNote] = useState('');
  const flip = (k) => setPrefs((p) => ({ ...p, [k]: !p[k] }));
  const store = (p) => { setPrefs(p); setNote(saveConsent(p) ? 'Your preferences are saved.' : 'Your browser blocked saving. Your choice applies to this visit only.'); };

  return (
    <LegalLayout
      eyebrow="Legal"
      title="Cookie settings"
      updated="15 October 2026"
      intro="Choose which cookies this website may use. Your choice is saved in this browser and you can change it at any time."
    >
      <div className="prefs">
        {GROUPS.map((g) => (
          <div className="pref" key={g.key}>
            <div className="pref-text">
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </div>
            <button
              type="button"
              role="switch"
              id={`pref-${g.key}`}
              aria-checked={!!prefs[g.key]}
              aria-label={g.title}
              disabled={g.locked}
              className={`switch ${prefs[g.key] ? 'on' : ''}`}
              onClick={() => flip(g.key)}
            ><i /></button>
          </div>
        ))}
      </div>
      <div className="pref-actions">
        <button className="btn solid" type="button" onClick={() => store(prefs)}><span className="roll"><span>Save preferences</span><span aria-hidden="true">Save preferences</span></span></button>
        <button className="btn line" type="button" onClick={() => store({ ...DEFAULT_CONSENT, analytics: true, marketing: true })}><span className="roll"><span>Allow all</span><span aria-hidden="true">Allow all</span></span></button>
        <button className="btn line" type="button" onClick={() => store({ ...DEFAULT_CONSENT })}><span className="roll"><span>Necessary only</span><span aria-hidden="true">Necessary only</span></span></button>
        {note && <p className="saved" role="status">{note}</p>}
      </div>

      <h2>What we use today</h2>
      <p>This website does not set advertising or analytics cookies. The only things it stores are your choices on this page, kept in your own browser.</p>
      <ul>
        <li><b>Your cookie preferences:</b> stored in your browser's local storage under <code>pulse-cookie-consent</code>, until you clear it.</li>
        <li><b>Google Fonts:</b> the site loads its typefaces from Google, which receives your IP address when the page loads. No Google advertising cookies are set by this.</li>
        <li><b>Hosting:</b> our host, DigitalOcean, may record technical request details such as IP address to keep the site secure.</li>
      </ul>

      <h2>Inside the Pulse product</h2>
      <p>When you sign in to Pulse, we use strictly necessary cookies to keep you signed in and to protect your session. They cannot be switched off because the product cannot work without them.</p>

      <h2>Questions</h2>
      <p>See our <a href="/privacy/">privacy policy</a>, or email <b>{EMAIL}</b>.</p>
    </LegalLayout>
  );
}
