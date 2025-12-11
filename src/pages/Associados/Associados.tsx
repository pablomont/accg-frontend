import { Users } from 'lucide-react';
import styles from './Associados.module.css';

export function Associados() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Associados</h1>
                <p className={styles.subtitle}>Gerencie os associados da entidade</p>
            </div>

            <div className={styles.placeholder}>
                <Users className={styles.placeholderIcon} size={80} />
                <h2 className={styles.placeholderTitle}>Módulo em Desenvolvimento</h2>
                <p className={styles.placeholderText}>
                    Este módulo será desenvolvido pelos alunos.
                </p>
                <p className={styles.placeholderHint}>
                    Consulte o arquivo README.md nesta pasta para ver as tarefas.
                </p>
            </div>
        </div>
    );
}

export default Associados;
