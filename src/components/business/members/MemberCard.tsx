import React from 'react';
import { User, Building2 } from 'lucide-react';
import { Associado } from '@/types/associado';
import {Card} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import style from './styles.module.css';

interface MemberCardProps{
    member: Associado;
}