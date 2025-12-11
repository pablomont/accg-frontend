import React from 'react';
import styles from './styles.module.css';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'success' | 'warning' | 'danger' | 'neutral';
}

export function Badge({ children, variant = 'neutral' }: BadgeProps) {
    return (
        <span className={`${styles.badge} ${styles[variant]}`}>
            {children}
        </span>
    );
}
