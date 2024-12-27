import { FC } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Input } from '../components/ui/Input';
import styles from '../styles/ClientListPage.module.css';
import { useClients } from '../hooks/useClients';
import { useClientFilter } from '../hooks/useClientFilter';

export const ClientListPage: FC = () => {
  const { clients, isLoading, error } = useClients();
  const { filters, filteredClients, handleFilterChange } = useClientFilter(clients);

  if (isLoading) {
    return (
      <MainLayout>
        <div className={styles.container}>
          <div className={styles.loading}>Cargando clientes...</div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className={styles.container}>
          <div className={styles.error}>{error}</div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>Lista de Clientes</h2>
        
        <div className={styles.filters}>
          <Input
            label="Buscar por Nombre"
            name="nombre"
            value={filters.nombre}
            onChange={handleFilterChange}
            placeholder="Buscar por nombre..."
          />
          <Input
            label="Buscar por Apellido"
            name="apellido"
            value={filters.apellido}
            onChange={handleFilterChange}
            placeholder="Buscar por apellido..."
          />
          <Input
            label="Buscar por Email"
            name="email"
            value={filters.email}
            onChange={handleFilterChange}
            placeholder="Buscar por email..."
          />
        </div>

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
              {filteredClients.length > 0 ? (
                filteredClients.map(client => (
                  <tr key={client.id}>
                    <td>{client.nombre}</td>
                    <td>{client.apellido}</td>
                    <td>{client.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className={styles.noResults}>
                    No se encontraron resultados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}; 