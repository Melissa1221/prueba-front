import { FC } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import styles from '../styles/MenuPage.module.css';

export const MenuPage: FC = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Bienvenido al Sistema de Clientes</h1>
        <div className={styles.content}>
          <p className={styles.description}>
            Seleccione una opción del menú para comenzar.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};
