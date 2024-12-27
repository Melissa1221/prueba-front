import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import styles from '../../styles/Sidebar.module.css';
import { NAV_ROUTES, ROUTES } from '../../shared/utils/routes';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Sistema Clientes</h1>
        <button className={styles.closeButton} onClick={onClose}>
          <span>☰</span>
        </button>
      </div>

      <nav className={styles.nav}>
        {NAV_ROUTES.filter(route => route.showInNav).map(route => (
          <Link key={route.path} to={route.path} className={styles.navItem}>
            <route.Icon className={styles.icon} />
            {route.label}
          </Link>
        ))}
      </nav>

      <button onClick={handleLogout} className={styles.logoutButton}>
        <BiLogOut className={styles.icon} />
        Cerrar Sesión
      </button>
    </div>
  );
}; 