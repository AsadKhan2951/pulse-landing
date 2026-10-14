// All page copy lives here so it can be edited without touching the components.

export const EMAIL = 'hello@wehearyou.studio';

// Demo requests are emailed to this inbox through FormSubmit (formsubmit.co).
// The first request sends an activation email to this address; click "Activate" once.
// Afterwards FormSubmit offers a random alias you can paste here to hide the address.
export const DEMO_INBOX = 'aamir@wehearyou.studio';
export const DEMO_ENDPOINT = `https://formsubmit.co/ajax/${DEMO_INBOX}`;

export const NAV_LINKS = [
  { href: '#brains', label: 'The brains' },
  { href: '#how', label: 'How it works' },
  { href: '#security', label: 'Security' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export const HERO = {
  title: 'Your business, finally explaining itself',
  lede: 'Pulse connects to everything you run on, reads it the way five senior leaders would, and tells you what to do next.',
};

export const SOURCES = [
  'Dynamics 365', 'Shopify', 'Meta Ads', 'Google Ads', 'QuickBooks', 'HubSpot',
  'Xero', 'WooCommerce', 'SAP', 'Salesforce', 'Google Analytics',
];

export const BRAINS = [
  { name: 'CMO', role: 'Demand', text: 'Spend efficiency, channel mix and creative fatigue. Where the next rupee works hardest.' },
  { name: 'CFO', role: 'Money', text: 'Margin after ads, cash position and receivables. Which growth is paying for itself.' },
  { name: 'COO', role: 'Delivery', text: 'Stock cover, fulfilment and supplier lead times. The bottleneck forming two weeks out.' },
  { name: 'Sales', role: 'Pipeline', text: 'Account movement and win rates. Which regions and reps are carrying the quarter.' },
  { name: 'CHR', role: 'People', text: 'Headcount against output and attrition risk. Where the team is stretched before it breaks.' },
];

export const STEPS = [
  { title: 'Connect', text: 'Point Pulse at the systems you already run on. It maps the fields itself, so a renamed column is a one-line fix.' },
  { title: 'Read', text: 'Everything lands in one currency, over one window. Gaps between sources stay visible instead of being averaged away.' },
  { title: 'Forecast', text: 'The measured trend is carried into the next period, with the range Pulse is confident in.' },
  { title: 'Decide', text: 'When something moves against its own pattern, you get the reason behind it and the action that follows.' },
];

export const CASES = [
  { tag: 'Unify', title: 'Every source, one pulse', text: 'Dynamics 365, Shopify, Meta and Google land in one currency, over one window. The gaps between them stay visible.' },
  { tag: 'Forecast', title: 'It sees what is coming', text: 'The measured trend is carried into the next period with a confidence range, so you plan against a number.' },
  { tag: 'Decide', title: 'It tells you what to do', text: 'You get the reason behind a change and the action that follows. "Raise the cap, not the bid" beats a red arrow.' },
];

export const STATS = [
  { value: 2, suffix: '', label: 'sources connected during your demo' },
  { value: 7, suffix: '', label: 'days for a typical full rollout' },
  { value: 5, suffix: '', label: 'specialist brains on every plan' },
  { value: 256, suffix: '-bit', label: 'AES encryption at rest' },
];

export const SECURITY = [
  { title: 'Encrypted, end to end', tag: 'AES-256 at rest · TLS 1.3 in transit', text: 'AES-256 at rest and TLS 1.3 in transit. Your figures are unreadable to anyone without your keys, including us.' },
  { title: 'Never training data', tag: 'No model training', text: 'Your business data is never used to train any model, never sold and never shared. That is a contractual commitment.' },
  { title: 'You decide who sees what', tag: 'Role-based access · SSO & 2FA', text: 'Access is granted by source, by region and by brain. A regional head sees their region and finance keeps the CFO brain.' },
  { title: 'Every action logged', tag: 'Full audit log', text: 'A full audit trail of who looked at what, and when. You can export and inspect it at any time.' },
  { title: 'Hosted where you need', tag: 'Regional hosting · Delete on request', text: 'Choose the region your data lives in. Disconnect a source or close the account and your data is destroyed.' },
];

export const PLANS = [
  {
    name: 'Growth', price: '$199', featured: false, cta: 'Start with Growth',
    for: 'For small and mid-sized businesses getting their first real view of the whole operation.',
    items: [
      '3-tier data connectivity: ERP, commerce and advertising',
      'Up to 5 team members, with access by source and region',
      'All five brains: CMO, CFO, COO, Sales and CHR',
      'Forecasting with confidence ranges',
      'Recommendations, with the reason behind each',
      'Ask Pulse, routed through the smart brain',
      'Mobile, desktop and scheduled exports',
    ],
  },
  {
    name: 'Scale', price: '$299', featured: true, cta: 'Start with Scale',
    for: 'For businesses running more systems, more regions and more people who need an answer.',
    items: [
      'Unlimited data connectivity, every source you run on',
      'Up to 10 team members, with per-brain permissions',
      'Everything in Growth, across all connected sources',
      'Cross-entity and multi-region consolidation',
      'Priority anomaly alerts',
      'Custom metric sets and saved views for each team',
      'SSO, full audit log and data-residency choice',
    ],
  },
];

export const FAQ = [
  { q: 'Is this just another dashboard?', a: 'No. A dashboard reports what happened and leaves the interpreting to you. Pulse reads the same numbers through five specialist brains, projects where they are heading, and tells you which one thing to act on.' },
  { q: 'What can it connect to?', a: 'Anything you run on: ERP, online store, ad platforms, CRM, HR, warehouse, accounting, even a spreadsheet someone still maintains. Growth covers three tiers of connectivity and Scale is unlimited.' },
  { q: 'Do I need a technical team to set it up?', a: 'No. We connect two of your sources ourselves during the demo, and a full rollout is typically a week.' },
  { q: 'How safe is my data?', a: 'It is encrypted with AES-256 at rest and TLS 1.3 in transit, access is controlled by source and region, every action is written to an audit log, and it is hosted in the region you choose. It is never used to train models, never sold and never shared.' },
  { q: 'What if a system does not answer?', a: 'Pulse greys the column and tells you the figure is missing. It never estimates a number to fill the gap.' },
  { q: 'Can my whole team use it?', a: 'Yes. Growth includes up to five people and Scale up to ten, and you set exactly who sees what. Everyone gets the full product on desktop and mobile.' },
];
