import styles from './Despesas.module.css';
import { FinancialSummary, Transaction } from '@/components/business/finance/FinancialSummary';

export function Despesas() {

    const mockTransactions: Transaction[] = [
                {amount: 5000, type: 'income'},
                {amount: 1200, type: 'expense'},
                {amount: 800, type: 'expense'},
                {amount: 2500, type: 'income'},
                {amount: 1500, type: 'income'}
            ]

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Despesas</h1>
                <p className={styles.subtitle}>Controle de despesas e plano de contas</p>
            </div>

            <FinancialSummary transactions={mockTransactions} />
        </div>
    );
}

export default Despesas;
