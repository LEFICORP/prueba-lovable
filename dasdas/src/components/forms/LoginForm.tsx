import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

/**
 * Tipos de los campos del formulario de login.
 */
interface LoginInputs {
  email: string;
  password: string;
}

/**
 * Formulario de inicio de sesión.  
 * Utiliza React Hook Form para la gestión del estado y validación de campos.
 */
const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginInputs) => {
    await login(data.email, data.password);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', { required: 'Email es requerido' })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          {...register('password', { required: 'Contraseña es requerida' })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
      >
        {isSubmitting ? 'Ingresando…' : 'Ingresar'}
      </button>
    </form>
  );
};

export default LoginForm;