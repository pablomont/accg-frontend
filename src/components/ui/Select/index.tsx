import React from 'react';
import styles from './styles.module.css';

interface SelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options?: SelectOption[];
    placeholder?: string;
}

export function Select({
    label,
    error,
    options = [],
    placeholder = 'Selecione uma opção',
    className = '',
    children,
    ...props
}: SelectProps) {
    return (
        <div className={`${styles.container} ${className}`}>
            {label && (
                <label className={styles.label} htmlFor={props.id}>
                    {label}
                </label>
            )}
            <select
                className={`${styles.select} ${error ? styles.selectError : ''}`}
                {...props}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map(option => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label}
                    </option>
                ))}
                {children}
            </select>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}