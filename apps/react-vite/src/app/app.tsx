import { ReactViteLib } from '@path-imports/react-vite-lib';
import NxWelcome from './nx-welcome';
import { jslib } from '@path-imports/jslib';

console.log(jslib());
export function App() {
  return (
    <>
      <ReactViteLib />
      <NxWelcome title="react-vite" />
      <div />
    </>
  );
}

export default App;
