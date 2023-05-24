import { ReactRollupLib } from '@path-imports/react-rollup-lib';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <ReactRollupLib />
      <NxWelcome title="react-webpack" />
      <div />
    </>
  );
}

export default App;
