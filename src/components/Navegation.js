import { Routes, Route, Link } from "react-router-dom";
import { useEffect,useState } from "react";
import "../styles/Navegation.css";
import logofull from '../assets/img/logofull.svg'
import navicon from '../assets/img/navicon.svg'
import Homepage from "./Homepage";
import Planes from "./Planes";
import Contacto from "./Contacto"
import PreguntasFrecuentes from "./PreguntasFrecuentes";
	
export default function Navegation() {

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Agregamos un estado para controlar si el menú está abierto

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="">
        <input type="checkbox" id="check" checked={menuOpen} />
        <label htmlFor="check" className="checkbtn" onClick={handleMenuToggle}>
          <img className="menu-collapsed" src={navicon} alt="menú" />
        </label>
        <label className="logo">
          <Link to="/" onClick={handleLinkClick}>
            {isMobile ? <span>EIE</span> : <span>English is Easy</span>}
          </Link>
        </label>
        <ul className={`ul-navbar ${menuOpen ? "open" : ""}`}>
          <li className="li-navbar">
            <Link to="/" className="active" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li className="li-navbar">
            <Link to="/planes" onClick={handleLinkClick}>
              Planes
            </Link>
          </li>
          <li className="li-navbar">
            <Link to="/contacto" onClick={handleLinkClick}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/planes" element={<Planes />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />}></Route>


      </Routes>
  </>
 ) 
};