import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Dashboard } from '@/pages/Dashboard';
import { Associados } from '@/pages/Associados';
import { Despesas } from '@/pages/Despesas';
import { Boletos } from '@/pages/Boletos';
import { NotFound } from '@/pages/NotFound';

export function AppRoutes() {
    return (
        <Routes>
            {/* Redireciona raiz para dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Rotas com layout principal */}
            <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/associados" element={<Associados />} />
                <Route path="/despesas" element={<Despesas />} />
                <Route path="/boletos" element={<Boletos />} />
            </Route>

            {/* Página 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
