import '../styles/Homepage.css'
import ReactPlayer from "react-player/youtube"
import Agendamiento from './Agendamiento'
import PreguntasFrecuentes from './PreguntasFrecuentes'

export default function Homepage(){
  return(
    <>
      <Agendamiento />
      <section className='VideoWhat'>
        <ReactPlayer 
          width="80%"
          height="100%"
          url="https://www.youtube.com/watch?v=OpmJ8D1r2CI" 
          playing={false}
          volume={0.5}
          controls
        />
      </section>
      <PreguntasFrecuentes />

    </>
  )
}