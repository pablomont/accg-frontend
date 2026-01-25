import { useEffect, useState } from 'react';
import styles from './Boletos.module.css';

import apis from '@/services/api';
import { BoletoGenerator } from '@/components/business/billing/BoletoGenerator';
import { Badge, PageTitle, Table } from '@/components/ui';
import { formatCurrency, formatDate } from '@/utils/formatters';
import { membersMock } from '@/data/members.mock';

type BoletoApi = {
  id: string;
  associadoId: string;
  valor: number;

  dataEmissao?: string;
  dataVencimento?: string;
  vencimento?: string; // Alguns boletos usam este campo

  status?: 'pago' | 'pendente' | 'vencido';

  associado?: {
    nomeCompleto?: string;
    nome?: string;
  };
};

function getAssociadoNome(associadoId: string, associado?: { nomeCompleto?: string; nome?: string }) {
  // Primeiro tenta usar o objeto associado se vier da API
  if (associado?.nomeCompleto) return associado.nomeCompleto;
  if (associado?.nome) return associado.nome;

  // Caso contrário, busca no mock local pelo ID
  const member = membersMock.find(m => m.id === associadoId);
  return member?.nome ?? '—';
}

function isVencidoPorData(dataVencimento: string | undefined, status?: string) {
  if (!dataVencimento) return false;
  if (status === 'pago') return false;

  const hoje = new Date();
  const vencimento = new Date(dataVencimento);

  const hojeSemHora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  const vencimentoSemHora = new Date(
    vencimento.getFullYear(),
    vencimento.getMonth(),
    vencimento.getDate()
  );

  return vencimentoSemHora < hojeSemHora;
}

export function Boletos() {
  const [boletos, setBoletos] = useState<BoletoApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const carregarBoletos = async () => {
    try {
      setLoading(true);
      setErro(null);

      const response = await apis.apiBoletos.get('/boletos');
      setBoletos(response.data);
    } catch (e) {
      console.error('Erro ao buscar boletos', e);
      setErro('Não foi possível carregar o histórico de cobranças.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarBoletos();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <PageTitle>Boletos e Cobranças</PageTitle>
          <p className={styles.subtitle}>Gerencie boletos e cobranças PIX dos associados</p>
        </div>
      </div>

      <div className={styles.grid}>
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>📋 Histórico de Cobranças</h2>
              <p className={styles.cardSubtitle}>{boletos.length} cobrança(s) registrada(s)</p>
            </div>
          </div>

          {loading ? (
            <div className={styles.emptyState}>
              <p>Carregando...</p>
            </div>
          ) : erro ? (
            <div className={styles.emptyState}>
              <p className={styles.emptyStateText}>{erro}</p>
            </div>
          ) : boletos.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyStateIcon}>📭</div>
              <p className={styles.emptyStateText}>Nenhuma cobrança encontrada</p>
            </div>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Associado</th>
                  <th>Valor</th>
                  <th>Vencimento</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {boletos.map((boleto) => {
                  const dataEmissao = boleto.dataEmissao;
                  const venc = boleto.dataVencimento ?? boleto.vencimento;
                  const status = boleto.status ?? 'pendente';

                  return (
                    <tr key={boleto.id}>
                      <td>{dataEmissao ? formatDate(dataEmissao) : '—'}</td>
                      <td>
                        <strong>
                          {getAssociadoNome(boleto.associadoId, boleto.associado)}
                        </strong>
                      </td>
                      <td><strong>{formatCurrency(boleto.valor)}</strong></td>
                      <td>{venc ? formatDate(venc) : '—'}</td>
                      <td>
                        {isVencidoPorData(venc, status) ? (
                          <Badge variant="danger">Vencido</Badge>
                        ) : status === 'pago' ? (
                          <Badge variant="success">Pago</Badge>
                        ) : (
                          <Badge variant="warning">Pendente</Badge>
                        )}
                      </td>
                      <td>⬇️</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </section>

        <aside className={`${styles.card} ${styles.generatorCard}`}>
          <BoletoGenerator onSuccess={carregarBoletos} />
        </aside>
      </div>
    </div>
  );
}

export default Boletos;
