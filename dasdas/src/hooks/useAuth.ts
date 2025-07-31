import { useAppStore } from '../state/store';
import { login as loginApi, register as registerApi, logout as logoutService } from '../services/authService';

/**
 * Hook personalizado que encapsula la lógica de autenticación.  
 * Permite iniciar sesión, registrar usuarios y cerrar sesión
 * actualizando el estado global de la aplicación.
 */
export function useAuth() {
  const { user, setUser } = useAppStore();

  const login = async (email: string, password: string) => {
    const userData = await loginApi({ email, password });
    setUser(userData);
  };

  const register = async (name: string, email: string, password: string) => {
    const userData = await registerApi({ name, email, password });
    setUser(userData);
  };

  const logout = () => {
    logoutService();
    setUser(null);
  };

  return { user, login, register, logout };
}