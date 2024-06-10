import React from 'react';
import '../styles/Anuncios.css';

const Anuncios = () => {
  return (
    <div className="anuncios">
      <img src="/path-to-your-announcement-image.jpg" alt="Anuncios" />
      <div className="anuncios-text">
        <h2>Anuncio Especial</h2>
        <p>¡Descubre nuestras ofertas especiales y nuevos productos!</p>
      </div>
    </div>
  );
};

export default Anuncios;
