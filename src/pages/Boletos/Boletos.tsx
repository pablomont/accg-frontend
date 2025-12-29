//import { FileText } from 'lucide-react';
import styles from './Boletos.module.css';
import { accountsMock } from '../../data/accounts.mock';
import { BoletoGenerator } from '../../components/business/billing/BoletoGenerator';
import { PageTitle } from '../../components/ui/PageTitle';
import { formatCurrency, formatDate } from '@/utils/formatters';


export function Boletos() {
    return (
        <div className={styles.page}>

            <PageTitle>Boletos e Cobranças</PageTitle>

            <div className={styles.header}>
                <h1 className={styles.title}>Boletos e PIX</h1>
                <p className={styles.subtitle}>Geração de boletos e cobranças PIX</p>
            </div>

            {/* Layout em 2 paginas */}
            <div className={styles.grid}>

                {/* Coluna esquerda: histórico */}
                <section className={styles.card}>
                    <h2>Histórico de Cobranças</h2>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Nome do Associado</th>
                                <th>Valor</th>
                                <th>Vencimento</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {accountsMock.map((boleto) => (
                                <tr key={boleto.id}>
                                    <td>{formatDate(boleto.dataEmissao)}</td>

                                    <td>
                                        {/* não assume sobrenome; usa o que existir */}
                                        {(boleto.associado as any)?.nomeCompleto ??
                                            (boleto.associado as any)?.nome ??
                                            '—'}
                                    </td>

                                    <td>{formatCurrency(boleto.valor)}</td>

                                    <td>{formatDate(boleto.dataVencimento)}</td>

                                    <td>{boleto.status}</td>

                                    <td>⬇</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* Coluna direita: gerador de boleto */}
                <aside className={styles.card}>
                    <BoletoGenerator />
                </aside>

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
            </div>
        </div>
    );
}

export default Boletos;
