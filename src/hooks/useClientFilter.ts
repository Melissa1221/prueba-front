import { useState, useMemo } from 'react';

interface Client {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
}

interface Filters {
  nombre: string;
  apellido: string;
  email: string;
}

export const useClientFilter = (clients: Client[]) => {
  const [filters, setFilters] = useState<Filters>({
    nombre: '',
    apellido: '',
    email: ''
  });

  const filteredClients = useMemo(() => {
    return clients.filter(client => {
      const matchNombre = client.nombre.toLowerCase().includes(filters.nombre.toLowerCase());
      const matchApellido = client.apellido.toLowerCase().includes(filters.apellido.toLowerCase());
      const matchEmail = client.email.toLowerCase().includes(filters.email.toLowerCase());

      return matchNombre && matchApellido && matchEmail;
    });
  }, [clients, filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    filters,
    filteredClients,
    handleFilterChange
  };
}; 