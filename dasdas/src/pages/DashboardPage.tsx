import React from 'react';
import Sidebar from '../components/common/Sidebar';
import MetricCard from '../components/dashboard/MetricCard';
import ChartSection from '../components/dashboard/ChartSection';
import Container from '../components/common/Container';

/**
 * Página principal del dashboard.  
 * Muestra un resumen de métricas y gráficos.  
 * Incluye una barra lateral para la navegación interna.
 */
const DashboardPage: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Container>
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <MetricCard title="Usuarios" value={120} />
            <MetricCard title="Ventas" value="$12k" />
            <MetricCard title="Visitas" value={3500} />
            <MetricCard title="Tareas" value={15} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ChartSection />
            <ChartSection />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DashboardPage;