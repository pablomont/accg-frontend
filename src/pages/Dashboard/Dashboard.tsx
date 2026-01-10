import React from 'react';
import styles from './Dashboard.module.css';
import { Card, PageTitle, Button, Input, Table, Badge, Modal } from '@/components/ui';
import { summaryCards } from '@/data/dashboard.mock';
import { accountsMock } from '@/data/accounts.mock';

export function Dashboard() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const pendingBillsCount = accountsMock.filter(
        (account) => account.status !== 'pago'
    ).length;

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
                {summaryCards.map((card) => {
                    const cardValue =
                        card.color === 'danger'
                            ? pendingBillsCount
                            : card.value;

                    return (
                        <Card
                            key={card.id}
                            className={`${styles.card} ${styles[`card${card.color.charAt(0).toUpperCase() + card.color.slice(1)}`]}`}
                        >
                            <div className={styles.cardIcon}>
                                <card.icon size={28} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.cardValue}>{cardValue}</span>
                                <span className={styles.cardTitle}>{card.title}</span>
                            </div>
                        </Card>
                    );
                })}
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
                            <tr>
                                <td>10/12/2023</td>
                                <td>Mensalidade - João Silva</td>
                                <td>Receita</td>
                                <td>R$ 150,00</td>
                                <td><Badge variant="success">Pago</Badge></td>
                            </tr>
                            <tr>
                                <td>09/12/2023</td>
                                <td>Conta de Luz</td>
                                <td>Despesa Fixa</td>
                                <td>R$ 450,00</td>
                                <td><Badge variant="success">Pago</Badge></td>
                            </tr>
                            <tr>
                                <td>08/12/2023</td>
                                <td>Manutenção Ar-Condicionado</td>
                                <td>Manutenção</td>
                                <td>R$ 200,00</td>
                                <td><Badge variant="warning">Pendente</Badge></td>
                            </tr>
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
