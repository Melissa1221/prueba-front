import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NotFoundPage.module.css';

export const NotFoundPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Página no encontrada</h2>
        <p className={styles.description}>
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link to="/menu" className={styles.button}>
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}; 