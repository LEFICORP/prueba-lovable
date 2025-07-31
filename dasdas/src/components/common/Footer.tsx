import React from 'react';

/**
 * Pie de página simple que muestra el año actual y el nombre de la aplicación.
 */
const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-gray-800 py-4 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400 text-sm">
      © {new Date().getFullYear()} Mi App. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;