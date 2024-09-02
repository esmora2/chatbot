import React from 'react';
import { FaUniversity, FaUserGraduate, FaLaptop, FaLanguage, FaFacebook, FaYoutube, FaLinkedin, FaDoorOpen } from 'react-icons/fa'; // Importa los íconos que desees
import '../VerticalNavbar.css'; // Importa el archivo CSS para el componente

const VerticalNavbar = () => {
  const links = [
    { name: 'ESPE - Pagina Oficial', url: 'https://www.espe.edu.ec/', icon: <FaUniversity /> },
    { name: 'Mi ESPE - Sitio Estudiantil', url: 'https://srvcas.espe.edu.ec/authenticationendpoint/login.do?Name=PreLoginRequestProcessor&commonAuthCallerPath=%252Fcas%252Flogin&forceAuth=true&passiveAuth=false&service=https%3A%2F%2Fmiespe.espe.edu.ec%2Fc%2Fportal%2Flogin&tenantDomain=carbon.super&sessionDataKey=9bbaf15b-4ada-428a-8f7a-cbf534ad56c0&relyingParty=portal_luminis&type=cas&sp=portal_luminis&isSaaSApp=false&authenticators=BasicAuthenticator:LOCAL', icon: <FaUserGraduate /> },
    { name: 'Mi Campus', url: 'https://micampus.espe.edu.ec/', icon: <FaLaptop /> },
    { name: 'Idiomas - ESPE', url: 'https://idiomas.espe.edu.ec/', icon: <FaLanguage /> },
    { name: 'Facebook - ESPE', url: 'https://www.facebook.com/ESPE.U/?locale=es_LA', icon: <FaFacebook /> },
    { name: 'Universidad de las Fuerzas Armadas', url: 'https://www.youtube.com/@universidaddelasfuerzasarm4608', icon: <FaYoutube /> },
    { name: 'Universidad de las Fuerzas Armadas', url: 'https://www.linkedin.com/school/espe-universidad-de-las-fuerzas-armadas/mycompany/', icon: <FaLinkedin/> },
    { name: 'Admisiones', url: 'https://admisiones.espe.edu.ec/#/', icon: <FaDoorOpen /> },
  ];

  return (
    <div className="vertical-navbar">
      <h3 className="navbar-title">Páginas Sugeridas</h3>
      <div className="navbar-links">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <span className="icon">{link.icon}</span>
              <span className="link-text">{link.name}</span>
            </a>
            {index < links.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default VerticalNavbar;
