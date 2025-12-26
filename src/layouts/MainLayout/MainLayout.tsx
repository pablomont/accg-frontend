import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import styles from './MainLayout.module.css';
import { useState } from 'react';

export function MainLayout() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`${styles.layout} ${isCollapsed ? styles.collapsed : ''}`}>
            <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed((s) => !s)} />
            <div className={styles.main}>
                <Header />
                <main className={styles.content}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default MainLayout;
