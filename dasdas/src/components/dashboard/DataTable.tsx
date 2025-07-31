import React, { useState } from 'react';

/**
 * Estructura de fila para la tabla de datos.  
 * En una aplicación real, estos datos provendrían de la API.
 */
interface TableRow {
  id: number;
  name: string;
  email: string;
}

// Datos de ejemplo para poblar la tabla
const rows: TableRow[] = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: `Usuario ${i + 1}`,
  email: `usuario${i + 1}@example.com`,
}));

const pageSize = 10;

/**
 * Componente de tabla con paginación simple.  
 * Muestra un número determinado de filas por página y permite navegar entre páginas.
 */
const DataTable: React.FC = () => {
  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(rows.length / pageSize);
  const currentRows = rows.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Tabla de Usuarios</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {currentRows.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700 dark:text-gray-200">{row.id}</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700 dark:text-gray-200">{row.name}</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700 dark:text-gray-200">{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md disabled:opacity-50"
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
        >
          Anterior
        </button>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Página {page + 1} de {pageCount}
        </span>
        <button
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md disabled:opacity-50"
          disabled={page === pageCount - 1}
          onClick={() => setPage((p) => Math.min(p + 1, pageCount - 1))}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default DataTable;