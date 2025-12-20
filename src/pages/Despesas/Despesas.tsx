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
        <tbody></tbody>
      </Table>
    </div>
  );
}

export default Despesas;
