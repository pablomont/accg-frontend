import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import styles from './NotFound.module.css';

export function NotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.title}>Página não encontrada</h2>
                <p className={styles.description}>
                    A página que você está procurando não existe ou foi movida.
                </p>

                <div className={styles.actions}>
                    <button
                        className={styles.buttonPrimary}
                        onClick={() => navigate('/dashboard')}
                    >
                        <Home size={18} />
                        Ir para o Dashboard
                    </button>
                    <button
                        className={styles.buttonSecondary}
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft size={18} />
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
