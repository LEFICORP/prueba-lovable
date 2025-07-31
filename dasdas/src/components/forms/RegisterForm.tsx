import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

/**
 * Tipos de los campos del formulario de registro.
 */
interface RegisterInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * Formulario de registro de usuarios.  
 * Incluye validación de coincidencia de contraseñas.
 */
const RegisterForm: React.FC = () => {
  const {
    register: registerField,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInputs>();
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterInputs) => {
    await registerUser(data.name, data.email, data.password);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          {...registerField('name', { required: 'Nombre es requerido' })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...registerField('email', { required: 'Email es requerido' })}
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
          {...registerField('password', {
            required: 'Contraseña es requerida',
            minLength: { value: 6, message: 'Mínimo 6 caracteres' },
          })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="confirmPassword">
          Confirmar Contraseña
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...registerField('confirmPassword', {
            required: 'Confirmación es requerida',
            validate: (value) => value === watch('password') || 'Las contraseñas no coinciden',
          })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
      >
        {isSubmitting ? 'Registrando…' : 'Registrarse'}
      </button>
    </form>
  );
};

export default RegisterForm;