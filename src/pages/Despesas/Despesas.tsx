import { Badge, Select, PageTitle, Table, Button, Input, Modal, Card } from "@/components/ui";
import { financeMock, categoriesMock } from "@/data/finance.mock";
import { formatDate, formatCurrency, maskCurrency } from "@/utils";
import { useState } from "react";
import styles from './Despesas.module.css';
import { FinancialSummary, Transaction } from '@/components/business/finance/FinancialSummary';

export function Despesas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");

  const getCategoriaNome = (categoriaId: string) => {
    const categoria = categoriesMock.find((c) => c.id === categoriaId);
    return categoria ? categoria.nome : "—";
  };

  const mockTransactions: Transaction[] = [
    { amount: 5000, type: 'income' },
    { amount: 1200, type: 'expense' },
    { amount: 800, type: 'expense' },
    { amount: 2500, type: 'income' },
    { amount: 1500, type: 'income' }
  ]

  const validacaoBotaoSalvar = () => {
    if (!descricao || !valor || !categoria) {
      alert('Todos os campos devem ser preenchidos.')
      return;
    }
    alert('Dados preenchidos com sucesso.')
  }
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <PageTitle>Despesas</PageTitle>
          <p className={styles.subtitle}>
            Controle de despesas e plano de contas
          </p>
        </div>
        <Button className={styles.deButton} onClick={() => setIsModalOpen(true)}>+ Nova Despesa</Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Nova Despesa"
      >
        <div className={styles.controls}>
          <Input
            label="Descrição"
            placeholder="Ex: Conta de Luz"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className={styles.controls}>
          <Input
            label="Valor"
            placeholder="R$ 0,00"
            value={valor}
            onChange={(e) => setValor(maskCurrency(e.target.value))}
          />
        </div>

        <div className={styles.controls}>
          <Select
            label="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            options={[
              { label: 'Fixa', value: 'fixa' },
              { label: 'Variável', value: 'variavel' }
            ]}
          />
        </div>

        <div
          className={styles.actionsBox}
        >
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Cancelar
          </Button>
          <Button className={styles.deButton} onClick={validacaoBotaoSalvar}>
            Salvar
          </Button>
        </div>

      </Modal>

      <FinancialSummary transactions={mockTransactions} />

      <PageTitle>Livro Caixa</PageTitle>

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
      </Card>
    </div >
  );
}

export default Despesas;
