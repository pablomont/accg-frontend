import { User, Building2 } from 'lucide-react';
import { Associado } from '@/types/associado';
import {Card} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import styles from './styles.module.css';

interface MemberCardProps{
    member: Associado;
}

export const MemberCard = ({ member }: MemberCardProps) => {
    const isPessoaFisica = member.tipoPessoa === 'fisica';
    const Icon = isPessoaFisica ? User : Building2;

    const badgeVariantColor = member.status == 'ativo' ? 'success' : 'warning';

    return(
        <Card className={styles.container}>

            <div className={styles.iconWrapper}>
                 <Icon size={20}/>
            </div>

            <div className={styles.info}>
                <h3>{member.nome}</h3>
                <p>{isPessoaFisica ? 'Pessoa Física' : 'Pessoa Jurídica'}</p>
            </div>

            <Badge variant={badgeVariantColor}>
                {member.status === 'ativo' ? 'Ativo' : 'Inativo'}
            </Badge>
        </Card>
    )
}

