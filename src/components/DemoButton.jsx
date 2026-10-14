import { RollButton } from './motion.jsx';
import { useDemo } from '../context/demo.jsx';

/** Any button that opens the demo request form. `plan` pre-selects a plan in the form. */
export default function DemoButton({ plan = '', children = 'Book a demo', onClick, ...rest }) {
  const { openDemo } = useDemo();
  return (
    <RollButton
      href="#book-demo"
      onClick={(e) => { e.preventDefault(); onClick?.(e); openDemo(plan); }}
      {...rest}
    >
      {children}
    </RollButton>
  );
}
