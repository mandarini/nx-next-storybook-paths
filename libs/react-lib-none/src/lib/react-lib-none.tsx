import styles from './react-lib-none.module.css';

/* eslint-disable-next-line */
export interface ReactLibNoneProps {}

export function ReactLibNone(props: ReactLibNoneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactLibNone!</h1>
    </div>
  );
}

export default ReactLibNone;
