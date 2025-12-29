import React from 'react';
import styles from './styles.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
    return (
        <div className={`${styles.container} ${className}`}>
            {label && (
                <label className={styles.label} htmlFor={props.id}>
                    {label}
                </label>
            )}
            <input
                className={`${styles.input} ${error ? styles.inputError : ''}`}
                {...props}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
