// import { useState } from 'react'; 
// import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Receipt,
    FileText
} from 'lucide-react';
import styles from './Sidebar.module.css';
import logoImage from '@/assets/images/accg-logo.jpg';

const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/associados', label: 'Associados', icon: Users },
    { path: '/despesas', label: 'Despesas', icon: Receipt },
    { path: '/boletos', label: 'Boletos/PIX', icon: FileText },
];

export function Sidebar() {
    // const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <aside className={`${styles.sidebar}`}>
            
            {/* <button 
                className={styles.toggleBtn} 
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? <ChevronRight size={14}/> : <ChevronLeft size={14}/>}
            </button> */}

            <div className={styles.titleSection}>
                <img src={logoImage} alt="Logo ACCG" className={styles.logoImage} />
            </div>

            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                                }
                            >
                                <item.icon className={styles.navIcon} size={20} />
                                <span className={styles.navLabel}>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles.footer}>
                <p className={styles.footerText}>v1.0.0</p>
            </div>
        </aside>
    );
}