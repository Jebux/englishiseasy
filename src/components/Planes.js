import individual from '../assets/img/individual.png'
import group from '../assets/img/group.png'
import '../styles/Planes.css'

export default function Planes(){

  return(
    <>
      <section className="scontenedor-eie">
        <div className='contenedor-eie '>
          <div>
            <h1 className='h1-center'>PLANES</h1>
            <p>Este programa te llevará paso a paso por el camino hacia un proceso de aprendizaje más eficiente a través de inglés, fonética, fonología y mente.</p>
          </div>
          <div className='contenedor-flex'>
            <div className='contenedor-flex-in'>
              <h3>PRUEBA DIAGNÓSTICA</h3>
              <p>Haremos una prueba para diagnosticar tu nivel actual. Este test configura el punto de partida hacia tu ideal con nosotros. Esta prueba se compone de:</p>
              <ul>
                <li className='li-circular'>Test de estilo de aprendizaje (VAKT- Blander & Grinder model, 1920)</li>
                <li className='li-circular'>Test de personalidad (DOPE- Richard Stephenson)</li>
                <li className='li-circular'>Test de Inglés 99 Preguntas (Maastricht University Language Centre, English Department, 2002)</li>
                <li className='li-circular'>1 hora para socializar los resultados del test por ZOOM</li>
              </ul>            
            </div>
            <div className='contenedor-flex-in'>
              <h3>SELECCIONAR PAQUETE DE HORAS</h3>
              <p>El trabajo será establecido en conjunto coach-coachee (profesor- estudiante).</p>
              <p>En la hora de socialización, verificaremos tu objetivo con el inglés y revisaremos qué plan de horas se acomoda más a tu presupuesto y disponibilidad de tiempo de estudio.</p>
              <p>Siempre vamos a encontrarnos por Google Meets.</p>
            </div>
            <div className='contenedor-flex-in'>
              <h3>¿Qué incluyen nuestros paquetes?</h3>
              <ul>
                  <li className='li-circular'>Plan semanal de estudio personalizado. De acuerdo al paquete de horas, son la cantidad de clases guiadas 1-1</li>
                  <li className='li-circular'>Estrategias exclusivas para mejorar tu inglés autónomamente.</li>
                  <li className='li-circular'>Librillo con actividades clave para desarrollar tu mentalidad ganadora.</li>
                  <li className='li-circular'>Compromiso semanal, impulsará el rendimiento para llegar al objetivo que tengas.</li>
                  <li className='li-circular'>Una carpeta individual en Drive que contiene material, plan de clase individual y compromisos.</li>
              </ul>            
            </div>
          </div>
        </div>
      </section>
      <section className="scontenedor-eie">
        <div className='contenedor-eie '>
          <div>
            <h1 className='h1-center'>PRECIOS</h1>
          </div>
          <div className='contenedor-flex'>
            <div className='contenedor-flex-in'>
              <h3>Plan Personal</h3>
              <img className='img-planes' src={individual} alt="plan personal" />           
            </div>
            <div className='contenedor-flex-in'>
              <div>
                <div className='precio-contenedor'>
                  <div className='precio-header'>
                    <h3 className='precio-title'>ESTÁNDAR</h3>
                  </div>
                  <div className='precio-body'>
                    <h2>$49<span className='dolar-span'>USD</span></h2>
                    <h5>Mensuales</h5>
                    <p>12 horas de clase</p>
                    <a href="https://api.whatsapp.com/send?phone=573006247515&text=Hola%2C%20me%20quiero%20suscribir%20a%20un%20plan%20de%20estudios%2C%20me%20puedes%20dar%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer">
                      <button className='btn-eie'>Suscribirme</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='contenedor-flex-in'>
            <div>
                <div className='precio-contenedor'>
                  <div className='precio-header'>
                    <h4 className='precio-title'>INTENSIVO</h4>
                  </div>
                  <div className='precio-body'>
                    <h2>$297<span className='dolar-span'>USD</span></h2>
                    <h5>Mensuales</h5>
                    <p>48 horas de clase</p>
                    <a href="https://api.whatsapp.com/send?phone=573006247515&text=Hola%2C%20me%20quiero%20suscribir%20a%20un%20plan%20de%20estudios%2C%20me%20puedes%20dar%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer">
                      <button className='btn-eie'>Suscribirme</button>
                    </a>
                  </div>
                </div>
              </div>          
            </div>
          </div>
          <div className='contenedor-flex'>
            <div className='contenedor-flex-in'>
              <h3 className='h3-planes'>Plan Grupal</h3>
              <span>(Máximo 5 personas)</span>
              <img className='img-planes' src={group} alt="plan personal" />           
            </div>
            <div className='contenedor-flex-in'>
            <div>
                <div className='precio-contenedor'>
                  <div className='precio-header'>
                    <h4 className='precio-title'>ESTÁNDAR</h4>
                  </div>
                  <div className='precio-body'>
                    <h2>$49<span className='dolar-span'>USD</span></h2>
                    <h5>Mensuales</h5>
                    <p>18 horas de clase</p>
                    <a href="https://api.whatsapp.com/send?phone=573006247515&text=Hola%2C%20me%20quiero%20suscribir%20a%20un%20plan%20de%20estudios%2C%20me%20puedes%20dar%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer">
                      <button className='btn-eie'>Suscribirme</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='contenedor-flex-in'>
            <div>
                <div className='precio-contenedor'>
                  <div className='precio-header'>
                    <h4 className='precio-title'>INTENSIVO</h4>
                  </div>
                  <div className='precio-body'>
                    <h2>$197<span className='dolar-span'>USD</span></h2>
                    <h5>Mensuales</h5>
                    <p>72 horas de clase</p>
                    <a href="https://api.whatsapp.com/send?phone=573006247515&text=Hola%2C%20me%20quiero%20suscribir%20a%20un%20plan%20de%20estudios%2C%20me%20puedes%20dar%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer">
                      <button className='btn-eie'>Suscribirme</button>
                    </a>
                  </div>
                </div>
              </div>         
            </div>
          </div>
        </div>
      </section>
    </>
  )
}