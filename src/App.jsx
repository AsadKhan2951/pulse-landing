import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Brains from './components/Brains.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Cases from './components/Cases.jsx';
import Stats from './components/Stats.jsx';
import Security from './components/Security.jsx';
import Integrations from './components/Integrations.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';
import { DemoProvider } from './context/demo.jsx';

export default function App() {
  return (
    <DemoProvider>
      <Nav />
      <main className="frame" id="top">
        <Hero />
        <section className="band tight marq">
          <Marquee label="Already reading the pulse of" />
        </section>
        <Brains />
        <HowItWorks />
        <Cases />
        <Stats />
        <Security />
        <Integrations />
        <Pricing />
        <Faq />
        <Cta />
        <Footer />
      </main>
    </DemoProvider>
  );
}
