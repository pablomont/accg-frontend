import { Users, UserCheck, Receipt, FileText } from 'lucide-react';

export const summaryCards = [
    {
        id: 1,
        title: 'Total de Associados',
        value: '150',
        icon: Users,
        color: 'primary',
    },
    {
        id: 2,
        title: 'Associados Ativos',
        value: '142',
        icon: UserCheck,
        color: 'success',
    },
    {
        id: 3,
        title: 'Despesas do Mês',
        value: 'R$ 12.450,00',
        icon: Receipt,
        color: 'warning',
    },
    {
        id: 4,
        title: 'Boletos Pendentes',
        value: '23',
        icon: FileText,
        color: 'danger',
    },
];
