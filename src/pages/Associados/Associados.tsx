import { LayoutGrid, List } from 'lucide-react';
import { membersMock } from '@/data/members.mock'
import styles from './Associados.module.css';
import { useState } from 'react';

export default function Associados() {
    const [ viewMode, setViewMode ] = useState<'grid' | 'table'>('grid'); //para alternar entre a visualização de tabela ou grade

    const handleNovoAssociado = () => {
        console.log("Botao clicado") //implementar US03 aq
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
                                        <span className={`${styles.badge} ${member.status === 'ativo' ? styles.active : styles.inactive}`}>
                                            {member.status}
                                        </span>
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

//temporario ate ser implementado o US01 
const MemberCard = ({ member }: any) => (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        {member.nome}
    </div>
);