import React from 'react';
import Sidebar from '../components/common/Sidebar';
import DataTable from '../components/dashboard/DataTable';
import Container from '../components/common/Container';

/**
 * Página dedicada a mostrar la tabla de datos con paginación.
 */
const TablePage: React.FC = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Container>
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Tabla de Datos</h1>
        <DataTable />
      </Container>
    </div>
  </div>
);

export default TablePage;