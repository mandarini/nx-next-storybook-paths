import styles from './one.module.css';
import { ReactRollupLib } from '@path-imports/react-rollup-lib';
/* eslint-disable-next-line */
export interface OneProps {}

export function One(props: OneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to One!</h1>
      <ReactRollupLib />
    </div>
  );
}

export default One;
