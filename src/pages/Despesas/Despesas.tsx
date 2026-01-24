import styles from "./Despesas.module.css";
import {
  Badge,
  Select,
  PageTitle,
  Table,
  Button,
  Input,
  Modal,
} from "@/components/ui";
import { categoriesMock } from "@/data/finance.mock";
import { formatDate, formatCurrency } from "@/utils";
import { useEffect, useState } from "react";
import api from "@/services/api";

export function Despesas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [despesas, setDespesas] = useState<any[]>([]);

  const getCategoriaNome = (categoriaId: string) => {
    const categoria = categoriesMock.find((c) => c.id === categoriaId);
    return categoria ? categoria.nome : "—";
  };

  // 🔹 BUSCAR DESPESAS (GET)
  useEffect(() => {
    api
      .get("/despesas")
      .then((response: any) => {
        setDespesas(response.data);
      })
      .catch((error: any) => {
        console.error("Erro ao buscar despesas", error);
      });
  }, []);

  // 🔹 SALVAR DESPESA (POST)
  const handleSave = async () => {
    if (!descricao || !valor || !categoria) {
      alert("Preencha todos os campos");
      return;
    }

    const novaDespesa = {
      descricao,
      valor: Number(valor),
      categoriaId: categoria,
      status: "pendente",
      data: new Date().toISOString(),
    };

    try {
      await api.post("/despesas", novaDespesa);

      const response: any = await api.get("/despesas");
      setDespesas(response.data);

      alert("Despesa salva com sucesso!");
      setIsModalOpen(false);
      setDescricao("");
      setValor("");
      setCategoria("");
    } catch (error: any) {
      console.error(error);
      alert("Erro ao salvar despesa");
    }
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
        <Button
          className={styles.deButton}
          onClick={() => setIsModalOpen(true)}
        >
          + Nova Despesa
        </Button>

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
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className={styles.controls}>
            <Select
              label="Categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              options={[
                { label: "Fixa", value: "fixa" },
                { label: "Variável", value: "variavel" },
              ]}
            />
          </div>

          <div className={styles.actionsBox}>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button className={styles.deButton} onClick={handleSave}>
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
          {despesas.map((despesa) => (
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
