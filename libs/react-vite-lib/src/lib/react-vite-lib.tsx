import styles from './react-vite-lib.module.css';
import { ReactViteLib2 } from '@path-imports/react-vite-lib-2';

/* eslint-disable-next-line */
export interface ReactViteLibProps {}

export function ReactViteLib(props: ReactViteLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactViteLib!</h1>
      <ReactViteLib2 />
    </div>
  );
}

export default ReactViteLib;
