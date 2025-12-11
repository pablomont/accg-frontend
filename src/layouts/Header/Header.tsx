import { User } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.logoText}>Gestão Financeira</h1>
            </div>

            <div className={styles.actions}>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>Administrador</span>
                    <div className={styles.userAvatar}>
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;