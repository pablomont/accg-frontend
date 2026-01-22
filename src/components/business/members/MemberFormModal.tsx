import { Button, Modal } from "@/components/ui";
import styles from './MemberFormModal.module.css'
import { useState } from "react";

interface MemberFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MemberFormModal({isOpen, onClose}: MemberFormModalProps){
    const reset = () => {
            setNome('');
            setTelefone('');
            setDocumento('');
            setEmail('');
        };

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [documento, setDocumento] = useState('');
    const [email, setEmail] = useState('');

    const handleSave = () => {
        if (!nome || !telefone || !documento || !email) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }
        alert("Associado salvo com sucesso.");
        reset();
        onClose(); 
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="+ Novo Associado">
            <div className={styles.container}>

                <div className={styles.field}>
                    <label>Nome Completo</label>
                    <input 
                    type="text" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite o nome completo"/>
                </div>

                <div className={styles.field}>
                    <label>Telefone</label>
                    <input 
                    type="text" 
                    placeholder="(00) 00000-0000"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label>CPF/CNPJ</label>
                    <input 
                    type="text" 
                    placeholder="000.000.000-00 ou 00.000.000/0001-00"
                    value={documento}
                    onChange={(e) => setDocumento(e.target.value)}/>
                </div>

                <div className={styles.field}>
                    <label>E-mail</label>
                    <input 
                    type="email" 
                    placeholder="email@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className={styles.field}>
                    <label>Tipo de Pessoa</label>
                    <div className={styles.radioGroup}>
                        <label>
                            <input type="radio" name="tipo" value="fisica" defaultChecked/> Pessoa Física
                        </label>
                        <label>
                            <input type="radio" name="tipo" value="juridica"/> Pessoa Jurídica
                        </label>
                    </div>
                </div>
                
                <div className={styles.footer}>
                    <button className={styles.cancelBtn} onClick={onClose}>Cancelar</button>
                    <button className={styles.saveBtn} onClick={handleSave}>Salvar</button>
                </div>
            </div>
        </Modal>
    )
}