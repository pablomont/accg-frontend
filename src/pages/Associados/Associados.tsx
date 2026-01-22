import { LayoutGrid, List } from 'lucide-react';
import { membersMock } from '@/data/members.mock'
import styles from './Associados.module.css';
import { useState } from 'react';
import { MemberCard } from '@/components/business/members/MemberCard';
import { Badge, PageTitle } from '@/components/ui';
import { Table } from '@/components/ui';
import { MemberFormModal } from '@/components/business/members/MemberFormModal';

export function Associados() {
    const [ viewMode, setViewMode ] = useState<'grid' | 'table'>('grid');
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleNovoAssociado = () => {
        setIsModalOpen(true);
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
                {viewMode === 'grid' ? (
                    <div className={styles.gridContainer}>
                        {membersMock.map((member) => (<MemberCard key={member.id} member={member} />))}
                    </div>
                ) : (<Table> 
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Documento</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {membersMock.map((member) => (
                                <tr key={member.id}>
                                    <td><strong>{member.nome}</strong></td>
                                    <td>{member.cpfCnpj}</td>
                                    <td>{member.email}</td>
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
            </main>
            <MemberFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
    );
}

export default Associados;