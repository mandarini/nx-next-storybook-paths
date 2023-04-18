import styles from './react-vite-lib.module.css';

/* eslint-disable-next-line */
export interface ReactViteLibProps {}

export function ReactViteLib(props: ReactViteLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactViteLib!</h1>
    </div>
  );
}

export default ReactViteLib;
