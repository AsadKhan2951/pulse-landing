import { forwardRef } from 'react';

/** Renders one of the isometric SVG drawings from src/assets/art (imported with ?raw). */
const Art = forwardRef(function Art({ svg, className = '', ...rest }, ref) {
  return <div ref={ref} className={className} dangerouslySetInnerHTML={{ __html: svg }} {...rest} />;
});
export default Art;
