import { createContext, useCallback, useContext, useState } from 'react';
import DemoModal from '../components/DemoModal.jsx';

const DemoCtx = createContext({ openDemo: () => {} });
export const useDemo = () => useContext(DemoCtx);

/** Wrap a page in this so any "Book a demo" button can open the request form. */
export function DemoProvider({ children }) {
  const [state, setState] = useState({ open: false, plan: '' });
  const openDemo = useCallback((plan = '') => setState({ open: true, plan }), []);
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);
  return (
    <DemoCtx.Provider value={{ openDemo }}>
      {children}
      <DemoModal open={state.open} plan={state.plan} onClose={close} />
    </DemoCtx.Provider>
  );
}
