import styles from './react-rollup-lib.module.css';
import { ReactRollupLib2 } from '@path-imports/react-rollup-lib-2';
/* eslint-disable-next-line */
export interface ReactRollupLibProps {}

export function ReactRollupLib(props: ReactRollupLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactRollupLib!</h1>
      <ReactRollupLib2 />
    </div>
  );
}

export default ReactRollupLib;
