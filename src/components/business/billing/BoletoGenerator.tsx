import React, { useState } from 'react';
import styles from './BoletoGenerator.module.css';
import { Card, Button, Input, Modal } from '@/components/ui';
import { membersMock } from '@/data/members.mock';
import { BoletoFormData } from '@/types/boleto';
import { formatCurrency } from '@/utils/formatters';

const INITIAL_STATE: BoletoFormData = {
    associadoId: '',
    valor: 0,
    dataVencimento: '',
    descricao: ''
    // multa: 0,
    // juros: 0
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
            // [id]: ['valor', 'multa', 'juros'].includes(id) ? (parseFloat(value) || 0) : value
        }));
        if (errors[id as keyof BoletoFormData]) setErrors(prev => ({ ...prev, [id]: '' }));
    };

    const handleGerarCobranca = () => {
        const newErrors: Partial<Record<keyof BoletoFormData, string>> = {};
        if (!formData.associadoId) newErrors.associadoId = 'Selecione um associado.';
        if (formData.valor <= 0) newErrors.valor = 'O valor deve ser maior que zero.';
        if (!formData.dataVencimento) newErrors.dataVencimento = 'Selecione uma data de vencimento.';

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) setShowSuccessModal(true);
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        setFormData(INITIAL_STATE);
    };

    /* COMENTADO: Função WhatsApp
    const handleWhatsApp = () => {
        const dataFormatada = new Date(formData.dataVencimento).toLocaleDateString('pt-BR');
        let message = `Olá ${associadoSelecionado?.nome}, seu boleto de R$ ${formData.valor.toFixed(2)} foi gerado com sucesso!\n Com vencimento em ${dataFormatada}, logo, prepare-se para efetuar o pagamento.`;
        // if ((formData.multa ?? 0) > 0) message += `\nMulta: ${formData.multa}%`;
        // if ((formData.juros ?? 0) > 0) message += `\nJuros: ${formData.juros}%`;
        if (formData.descricao) message += `\nDescrição: ${formData.descricao}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };
    */

    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Gerar Cobrança</h2>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="associadoId" className={styles.label}>Selecione um Associado</label>
                    <select
                        id="associadoId"
                        value={formData.associadoId}
                        onChange={handleChange}
                        className={`${styles.select} ${errors.associadoId ? styles.selectError : ''}`}
                        required
                    >
                        <option value="" disabled>-- Escolha um associado --</option>
                        {membersMock.map(m => <option key={m.id} value={m.id}>{m.nome}</option>)}
                    </select>
                    {errors.associadoId && <span className={styles.errorMessage}>{errors.associadoId}</span>}
                </div>

                <Input id="valor" label="Valor (R$)" type="number" step="0.01" min="0.01"
                    value={formData.valor || ''} onChange={handleChange} error={errors.valor} />

                <Input id="dataVencimento" label="Vencimento" type="date" min={getTodayDate()}
                    value={formData.dataVencimento} onChange={handleChange} error={errors.dataVencimento} />

                {/* Campos de Multa e Juros
                <div className={styles.row}>
                    <Input id="multa" label="Multa (%)" type="number" step="0.1" className={styles.halfInput}
                        value={formData.multa || ''} onChange={handleChange} />
                    <Input id="juros" label="Juros (%)" type="number" step="0.1" className={styles.halfInput}
                        value={formData.juros || ''} onChange={handleChange} />
                </div>
                */}

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
                    {/* Exibição de Multa e Juros
                    {(formData.multa ?? 0) > 0 && <p className={styles.modalText}><strong>Multa:</strong> {formData.multa}%</p>}
                    {(formData.juros ?? 0) > 0 && <p className={styles.modalText}><strong>Juros:</strong> {formData.juros}%</p>}
                    */}
                    {formData.descricao && <p className={styles.modalText}><strong>Descrição:</strong> {formData.descricao}</p>}
                    <div className={styles.modalActions}>
                        {/* COMENTADO: Botão WhatsApp
                        <Button onClick={handleWhatsApp} className={styles.whatsappButton}>Enviar no WhatsApp</Button>
                        */}
                        <Button onClick={handleCloseModal} variant="secondary">Fechar</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}