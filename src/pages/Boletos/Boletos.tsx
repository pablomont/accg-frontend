import { FileText } from 'lucide-react';
import styles from './Boletos.module.css';

export function Boletos() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Boletos e PIX</h1>
                <p className={styles.subtitle}>Geração de boletos e cobranças PIX</p>
            </div>

            <div className={styles.placeholder}>
                <FileText className={styles.placeholderIcon} size={80} />
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

export default Boletos;
