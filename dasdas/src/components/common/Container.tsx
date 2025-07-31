import React, { PropsWithChildren } from 'react';

/**
 * Contenedor estándar para limitar el ancho del contenido de las páginas.
 */
const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">{children}</div>
);

export default Container;