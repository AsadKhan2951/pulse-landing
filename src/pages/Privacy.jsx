import LegalLayout from './LegalLayout.jsx';
import { EMAIL } from '../content.js';

const S = [
  { id: 'who', title: 'Who we are' },
  { id: 'scope', title: 'What this policy covers' },
  { id: 'collect', title: 'Information we collect' },
  { id: 'use', title: 'How we use it' },
  { id: 'business-data', title: 'Your business data in Pulse' },
  { id: 'sharing', title: 'Who we share it with' },
  { id: 'cookies', title: 'Cookies' },
  { id: 'retention', title: 'How long we keep it' },
  { id: 'rights', title: 'Your rights' },
  { id: 'security', title: 'Security' },
  { id: 'transfers', title: 'International transfers' },
  { id: 'children', title: 'Children' },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Contact us' },
];

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy policy"
      updated="15 October 2026"
      intro="Pulse reads the most sensitive thing a business has. This page explains, in plain words, what we collect, why, and the control you keep over it."
      sections={S}
    >
      <h2 id="who">1. Who we are</h2>
      <p>Pulse is a business intelligence product built and operated by Heard ("Heard", "we", "us"). This policy applies to the website at <b>pulsebi.io</b> and to the Pulse product. For anything in this policy, contact us at <b>{EMAIL}</b>.</p>

      <h2 id="scope">2. What this policy covers</h2>
      <p>It covers personal information we handle when you visit our website, request a demo, or use Pulse as a customer or a member of a customer's team. When a business connects its systems to Pulse, that business decides what data comes in; we process it on its behalf and only to provide the service.</p>

      <h2 id="collect">3. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li><b>Demo requests:</b> your name, work email, company, and anything else you choose to add, such as phone number, role, company size, the systems you run on and your message.</li>
        <li><b>Account details:</b> when your company uses Pulse, the name, email and role of each invited team member, and their access settings.</li>
        <li><b>Correspondence:</b> anything you send us by email or another channel.</li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li><b>Server logs:</b> like most websites, our hosting provider records technical details of each visit, such as IP address, browser type, the page requested and the time. These are used to keep the site running and secure.</li>
        <li><b>Product activity:</b> inside Pulse, we keep an audit log of who viewed or changed what, and when, so your company can review it.</li>
      </ul>
      <p>We do not use advertising trackers on this website. See the <a href="/cookies/">cookie settings</a> page for details.</p>

      <h2 id="use">4. How we use it</h2>
      <ul>
        <li>To reply to your demo request and arrange the demo.</li>
        <li>To provide, secure and support Pulse for your company.</li>
        <li>To send service messages, such as security notices or changes to these terms.</li>
        <li>To meet legal obligations and to protect against misuse.</li>
      </ul>
      <p>We will not send you marketing emails unless you have asked for them, and every such email will let you opt out.</p>

      <h2 id="business-data">5. Your business data in Pulse</h2>
      <ul>
        <li><b>Encrypted:</b> AES-256 at rest and TLS 1.3 in transit.</li>
        <li><b>Never training data:</b> your business data is never used to train any AI model, never sold and never shared.</li>
        <li><b>Your access rules:</b> your company decides who sees what, by source, by region and by brain.</li>
        <li><b>Audit trail:</b> every view and change is logged and can be exported.</li>
        <li><b>Hosting region:</b> you can choose the region your data is stored in.</li>
        <li><b>Deletion:</b> disconnect a source or close your account and the related data is destroyed, not archived. We will confirm it in writing on request.</li>
      </ul>

      <h2 id="sharing">6. Who we share it with</h2>
      <p>We do not sell personal information. We share it only with service providers who help us run the website and the product, under contracts that limit their use of it:</p>
      <ul>
        <li><b>Hosting:</b> DigitalOcean hosts this website.</li>
        <li><b>Form delivery:</b> demo requests are passed to our inbox by FormSubmit.</li>
        <li><b>Fonts:</b> the website loads its typefaces from Google Fonts, which receives your IP address when the page loads.</li>
        <li><b>Email:</b> our email provider stores the messages we exchange with you.</li>
      </ul>
      <p>We may also disclose information when required by law, or to protect the rights and safety of our users or of Heard.</p>

      <h2 id="cookies">7. Cookies</h2>
      <p>The website does not set advertising or analytics cookies. Your cookie preferences are stored in your own browser. You can review and change them at any time on the <a href="/cookies/">cookie settings</a> page.</p>

      <h2 id="retention">8. How long we keep it</h2>
      <ul>
        <li>Demo requests: up to 24 months after our last contact, unless you become a customer or ask us to delete them sooner.</li>
        <li>Customer account and business data: for as long as your company uses Pulse. It is deleted when a source is disconnected or the account is closed.</li>
        <li>Server logs: for a short period set by our hosting provider, typically a few weeks.</li>
      </ul>

      <h2 id="rights">9. Your rights</h2>
      <p>Depending on where you live, you can ask to see the personal information we hold about you, correct it, delete it, receive a copy, or object to how we use it. Email <b>{EMAIL}</b> and we will reply within 30 days. If you are a member of a customer's team, we may refer your request to your company, since it controls that account.</p>

      <h2 id="security">10. Security</h2>
      <p>We use encryption, role-based access, single sign-on and two-factor authentication, and an audit log to protect information. No system is perfectly secure, but we will tell you promptly if a breach affects your information.</p>

      <h2 id="transfers">11. International transfers</h2>
      <p>Our team and service providers may process information outside your country. Where they do, we use appropriate safeguards. Customers can choose the region their Pulse data is hosted in.</p>

      <h2 id="children">12. Children</h2>
      <p>Pulse is a business product and is not intended for anyone under 16. We do not knowingly collect information from children.</p>

      <h2 id="changes">13. Changes to this policy</h2>
      <p>If we change this policy, we will update the date at the top of this page. If a change is significant, we will tell customers by email before it takes effect.</p>

      <h2 id="contact">14. Contact us</h2>
      <p>Questions or requests about privacy: <b>{EMAIL}</b>.</p>
    </LegalLayout>
  );
}
