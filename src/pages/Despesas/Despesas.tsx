import { Button, Input, Modal } from "@/components/ui";
import { useState } from "react";
import styles from "./Despesas.module.css";

export function Despesas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descricao, setIsDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
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
  );
}

export default Despesas;
