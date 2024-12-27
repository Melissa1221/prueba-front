import React, { FC, useState } from 'react';
import { Sidebar } from './Sidebar';
import styles from '../../styles/MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <button 
        className={styles.menuButton}
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰
      </button>

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}; 