import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Datos de ejemplo para el gráfico.  
 * En una aplicación real, se obtendrían del API.
 */
const data = [
  { name: 'Ene', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Abr', value: 200 },
  { name: 'May', value: 600 },
  { name: 'Jun', value: 700 },
];

/**
 * Sección que contiene un gráfico de líneas responsivo.  
 * Utiliza Recharts para renderizar los datos de ejemplo.
 */
const ChartSection: React.FC = () => (
  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Métricas Mensuales</h3>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
          <XAxis dataKey="name" stroke="currentColor" className="text-xs" />
          <YAxis stroke="currentColor" className="text-xs" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ChartSection;