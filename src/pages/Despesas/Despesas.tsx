import styles from "./Despesas.module.css";
import { Badge, PageTitle, Table, Button, Input, Modal } from "@/components/ui";
import { financeMock, categoriesMock } from "@/data/finance.mock";
import { formatDate, formatCurrency } from "@/utils";
import { useState } from "react";


export function Despesas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descricao, setIsDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");

  const getCategoriaNome = (categoriaId: string) => {
    const categoria = categoriesMock.find((c) => c.id === categoriaId);
    return categoria ? categoria.nome : "—";
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Despesas</h1>
        <p className={styles.subtitle}>
          Controle de despesas e plano de contas
        </p>
      </div>

      <div className={styles.headerActions}>
        <Button className={styles.deButton} onClick={() => setIsModalOpen(true)}>+ Nova Despesa </Button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Nova Despesa"
        >
          <div className={styles.controls}>
            <label>Descrição</label>
            <Input
              placeholder="Ex: Conta de Luz"
              value={descricao}
              onChange={(e)=> setIsDescricao(e.target.value)}
            />
          </div>

          <div className={styles.controls}>
            <label>Valor</label>
            <Input
            placeholder="R$ 0,00"
            value={valor}
            onChange={(e)=> setValor(e.target.value)}
            />
          </div>

          <div className={styles.controls}>
            <label>Categoria</label>
            <select
              value={categoria}
              onChange={(e)=> setCategoria(e.target.value)}
              className={styles.select}
              >
                  <option value="fixa">Fixa</option>
                  <option value="variavel">Variavel</option>
          </select>
          </div>

          <div
            className={styles.actionsBox}
          >
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancelar
          </Button>
          <Button className={styles.deButton} onClick={() => alert(`${descricao} | ${valor} | ${categoria}`)}>
              Salvar
          </Button>
          </div>

        </Modal>
      </div>

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
