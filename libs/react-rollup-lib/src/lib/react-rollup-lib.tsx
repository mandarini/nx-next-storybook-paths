import styles from './react-rollup-lib.module.css';

/* eslint-disable-next-line */
export interface ReactRollupLibProps {}

export function ReactRollupLib(props: ReactRollupLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactRollupLib!</h1>
    </div>
  );
}

export default ReactRollupLib;
