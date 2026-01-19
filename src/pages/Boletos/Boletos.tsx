import { useEffect, useState } from 'react';
import styles from './Boletos.module.css';

import { apiBoletos } from '@/services/api';
import { BoletoGenerator } from '@/components/business/billing/BoletoGenerator';
import { Badge, PageTitle, Table } from '@/components/ui';
import { formatCurrency, formatDate } from '@/utils/formatters';

type BoletoApi = {
  id: string;
  valor: number;

  dataEmissao?: string;
  dataVencimento?: string;
  vencimento?: string;

  status?: 'pago' | 'pendente' | 'vencido';

  associado?: {
    nomeCompleto?: string;
    nome?: string;
  };
};

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

      const response = await apiBoletos.get('/boletos');
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
      <PageTitle>Boletos e Cobranças</PageTitle>

      <div className={styles.header}>
        <h1 className={styles.title}>Boletos e PIX</h1>
        <p className={styles.subtitle}>Geração de boletos e cobranças PIX</p>
      </div>

      <div className={styles.grid}>
        <section className={styles.card}>
          <h2>Histórico de Cobranças</h2>

          {loading ? (
            <p>Carregando...</p>
          ) : erro ? (
            <p>{erro}</p>
          ) : (
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
                {boletos.map((boleto) => {
                  const venc = boleto.dataVencimento ?? boleto.vencimento;
                  const status = boleto.status ?? 'pendente';

                  return (
                    <tr key={boleto.id}>
                      <td>{boleto.dataEmissao ? formatDate(boleto.dataEmissao) : '—'}</td>

                      <td>
                        {boleto.associado?.nomeCompleto ??
                          boleto.associado?.nome ??
                          '—'}
                      </td>

                      <td>{formatCurrency(boleto.valor)}</td>

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

                      <td>⬇</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </section>

        <aside className={styles.card}>
          {/* quando gerar cobrança, atualiza a tabela */}
          <BoletoGenerator onSuccess={carregarBoletos} />
        </aside>
      </div>
    </div>
  );
}

export default Boletos;
