import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAppStore } from '../../state/store';

/**
 * Barra de navegación principal.  
 * Incluye enlaces a las secciones de la aplicación, un alternador de tema y
 * acciones de autenticación (login/registro o logout según corresponda).  
 * Es completamente responsiva, mostrando un menú desplegable en móviles.
 */
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useAppStore();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center text-primary font-bold">
              Mi App
            </Link>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/dashboard" className="text-gray-500 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link to="/table" className="text-gray-500 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Tabla
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              className="p-2 text-gray-400 hover:text-primary focus:outline-none"
              onClick={toggleTheme}
              aria-label="Alternar tema"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            {user ? (
              <>
                <span className="text-gray-700 dark:text-gray-200 mx-2">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-primary"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-primary">
                  Login
                </Link>
                <Link to="/register" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-primary">
                  Registro
                </Link>
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary focus:outline-none"
              aria-label="Menú"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-200 hover:text-primary" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
            <Link to="/table" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-200 hover:text-primary" onClick={() => setMenuOpen(false)}>
              Tabla
            </Link>
            <button onClick={toggleTheme} className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-200 hover:text-primary">
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            {user ? (
              <button onClick={handleLogout} className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-200 hover:text-primary">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-200 hover:text-primary" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-200 hover:text-primary" onClick={() => setMenuOpen(false)}>
                  Registro
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;