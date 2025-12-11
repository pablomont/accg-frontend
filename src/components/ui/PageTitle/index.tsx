import React from 'react';
import styles from './styles.module.css';

interface PageTitleProps {
    children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
    return (
        <h1 className={styles.title}>
            {children}
        </h1>
    );
}
