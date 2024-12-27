import { FC, useEffect, useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { clientService } from '../services/mockData';
import styles from '../styles/ClientListPage.module.css';

interface Client {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
}

export const ClientListPage: FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const loadClients = async () => {
      const data = await clientService.getClients();
      setClients(data);
    };
    loadClients();
  }, []);

  return (
    <MainLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>Lista de Clientes</h2>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.nombre}</td>
                  <td>{client.apellido}</td>
                  <td>{client.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}; 