import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';

/**
 * Página de aterrizaje que presenta brevemente la aplicación y ofrece un call‑to‑action.
 */
const HomePage: React.FC = () => (
  <Container>
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Bienvenido a Mi App</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Construye dashboards, administra tus datos y mantente al día con métricas en tiempo real.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/register"
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600"
        >
          Empezar
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Ingresar
        </Link>
      </div>
    </div>
  </Container>
);

export default HomePage;