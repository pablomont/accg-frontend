import { Receipt } from "lucide-react";
import styles from "./Despesas.module.css";
import { Badge } from "@/components/ui";
import { PageTitle } from "@/components/ui";
import { financeMock } from "@/data/finance.mock";
import { Table } from "@/components/ui";

export function Despesas() {
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
          <th>Data</th>
          <th>Descrição</th>
          <th>Categoria</th>
          <th>Valor</th>
          <th>Status</th>
        </thead>
        <tbody>
             {financeMock.map((despesa) => (
          <tr key={despesa.id}>
            <td>{new Date(despesa.data).toLocaleDateString('pt-BR')}</td>
            <td>{despesa.descricao}</td>
            <td>{despesa.categoriaId}</td>
            <td>R$ {despesa.valor.toFixed(2)}</td>
            <td>{despesa.status === "pago" ? (
                <Badge variant="success">Pago</Badge>
            ) : (
                <Badge variant="warning">Pendente</Badge>
            )}</td>
            
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Despesas;
