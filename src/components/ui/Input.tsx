import { FC, InputHTMLAttributes } from 'react';
import styles from '../../styles/Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        {...props}
        className={`${styles.input} ${error ? styles.error : ''} ${className}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}; 