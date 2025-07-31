import api from './api';

// Tipos de datos para autenticación
interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

/**
 * Realiza una solicitud de inicio de sesión.  
 * Este stub simula un inicio de sesión exitoso y almacena un token dummy.
 * Sustituye el contenido por una llamada real a tu API backend.
 */
export async function login(payload: LoginPayload) {
  // Simular llamada a `/auth/login`
  const { email } = payload;
  const user = { id: 1, name: 'Usuario', email };
  const token = 'dummy-jwt-token';
  localStorage.setItem('token', token);
  return user;
}

/**
 * Realiza una solicitud de registro.  
 * Este stub simula el registro de un usuario.  
 * Sustituye el contenido por una llamada real a tu API backend.
 */
export async function register(payload: RegisterPayload) {
  const { name, email } = payload;
  // Simular llamada a `/auth/register`
  return { id: 1, name, email };
}

/**
 * Elimina los datos de sesión del almacenamiento local.
 */
export function logout() {
  localStorage.removeItem('token');
}