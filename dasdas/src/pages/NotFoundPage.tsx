import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';

/**
 * Página mostrada cuando la ruta no existe (404).
 */
const NotFoundPage: React.FC = () => (
  <Container>
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Página no encontrada.</p>
      <Link to="/" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600">
        Volver al inicio
      </Link>
    </div>
  </Container>
);

export default NotFoundPage;