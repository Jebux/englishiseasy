import "../styles/Contacto.css"

export default function Contacto(){

  return(
    <>
      <section className="scontenedor-eie">
         <div className="contenedor-eie">
            <h1>Contacto a soporte al cliente</h1>
            <p>A continuación encontrarás las preguntas más frecuentes que realizan nuestros estudiantes sobre los cursos.</p>
            <p>Si no encuentras tu pregunta aquí, puedes escribirnos a nuestro Whatsapp: <a href="https://api.whatsapp.com/send?phone=573006247515&text=Hola%2C%20estuve%20revisando%20la%20informaci%C3%B3n%20de%20la%20p%C3%A1gina%20y%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n%20%F0%9F%99%82" target="_blank" rel="noopener noreferrer">+57 300 624 7515</a> en el cuál estaremos dispuestos a resolver cualquier tipo de duda.</p>
         </div>
      </section>
      <section className="scontenedor-eie">
        <div className="contenedor-eie">
            <h2>Preguntas y respuestas</h2>
            <p>Encuentra aquí las respuestas a las preguntas que más frecuentemente nos hacen nuestros estudiantes.</p>
          <div className="preguntas">
            <div className="preguntas-in">
              <h3>Quiero adquirir un curso, ¿Cómo puedo pagar?</h3>
              <p>Puedes elegir el medio que más te convenga: tarjetas débito y crédito, consignación bancaria y puntos VIA Baloto, Efecty, Gana, entre otros. Elige el curso que deseas y completa tu matrícula.</p>
            </div>
            <div className="preguntas-in">
              <h3>¿Cuándo me activan el curso</h3>
              <p>Una vez hayamos recibido la confirmación de tu pago, un coach se estará comunicando contigo para indicarte los pasos a seguir, los cuáles son las pruebas diagnósticas.</p>
            </div>
            <div className="preguntas-in">
              <h3>No encuentro mi pregunta,¿Qué debo hacer?</h3>
              <p>Comunicate con nosotros y estaremos dispuestos a ayudarte a solucionar todas las dudas.</p>
            </div>
            <div className="preguntas-in">
              <h3>¿Puedo descargar el material del curso?</h3>
              <p>Solo algunos documentos podrán ser descargados. Recuerda que nuestros cursos son virtuales y debes tener una conexión a Internet y un computador, celular o tableta para desarrollarlo.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};