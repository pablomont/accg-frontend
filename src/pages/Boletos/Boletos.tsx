import styles from './Boletos.module.css';

import { accountsMock } from '@/data/accounts.mock';
import { BoletoGenerator } from '@/components/business/billing/BoletoGenerator';
import { Badge, PageTitle, Table } from '@/components/ui';
import { formatCurrency, formatDate } from '@/utils/formatters';



function isVencidoPorData(dataVencimento: string, status: string) {
    if (status === 'pago') return false;

    const hoje = new Date();
    const vencimento = new Date(dataVencimento);

    
    // compara apenas a data (sem hora)
    const hojeSemHora = new Date(
        hoje.getFullYear(),
        hoje.getMonth(),
        hoje.getDate()
    );

    const vencimentoSemHora = new Date(
        vencimento.getFullYear(),
        vencimento.getMonth(),
        vencimento.getDate()
    );

    return vencimentoSemHora < hojeSemHora;
}


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
                    <Table>
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

                                    <td>
                                        {isVencidoPorData(boleto.dataVencimento, boleto.status) ? (
                                            <Badge variant="danger">Vencido</Badge>
                                        ) : boleto.status === 'pago' ? (
                                            <Badge variant="success">Pago</Badge>
                                        ) : (
                                            <Badge variant="warning">Pendente</Badge>
                                        )}
                                    </td>

                                    <td>⬇</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
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
