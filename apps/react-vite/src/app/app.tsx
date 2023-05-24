import { ReactViteLib } from '@path-imports/react-vite-lib';
import NxWelcome from './nx-welcome';
import { jslib } from '@path-imports/jslib';
import { ReactLibNone } from '@path-imports/react-lib-none';

console.log(jslib());
export function App() {
  return (
    <>
      <ReactViteLib />
      <ReactLibNone />
      <NxWelcome title="react-vite" />
      <div />
    </>
  );
}

export default App;
