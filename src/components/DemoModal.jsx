import { useEffect, useRef, useState } from 'react';
import { DEMO_ENDPOINT, EMAIL } from '../content.js';

const SYSTEMS = ['Dynamics 365', 'SAP', 'Shopify', 'WooCommerce', 'Meta Ads', 'Google Ads', 'QuickBooks', 'Xero', 'HubSpot', 'Salesforce', 'Spreadsheets', 'Other'];
const SIZES = ['1–10', '11–50', '51–200', '201–1,000', '1,000+'];
const EMPTY = { name: '', email: '', company: '', phone: '', role: '', size: '', plan: '', systems: [], message: '', _honey: '' };

export default function DemoModal({ open, plan, onClose }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');
  const first = useRef(null);
  const dialog = useRef(null);

  // reset when opened; pre-select the plan the visitor clicked
  useEffect(() => {
    if (!open) return;
    setForm((f) => ({ ...f, plan: plan || f.plan }));
    if (status !== 'sending') { setStatus('idle'); setError(''); }
    const prev = document.activeElement;
    document.body.style.overflow = 'hidden';
    setTimeout(() => first.current?.focus(), 60);
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && dialog.current) { // keep focus inside the dialog
        const f = [...dialog.current.querySelectorAll('button, input, select, textarea, a[href]')].filter((n) => !n.disabled);
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus?.(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (s) => setForm((f) => ({ ...f, systems: f.systems.includes(s) ? f.systems.filter((x) => x !== s) : [...f.systems, s] }));

  const submit = async (e) => {
    e.preventDefault();
    if (form._honey) return; // bot
    setStatus('sending'); setError('');
    try {
      const res = await fetch(DEMO_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Company: form.company,
          Phone: form.phone || '—',
          Role: form.role || '—',
          'Company size': form.size || '—',
          'Plan of interest': form.plan || 'Not sure yet',
          'Systems they run on': form.systems.join(', ') || '—',
          Message: form.message || '—',
          _subject: `New Pulse demo request: ${form.company} (${form.name})`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === 'false') throw new Error(data.message || 'The request did not go through.');
      setStatus('sent');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" ref={dialog}>
        <button className="modal-x" type="button" aria-label="Close" onClick={onClose}><i /></button>

        {status === 'sent' ? (
          <div className="modal-done">
            <span className="done-mark" aria-hidden="true" />
            <h2 id="demo-title">Request received</h2>
            <p className="lede">Thank you. We will reply within one working day to set a time and agree which two sources to connect.</p>
            <button className="btn solid" type="button" onClick={onClose}><span className="roll"><span>Back to the site</span><span aria-hidden="true">Back to the site</span></span></button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate={false}>
            <div className="modal-head">
              <p className="eyebrow">Book a demo</p>
              <h2 id="demo-title">See Pulse on your own numbers</h2>
              <p className="lede">Tell us a little about the business. We connect two of your sources and bring the five brains back with a live read.</p>
            </div>

            <div className="fields">
              <label className="field"><span>Full name *</span><input ref={first} id="demo-name" required value={form.name} onChange={set('name')} autoComplete="name" /></label>
              <label className="field"><span>Work email *</span><input id="demo-email" type="email" required value={form.email} onChange={set('email')} autoComplete="email" /></label>
              <label className="field"><span>Company *</span><input id="demo-company" required value={form.company} onChange={set('company')} autoComplete="organization" /></label>
              <label className="field"><span>Phone or WhatsApp</span><input id="demo-phone" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" /></label>
              <label className="field"><span>Your role</span><input id="demo-role" value={form.role} onChange={set('role')} autoComplete="organization-title" placeholder="e.g. CEO, Head of Growth" /></label>
              <label className="field"><span>Company size</span>
                <select id="demo-size" value={form.size} onChange={set('size')}>
                  <option value="">Select</option>
                  {SIZES.map((s) => <option key={s} value={s}>{s} people</option>)}
                </select>
              </label>
              <label className="field wide"><span>Plan of interest</span>
                <select id="demo-plan" value={form.plan} onChange={set('plan')}>
                  <option value="">Not sure yet</option>
                  <option value="Growth">Growth, $199 / month</option>
                  <option value="Scale">Scale, $299 / month</option>
                </select>
              </label>
              <fieldset className="field wide">
                <legend>Systems you run on</legend>
                <div className="chips">
                  {SYSTEMS.map((s) => (
                    <button type="button" key={s} className={`chip ${form.systems.includes(s) ? 'on' : ''}`} aria-pressed={form.systems.includes(s)} onClick={() => toggle(s)}>{s}</button>
                  ))}
                </div>
              </fieldset>
              <label className="field wide"><span>The one question you can never get answered fast enough</span>
                <textarea id="demo-message" rows={3} value={form.message} onChange={set('message')} />
              </label>
              <input className="hp" tabIndex={-1} autoComplete="off" value={form._honey} onChange={set('_honey')} aria-hidden="true" />
            </div>

            {status === 'error' && (
              <p className="form-error" role="alert">
                Your request could not be sent: {error} Please try again, or email us at <b>{EMAIL}</b>.
              </p>
            )}

            <div className="modal-foot">
              <p className="fine">By sending this you agree to our <a href="/privacy/">privacy policy</a>. We only use these details to arrange your demo.</p>
              <button className="btn solid" type="submit" disabled={status === 'sending'}>
                <span className="roll"><span>{status === 'sending' ? 'Sending…' : 'Request demo'}</span><span aria-hidden="true">{status === 'sending' ? 'Sending…' : 'Request demo'}</span></span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
