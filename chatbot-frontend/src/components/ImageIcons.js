import React from 'react';
import ic1 from '../img/ic1.png';
import ic2 from '../img/ic2.png';
import ic3 from '../img/ic3.png';
import ic4 from '../img/ic4.png';
import ic5 from '../img/ic5.png';
import ic6 from '../img/ic6.png';
import '../ImageIcons.css';

const ImageIcons = () => {
  const images = [
    { src: ic4, alt: 'PAGINA PRINCIPAL' },
    { src: ic3, alt: 'SITIOS WEB' },
    { src: ic2, alt: 'CONTACTOS' },
    { src: ic5, alt: 'CORREO' },
    { src: ic1, alt: 'ACREDITACION' },
    { src: ic6, alt: 'MAS INFORMACION' }
  ];

  return (
    <div className="image-icons-container">
      {images.map((image, index) => (
        <div key={index} className="image-icon">
          <img src={image.src} alt={image.alt} className="icon-image" />
          <p className="icon-label">{image.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageIcons;
