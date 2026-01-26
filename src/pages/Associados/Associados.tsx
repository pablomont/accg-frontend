import { LayoutGrid, List } from 'lucide-react';
import styles from './Associados.module.css';
import { useState, useEffect } from 'react';
import { MemberCard } from '@/components/business/members/MemberCard';
import { Badge, PageTitle } from '@/components/ui';
import { Table } from '@/components/ui';
import api from '@/services/api'
import { Associado } from '@/types/associado';

export function Associados() {
    const [ viewMode, setViewMode ] = useState<'grid' | 'table'>('grid');
    const [ associados, setAssociados ] = useState<Associado[]>([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<string | null>(null);

    useEffect(() => {
        fetchAssociados();
    }, []);

    const fetchAssociados = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.api.get('/associados');
            setAssociados(response.data);
        } catch (err) {
            console.error('Erro ao buscar associados:', err);
            setError('Erro ao carregar os associados. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleNovoAssociado = () => {
        console.log("Botao clicado") //implementar US03 aqui
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <PageTitle>Gestão de Associados</PageTitle>
                    <p className={styles.subtitle}>Gerencie todos os associados da sua organização.</p>
                </div>
                <button className={styles.addButton} onClick={handleNovoAssociado}> 
                    + Novo Associado
                </button>
            </div>

            <div className={styles.viewControls}>
                <button className={viewMode === 'grid' ? styles.activeBtn : ''} onClick={() => setViewMode('grid')}>
                    <LayoutGrid size ={16} /> Grade
                </button>
                <button className={viewMode === 'table' ? styles.activeBtn : ''} onClick={() => setViewMode('table')}>
                    <List size ={16} /> Tabela
                </button>
            </div>

            <main>
                {loading ? (
                    <p>Carregando associados...</p>
                ) : error ? (
                    <p className={styles.error}>{error}</p>
                ) : (
                    <>
                        {viewMode === 'grid' ? (
                            <div className={styles.gridContainer}>
                                {associados.map((member) => (<MemberCard key={member.id} member={member} />))}
                            </div>
                        ) : (<Table> 
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Documento</th>
                                        <th>Email</th>
                                        <th>Telefone</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {associados.map((member) => (
                                        <tr key={member.id}>
                                            <td><strong>{member.nome}</strong></td>
                                            <td>{member.cpfCnpj}</td>
                                            <td>{member.email}</td>
                                            <td>{member.telefone}</td>
                                            <td>
                                                <Badge variant={member.status === 'ativo' ? 'success' : 'warning'}>
                                                    {member.status === 'ativo' ? 'Ativo' : 'Inativo'}
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}

export default Associados;