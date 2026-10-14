import logo from '../assets/art/logo.svg?raw';

/** `base` is '' on the home page and '/' on other pages, so the link always returns home. */
export default function Logo({ base = '' }) {
  return <a className="brand" href={base ? '/' : '#top'} aria-label="Pulse home" dangerouslySetInnerHTML={{ __html: logo }} />;
}
