import React from 'react';
import styles from './styles.module.css';

interface TableProps {
    children: React.ReactNode;
}

export function Table({ children }: TableProps) {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                {children}
            </table>
        </div>
    );
}
