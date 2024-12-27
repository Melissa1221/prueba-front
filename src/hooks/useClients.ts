import { useState, useEffect } from 'react';
import { clientService } from '../services/mockData';

interface Client {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
}

export const useClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadClients = async () => {
      try {
        setIsLoading(true);
        const data = await clientService.getClients();
        setClients(data);
        setError(null);
      } catch {
        setError('Error al cargar los clientes');
      } finally {
        setIsLoading(false);
      }
    };

    loadClients();
  }, []);

  return { clients, isLoading, error };
}; 