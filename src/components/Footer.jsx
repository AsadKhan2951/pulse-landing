import Logo from './Logo.jsx';
import { EMAIL } from '../content.js';

export default function Footer() {
  return (
    <>
      <footer className="band">
        <div className="foot">
          <div>
            <Logo />
            <p>The smart business brain. Every source, one reading, with five specialist brains telling you what to do about it.</p>
          </div>
          <div>
            <h5>Product</h5>
            <ul>
              <li><a href="#brains">The five brains</a></li>
              <li><a href="#how">How it works</a></li>
              <li><a href="#cases">What it does</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#security">Security</a></li>
              <li><a href="#connect">Integrations</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#cta">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="band tight legal"><span>© {new Date().getFullYear()} Pulse, a product by Heard.</span><span>{EMAIL}</span></div>
    </>
  );
}
