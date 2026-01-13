import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { Card } from "@/components/ui/Card";
import styles from "../finance/FinancialSummary.module.css"

export interface Transaction {
    amount: number;
    type: 'income' | 'expense';
}

interface FinancialSummaryProps {
    transactions: Transaction[];
}

export function FinancialSummary({transactions}: FinancialSummaryProps){

const totalIncomes = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

const totalBalance = totalIncomes - totalExpenses;

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL',}).format(value);
};

    return(
        <>
        <div className={styles.cardHeader}>
            <h2 className={styles.title}>Resumo Financeiro</h2>
        </div>

        <p className={styles.label}>Acompanhe suas finanças em tempo real</p>

            <div className={styles.container}>
                <Card className={`${styles.cardBase} ${styles.income}`}>
                    <div className={styles.cardContent}>
                        <div className={styles.textGroup}>
                            <span className={styles.label}>Total Entradas</span>
                            <h3 className={styles.value}>{formatCurrency(totalIncomes)}</h3>
                        </div>
                        <div className={`${styles.iconWrapper} ${styles.iconIncome}`}>
                            <TrendingUp size={22} color="#10b981"/>
                        </div>
                    </div>
                </Card>
            
                <Card className={`${styles.cardBase} ${styles.expense}`}>
                    <div className={styles.cardContent}>
                        <div className={styles.textGroup}>
                            <span className={styles.label}>Total Saídas</span>
                            <h3 className={styles.value}>{formatCurrency(totalExpenses)}</h3>
                        </div>
                        <div className={`${styles.iconWrapper} ${styles.iconExpense}`}>
                            <TrendingDown size={22} color="#ef4444"/>
                        </div>
                    </div>
                </Card>

                <Card className={`${styles.cardBase} ${styles.balance}`}>
                    <div className={styles.cardContent}>
                        <div className={styles.textGroup}>
                            <span className={styles.label}>Saldo Atual</span>
                            <h3 className={styles.value}>{formatCurrency(totalBalance)}</h3>
                        </div>
                        <div className={`${styles.iconWrapper} ${styles.iconBalance}`}>
                            <Wallet size={22} color="#3b82f6"/>
                        </div>
                    </div>
                </Card>
            </div>
        </>   
    )
}