import { ReactViteLib } from '@path-imports/react-vite-lib';
import NxWelcome from './nx-welcome';
import { jslib } from '@path-imports/jslib';
import { ReactNobundler } from '@path-imports/react-nobundler';

console.log(jslib());
export function App() {
  return (
    <>
      <ReactViteLib />
      <NxWelcome title="react-vite" />
      <ReactNobundler />
      <div />
    </>
  );
}

export default App;
