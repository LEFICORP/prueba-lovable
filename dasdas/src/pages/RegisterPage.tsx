import React from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import Container from '../components/common/Container';

/**
 * Página que muestra el formulario de registro.
 */
const RegisterPage: React.FC = () => (
  <Container>
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">Crear Cuenta</h2>
      <RegisterForm />
    </div>
  </Container>
);

export default RegisterPage;