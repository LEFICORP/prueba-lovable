import React from 'react';

/**
 * Propiedades aceptadas por el componente MetricCard.
 */
interface MetricCardProps {
  title: string;
  value: string | number;
}

/**
 * Tarjeta reutilizable para mostrar métricas en el dashboard.  
 * Muestra un título y un valor destacado.
 */
const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => (
  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
  </div>
);

export default MetricCard;