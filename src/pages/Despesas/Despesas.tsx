import { Badge, PageTitle, Table } from "@/components/ui";
import { financeMock, categoriesMock } from "@/data/finance.mock";
import { formatDate, formatCurrency } from "@/utils";
import styles from './Despesas.module.css';
import { FinancialSummary, Transaction } from '@/components/business/finance/FinancialSummary';

export function Despesas() {
  const getCategoriaNome = (categoriaId: string) => {
    const categoria = categoriesMock.find((c) => c.id === categoriaId);
    return categoria ? categoria.nome : "—";
  };

  const mockTransactions: Transaction[] = [
                {amount: 5000, type: 'income'},
                {amount: 1200, type: 'expense'},
                {amount: 800, type: 'expense'},
                {amount: 2500, type: 'income'},
                {amount: 1500, type: 'income'}
            ]
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Despesas</h1>
        <p className={styles.subtitle}>
          Controle de despesas e plano de contas
        </p>
      </div>

      <FinancialSummary transactions={mockTransactions} />

      <PageTitle>Livro Caixa</PageTitle>

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
          {financeMock.map((despesa) => (
            <tr key={despesa.id}>
              <td>{formatDate(despesa.data)}</td>
              <td>{despesa.descricao}</td>
              <td>{getCategoriaNome(despesa.categoriaId)}</td>
              <td>{formatCurrency(despesa.valor)}</td>
              <td>
                {despesa.status === "pago" ? (
                  <Badge variant="success">Pago</Badge>
                ) : (
                  <Badge variant="warning">Pendente</Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Despesas;
