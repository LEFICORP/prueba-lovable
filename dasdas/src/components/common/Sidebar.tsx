import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Barra lateral para la navegación interna del dashboard.  
 * Se oculta en pantallas pequeñas y se muestra en dispositivos medianos o mayores.
 */
const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-100 dark:bg-gray-900 w-64 hidden md:block h-screen sticky top-16">
      <nav className="p-4 space-y-2">
        <Link
          to="/dashboard"
          className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          Dashboard
        </Link>
        <Link
          to="/table"
          className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          Tabla de Datos
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;