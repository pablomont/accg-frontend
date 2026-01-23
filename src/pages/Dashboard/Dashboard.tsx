import React, { useMemo, useState } from 'react';
import styles from './Dashboard.module.css';
import { Card, PageTitle, Button, Input, Table, Badge, Modal } from '@/components/ui';
import { Users, UserCheck, Receipt, FileText } from 'lucide-react';
import { membersMock } from '@/data/members.mock';
import { accountsMock } from '@/data/accounts.mock';

export function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { totalAssociados, associadosAtivos, boletosPendentes } = useMemo(() => {
        const total = membersMock.length;
        const ativos = membersMock.filter(m => m.status === 'ativo').length;

        const pendentes = accountsMock.filter(boleto => boleto.status !== 'pago').length;

        return {
            totalAssociados: total,
            associadosAtivos: ativos,
            boletosPendentes: pendentes,
        };
    }, [membersMock, accountsMock]);

    const summaryCardsDynamic = [
        {
            id: 1,
            title: 'Total de Associados',
            value: totalAssociados.toString(),
            icon: Users,
            color: 'primary',
        },
        {
            id: 2,
            title: 'Associados Ativos',
            value: associadosAtivos.toString(),
            icon: UserCheck,
            color: 'success',
        },
        {
            id: 3,
            title: 'Despesas do Mês',
            value: 'R$ 12.450,00',
            icon: Receipt,
            color: 'warning',
        },
        {
            id: 4,
            title: 'Boletos Pendentes',
            value: boletosPendentes.toString(),
            icon: FileText,
            color: 'danger',
        },
    ];

    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <div>
                    <PageTitle>Dashboard Financeiro</PageTitle>
                    <p className={styles.welcomeText}>
                        Visão geral da Associação Comercial de Campina Grande.
                    </p>
                </div>
            </div>

            <div className={styles.cardsGrid}>
                {summaryCardsDynamic.map(card => (
                        <Card
                            key={card.id}
                            className={`${styles.card} ${styles[`card${card.color.charAt(0).toUpperCase() + card.color.slice(1)}`]}`}
                        >
                            <div className={styles.cardIcon}>
                                <card.icon size={28} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.cardValue}>{card.value}</span>
                                <span className={styles.cardTitle}>{card.title}</span>
                            </div>
                        </Card>
                ))}
            </div>

            <section>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Transações Recentes</h2>
                    <div className={styles.controls}>
                        <Input
                            placeholder="Buscar transação..."
                            className={styles.inputSearch}
                        />
                        <Button onClick={() => setIsModalOpen(true)}>
                            Nova Despesa
                        </Button>
                    </div>
                </div>

                <Card>
                    <Table>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Descrição</th>
                                <th>Categoria</th>
                                <th>Valor</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accountsMock.map(boleto => (
                                <tr key={boleto.id}>
                                    <td>{new Date(boleto.dataVencimento).toLocaleDateString()}</td>
                                    <td>{boleto.descricao}</td>
                                    <td>Receita</td>
                                    <td>R$ {boleto.valor.toFixed(2)}</td>
                                    <td>
                                        <Badge
                                            variant={
                                                boleto.status === 'pago'
                                                    ? 'success'
                                                    : boleto.status === 'pendente'
                                                    ? 'warning'
                                                    : 'danger'
                                            }
                                        >
                                            {boleto.status.charAt(0).toUpperCase() + boleto.status.slice(1)}
                                        </Badge>
                                    </td>
                                </tr>
                            ))}                 
                        </tbody>
                    </Table>
                </Card>
            </section>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Nova Despesa (Exemplo)"
            >
                <p style={{ marginBottom: '1rem', color: 'var(--color-gray-600)' }}>
                    Este é um exemplo de como o Modal deve funcionar.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                    <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={() => alert('Salvar (simulado)')}>
                        Salvar
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

export default Dashboard;
