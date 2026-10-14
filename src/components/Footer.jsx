import Logo from './Logo.jsx';
import { EMAIL } from '../content.js';

export default function Footer({ base = '' }) {
  return (
    <>
      <footer className="band">
        <div className="foot">
          <div>
            <Logo base={base} />
            <p>The smart business brain. Every source, one reading, with five specialist brains telling you what to do about it.</p>
          </div>
          <div>
            <h5>Product</h5>
            <ul>
              <li><a href={`${base}#brains`}>The five brains</a></li>
              <li><a href={`${base}#how`}>How it works</a></li>
              <li><a href={`${base}#cases`}>What it does</a></li>
              <li><a href={`${base}#pricing`}>Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href={`${base}#security`}>Security</a></li>
              <li><a href={`${base}#faq`}>FAQ</a></li>
              <li><a href="/privacy/">Privacy policy</a></li>
              <li><a href="/cookies/">Cookie settings</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="band tight legal">
        <span>© {new Date().getFullYear()} Pulse, a product by Heard.</span>
        <span className="legal-links"><a href="/privacy/">Privacy</a><a href="/cookies/">Cookies</a><span>{EMAIL}</span></span>
      </div>
    </>
  );
}
