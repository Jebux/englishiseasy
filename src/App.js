import './App.css';
import Navegation from './components/Navegation';
import Firma from './components/Firma';
import Footer from './components/Footer';
import WA from "./assets/img/whatsapp.svg"

function App() {
  return (
    <>
      <Navegation />
      
      <Footer />

      <Firma />


      <div class="btn-wsp">
        <a href="https://api.whatsapp.com/send?phone=573006247515&text=Hola%2C%20estuve%20revisando%20la%20informaci%C3%B3n%20de%20la%20p%C3%A1gina%20y%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n%20%F0%9F%99%82"  target="_blank" rel="noopener noreferrer">
	        <img className='img-wsp' src={WA} alt="Whatsapp" />
	      </a>
      </div>
      
    </>
  );
}

export default App;
