<<<<<<< HEAD
=======
import { BoletoGenerator } from '../../components/business/billing/BoletoGenerator';
>>>>>>> origin/feature/US07-componente-gerador-de-boleto
import styles from './Boletos.module.css';
import { accountsMock } from '@/data/accounts.mock';
import BoletoGenerator from '@/components/business/billing/BoletoGenerator';



function formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR');
}

function formatCurrency(value: number) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function isVencido(dataVencimento: string, status: string) {
    if (status === 'pago') return false;

    const hoje = new Date();
    const vencimento = new Date(dataVencimento);

    return vencimento < hoje;
}

export function Boletos() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Boletos e Cobranças</h1>
                <p className={styles.subtitle}>
                    Gerencie e acompanhe todas as cobranças da sua organização
                </p>
            </div>

<<<<<<< HEAD
            <div className={styles.grid}>
                {/* ===== HISTÓRICO ===== */}
                <section className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2 className={styles.cardTitle}>Histórico de Cobranças</h2>

                        <div className={styles.actions}>
                            <input
                                className={styles.search}
                                placeholder="Buscar por nome..."
                            />
                            <button className={styles.filterButton}>
                                Filtrar
                            </button>
                        </div>
                    </div>

                    <div className={styles.tableWrap}>
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
                                {accountsMock.map((boleto) => {
                                    const vencido = isVencido(
                                        boleto.dataVencimento,
                                        boleto.status
                                    );

                                    const statusTexto =
                                        boleto.status === 'pago'
                                            ? 'Pago'
                                            : vencido
                                            ? 'Vencido'
                                            : 'Pendente';

                                    const statusClasse =
                                        boleto.status === 'pago'
                                            ? styles.badgeSuccess
                                            : vencido
                                            ? styles.badgeDanger
                                            : styles.badgeWarning;

                                    return (
                                        <tr key={boleto.id}>
                                            <td className={styles.muted}>
                                                {formatDate(boleto.dataEmissao)}
                                            </td>

                                            <td>
                                                {boleto.associado.nome}{' '}
                                                {boleto.associado.sobrenome}
                                            </td>

                                            <td>
                                                {formatCurrency(boleto.valor)}
                                            </td>

                                            <td className={styles.muted}>
                                                {formatDate(
                                                    boleto.dataVencimento
                                                )}
                                            </td>

                                            <td>
                                                <span
                                                    className={`${styles.badge} ${statusClasse}`}
                                                >
                                                    {statusTexto}
                                                </span>
                                            </td>

                                            <td>
                                                <button
                                                    className={styles.iconButton}
                                                    title="Baixar boleto"
                                                >
                                                    ⬇
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ===== GERAR BOLETO ===== */}
                <aside className={styles.card}>
                    <BoletoGenerator />
                </aside>
            </div>
=======
            <BoletoGenerator/>
>>>>>>> origin/feature/US07-componente-gerador-de-boleto
        </div>
    );
}

export default Boletos;
