import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { Card } from "@/components/ui/Card";
import styles from "../finance/FinancialSummaty.module.css"
export function FinancialSummary(){
    return(
        <>
        <div className={styles.header}>
            <h2 className={styles.title}>Resumo Financeiro</h2>
        </div>

            <div className={styles.container}>
                <Card className={`${styles.cardBase} ${styles.income}`}>
                    <div className={styles.cardContent}>
                        <div className={styles.textGroup}>
                            <span className={styles.label}>Total Entradas</span>
                            <h3 className={styles.value}>R$ 0,00</h3>
                        </div>
                        <div className={`${styles.iconWrapper} ${styles.iconIncome}`}>
                            <TrendingUp size={22} color="#10b981"/>
                        </div>
                    </div>
                </Card>
            
                <Card className={`${styles.cardBase} ${styles.income}`}>
                    <div className={styles.cardContent}>
                        <div className={styles.textGroup}>
                            <span className={styles.label}>Total Saídas</span>
                            <h3 className={styles.value}>R$ 0,00</h3>
                        </div>
                        <div className={`${styles.iconWrapper} ${styles.iconExpense}`}>
                            <TrendingDown size={22} color="#ef4444"/>
                        </div>
                    </div>
                </Card>

                <Card className={`${styles.cardBase} ${styles.income}`}>
                    <div className={styles.cardContent}>
                        <div className={styles.textGroup}>
                            <span className={styles.label}>Total Saídas</span>
                            <h3 className={styles.value}>R$ 0,00</h3>
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