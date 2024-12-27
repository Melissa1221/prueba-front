interface User {
  email: string;
  password: string;
  name: string;
}

export const mockUsers: User[] = [
  {
    email: 'admin@example.com',
    password: '123456',
    name: 'Administrator'
  }
];

export const authService = {
  login: (email: string, password: string): Promise<User | null> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find(
          u => u.email === email && u.password === password
        );
        
        if (user) {
          const userWithoutPassword = {
            email: user.email,
            name: user.name
          };
          resolve(userWithoutPassword as User);
        } else {
          reject(new Error('Credenciales inválidas'));
        }
      }, 500); // Simulate API delay
    });
  }
};

interface Client {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
}

let mockClients: Client[] = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan@example.com'
  },
  {
    id: 2,
    nombre: 'María',
    apellido: 'García',
    email: 'maria@example.com'
  }
];

export const clientService = {
  getClients: (): Promise<Client[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockClients);
      }, 500);
    });
  },

  addClient: (clientData: Omit<Client, 'id'>): Promise<Client> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newClient = {
          id: mockClients.length + 1,
          ...clientData
        };
        mockClients = [...mockClients, newClient];
        resolve(newClient);
      }, 500);
    });
  }
}; 