import { useEffect,useState } from 'react';
import '../styles/Agendamiento.css'


export default function Agendamiento(){

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return(
      <section className="agendamiento">
        <div className='agenda-left'>
          Si eres un estudiante activo, agenda tu clase {isMobile?<span>👇</span>:<span>👉</span>}
        </div>
        <div className='agenda-right'>
          <a href='https://calendly.com/_englishiseasy' target='_blank' rel="noopener noreferrer">
            <button className="btnagenda">
              Agendar
            </button>
          </a>
        </div>
      </section>
  )
}