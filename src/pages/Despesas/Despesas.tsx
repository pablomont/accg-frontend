import styles from "./Despesas.module.css";
import { Badge, PageTitle, Table } from "@/components/ui";
import { financeMock, categoriesMock } from "@/data/finance.mock";

export function Despesas() {
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
              <td>{new Date(despesa.data).toLocaleDateString("pt-BR")}</td>
              <td>{despesa.descricao}</td>
              <td>{getCategoriaNome(despesa.categoriaId)}</td>
              <td>R$ {despesa.valor.toFixed(2)}</td>
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
