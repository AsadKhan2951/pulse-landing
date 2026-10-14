// Cookie preferences are stored in the visitor's browser only.
// Before adding any analytics or marketing script, check getConsent().analytics / .marketing first.
const KEY = 'pulse-cookie-consent';

export const DEFAULT_CONSENT = { necessary: true, analytics: false, marketing: false };

export function getConsent() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULT_CONSENT, ...JSON.parse(raw), necessary: true } : { ...DEFAULT_CONSENT };
  } catch {
    return { ...DEFAULT_CONSENT };
  }
}

export function saveConsent(prefs) {
  const value = { ...prefs, necessary: true, savedAt: new Date().toISOString() };
  try { localStorage.setItem(KEY, JSON.stringify(value)); return true; } catch { return false; }
}
