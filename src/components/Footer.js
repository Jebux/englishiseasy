import "../styles/Footer.css"
import { Link} from "react-router-dom"
import { animateScroll } from 'react-scroll';

export default function Footer(){

  const handleClick = () => {
    animateScroll.scrollToTop({duration:20,});
  };


  return(
    <>
      <footer>
          <div className="contenedor-footer">
            <div className="contenedor-footer-in">
            <h4>Compañía</h4>
            <p>Nosotros</p>
            <p><Link to="/contacto" onClick={handleClick}>Contacto</Link></p>
            </div>
          </div >
          <div className="contenedor-footer">
            <div className="contenedor-footer-in">
              <h4>Cursos</h4>
              <p>Individuales</p>
              <p>Grupales</p>
            </div>
          </div>
          <div className="contenedor-footer">
            <div className="contenedor-footer-in">
            <h4>Recursos</h4>
            <p><Link to="/preguntas-frecuentes" onClick={handleClick}>Preguntas frecuentes</Link></p>
            </div>
          </div>     
      </footer>
    </>
  );

};