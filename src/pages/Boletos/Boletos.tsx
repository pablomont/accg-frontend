import { useState, useEffect } from 'react';
import { BoletoGenerator } from '../../components/business/billing/BoletoGenerator';
import { Table, Badge } from '@/components/ui';
import { apiBoletos } from '@/services/api';
import { Boleto } from '@/types/boleto';
import { formatCurrency } from '@/utils/formatters';
import styles from './Boletos.module.css';

export function Boletos() {
    const [boletos, setBoletos] = useState<Boleto[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBoletos = async () => {
        try {
            setIsLoading(true);
            const response = await apiBoletos.get('/boletos');
            setBoletos(response.data);
        } catch (error) {
            console.error("Erro ao buscar boletos", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBoletos();
    }, []);

    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'pago':
                return 'success';
            case 'pendente':
                return 'warning';
            case 'vencido':
                return 'danger';
            case 'cancelado':
                return 'neutral';
            default:
                return 'neutral';
        }
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    };

    // Campos de API antigos usavam "vencimento" em vez de "dataVencimento"
    const getDueDate = (boleto: Boleto & { vencimento?: string }) => boleto.dataVencimento || boleto.vencimento || '';
    const getEmissaoDate = (boleto: Boleto) => boleto.dataEmissao || '';
    const getStatus = (boleto: Boleto) => boleto.status || 'pendente';

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Boletos e PIX</h1>
                <p className={styles.subtitle}>Geração de boletos e cobranças PIX</p>
            </div>

            <BoletoGenerator onSuccess={fetchBoletos} />

            <div className={styles.tableSection}>
                <h2 className={styles.sectionTitle}>Boletos Gerados</h2>
                {isLoading ? (
                    <p>Carregando boletos...</p>
                ) : boletos.length === 0 ? (
                    <p>Nenhum boleto encontrado.</p>
                ) : (
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Associado ID</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Vencimento</th>
                                <th>Emissão</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boletos.map(boleto => (
                                <tr key={boleto.id}>
                                    <td>{boleto.id}</td>
                                    <td>{boleto.associadoId}</td>
                                    <td>{boleto.descricao || '-'}</td>
                                    <td>{formatCurrency(boleto.valor)}</td>
                                    <td>{formatDate(getDueDate(boleto))}</td>
                                    <td>{formatDate(getEmissaoDate(boleto))}</td>
                                    <td>
                                        <Badge variant={getStatusVariant(getStatus(boleto))}>
                                            {getStatus(boleto).toUpperCase()}
                                        </Badge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </div>
        </div>
    );
}

export default Boletos;
