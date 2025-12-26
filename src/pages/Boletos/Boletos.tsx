// import { FileText } from 'lucide-react';
import { BoletoGenerator } from '../../components/business/billing/BoletoGenerator';
import styles from './Boletos.module.css';

export function Boletos() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Boletos e PIX</h1>
                <p className={styles.subtitle}>Geração de boletos e cobranças PIX</p>
            </div>

            <BoletoGenerator/>
        </div>
    );
}

export default Boletos;
