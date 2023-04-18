import styles from './react-vite-lib-2.module.css';

/* eslint-disable-next-line */
export interface ReactViteLib2Props {}

export function ReactViteLib2(props: ReactViteLib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactViteLib2!</h1>
    </div>
  );
}

export default ReactViteLib2;
