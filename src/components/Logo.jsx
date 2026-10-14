import logo from '../assets/art/logo.svg?raw';

export default function Logo() {
  return <a className="brand" href="#top" aria-label="Pulse home" dangerouslySetInnerHTML={{ __html: logo }} />;
}
