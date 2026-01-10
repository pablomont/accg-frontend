import { LayoutGrid, List } from 'lucide-react';
import { membersMock } from '@/data/members.mock'
import styles from './Associados.module.css';
import { useState } from 'react';
import { MemberCard } from '@/components/business/members/MemberCard';
import { Badge } from '@/components/ui';

export function Associados() {
    const [ viewMode, setViewMode ] = useState<'grid' | 'table'>('grid');

    const handleNovoAssociado = () => {
        console.log("Botao clicado") //implementar US03 aqui
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Gestão de Associados</h1>
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

            <main className={styles.content}>
                {viewMode === 'grid' ? (
                    <div className={styles.gridContainer}>
                        {membersMock.map((member) => (<MemberCard key={member.id} member={member} />))}
                    </div>
                ) : (<table className={styles.table}> 
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
                    </table>
                )}
            </main>
        </div>
    );
}

export default Associados;