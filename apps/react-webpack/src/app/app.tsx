import { ReactRollupLib } from '@path-imports/react-rollup-lib';

import NxWelcome from './nx-welcome';
import { jslib } from '@path-imports/jslib';

console.log(jslib());
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
