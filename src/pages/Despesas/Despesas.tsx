import { Receipt } from 'lucide-react';
import styles from './Despesas.module.css';
import { FinancialSummary } from '@/components/business/finance/FinancialSummary';

export function Despesas() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Despesas</h1>
                <p className={styles.subtitle}>Controle de despesas e plano de contas</p>
            </div>

            <FinancialSummary />

            <div className={styles.placeholder}>
                <Receipt className={styles.placeholderIcon} size={80} />
                <h2 className={styles.placeholderTitle}>Módulo em Desenvolvimento</h2>
                <p className={styles.placeholderText}>
                    Este módulo será desenvolvido pelos alunos.
                </p>
                <p className={styles.placeholderHint}>
                    Consulte o arquivo README.md para ver as tarefas da Fase B
                </p>
            </div>
        </div>
    );
}

export default Despesas;
