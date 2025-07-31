import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import Container from '../components/common/Container';

/**
 * Página que muestra el formulario de inicio de sesión.
 */
const LoginPage: React.FC = () => (
  <Container>
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">Iniciar Sesión</h2>
      <LoginForm />
    </div>
  </Container>
);

export default LoginPage;