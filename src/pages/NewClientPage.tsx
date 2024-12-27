import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import styles from '../styles/NewClientPage.module.css';
import { clientService } from '../services/mockData';

interface ClientForm {
  nombre: string;
  apellido: string;
  email: string;
}

export const NewClientPage: FC = () => {
  const [formData, setFormData] = useState<ClientForm>({
    nombre: '',
    apellido: '',
    email: ''
  });
  const [errors, setErrors] = useState<Partial<ClientForm>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof ClientForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ClientForm> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await clientService.addClient(formData);
        alert('Cliente guardado exitosamente');
        setFormData({ nombre: '', apellido: '', email: '' });
      } catch  {
        alert('Error al guardar el cliente');
      }
    }
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>Datos Personales</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              error={errors.nombre}
            />
            <Input
              label="Apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              error={errors.apellido}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Button type="submit">
              Guardar Cliente
            </Button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}; 