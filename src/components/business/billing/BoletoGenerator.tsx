import React, { useState } from 'react';
import styles from './BoletoGenerator.module.css';
import { Card, Button, Input, Modal, Select } from '@/components/ui';
import { membersMock } from '@/data/members.mock';
import { BoletoFormData } from '@/types/boleto';
import { formatCurrency } from '@/utils/formatters';

const INITIAL_STATE: BoletoFormData = {
    associadoId: '',
    valor: 0,
    dataVencimento: '',
    descricao: ''
};

export function BoletoGenerator() {
    const [formData, setFormData] = useState<BoletoFormData>(INITIAL_STATE);
    const [errors, setErrors] = useState<Partial<Record<keyof BoletoFormData, string>>>({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const associadoSelecionado = membersMock.find(m => m.id === formData.associadoId);

    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: ['valor'].includes(id) ? (parseFloat(value) || 0) : value
        }));
        if (errors[id as keyof BoletoFormData]) setErrors(prev => ({ ...prev, [id]: '' }));
    };

    const isPastDate = (date: string) => {
        if (!date) return false;
        return date < getTodayDate();
    };

    const handleGerarCobranca = () => {
        const newErrors: Partial<Record<keyof BoletoFormData, string>> = {};
        if (!formData.associadoId) newErrors.associadoId = 'Selecione um associado.';
        if (formData.valor <= 0) newErrors.valor = 'O valor deve ser maior que zero.';
        if (!formData.dataVencimento) newErrors.dataVencimento = 'Selecione uma data de vencimento.';
        else if (isPastDate(formData.dataVencimento)) newErrors.dataVencimento = 'A data de vencimento não pode ser anterior à data atual.';

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) setShowSuccessModal(true);
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        setFormData(INITIAL_STATE);
    };

    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Gerar Cobrança</h2>
                </div>

                <Select
                    id="associadoId"
                    label="Selecione um Associado"
                    value={formData.associadoId}
                    onChange={handleChange}
                    options={membersMock.map(m => ({ label: m.nome, value: m.id }))}
                    placeholder="-- Escolha um associado --"
                    error={errors.associadoId}
                    required
                />

                <Input 
                    id="valor" 
                    label="Valor (R$)" 
                    type="text" 
                    lang="pt-BR"
                    value={formData.valor ? formData.valor.toFixed(2) : ''} 
                    onChange={handleChange} 
                    error={errors.valor} 
                />

                <Input 
                    id="dataVencimento" 
                    label="Vencimento" 
                    type="date" 
                    min={getTodayDate()}
                    value={formData.dataVencimento} 
                    onChange={handleChange} 
                    error={errors.dataVencimento} 
                />

                <Input id="descricao" label="Descrição (Opcional)" type="text" placeholder="A descrição informada será impressa na fatura"
                    value={formData.descricao} onChange={handleChange} />

                <div className={styles.footer}>
                    <Button onClick={handleGerarCobranca} className={styles.button}>Gerar Cobrança</Button>
                </div>
            </Card>

            <Modal isOpen={showSuccessModal} onClose={handleCloseModal} title="Cobrança Gerada!">
                <div className={styles.modalContent}>
                    <p className={styles.modalText}>
                        Boleto para <strong>{associadoSelecionado?.nome}</strong> no valor de <strong>{formatCurrency(formData.valor)}</strong> gerado com sucesso. 
                    </p>
                    {formData.descricao && <p className={styles.modalText}><strong>Descrição:</strong> {formData.descricao}</p>}
                    <div className={styles.modalActions}>
                        <Button onClick={handleCloseModal} variant="secondary">Fechar</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}