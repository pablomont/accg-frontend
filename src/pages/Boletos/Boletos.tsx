//import { FileText } from 'lucide-react';
import styles from './Boletos.module.css';
import { accountsMock } from '../../data/accounts.mock';
import { BoletoGenerator } from '../../components/business/billing/BoletoGenerator';
import { PageTitle } from '../../components/ui/PageTitle';


export function Boletos() {
    return (
        <div className={styles.page}>

            <PageTitle>Boletos e Cobranças</PageTitle>
            <div className={styles.header}>
                <h1 className={styles.title}>Boletos e PIX</h1>
                <p className={styles.subtitle}>Geração de boletos e cobranças PIX</p>
            </div>

            {/*<div className={styles.placeholder}>
                <FileText className={styles.placeholderIcon} size={80} />
                <h2 className={styles.placeholderTitle}>Módulo em Desenvolvimento</h2>
                <p className={styles.placeholderText}>
                    Este módulo será desenvolvido pelos alunos.
                </p>
                <p className={styles.placeholderHint}>
                    Consulte o arquivo README.md para ver as tarefas da Fase C
                </p>
            </div>*/}
            
            <BoletoGenerator />
        </div>
    );
}

export default Boletos;
