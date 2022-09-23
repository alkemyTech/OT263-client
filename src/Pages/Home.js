import SliderContainer from '../Components/Slider/SliderContainer'
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
import BannerHome from '../Components/BannerHome/BannerHome';
import New from '../Components/News/New';
import MemberCard from '../Components/Members/MemberCard';


const Home = ({ welcomeText }) => {
  const navigate = useNavigate()

  return <Fade>
   <section class="hero is-large">
  <div class="hero-body">
  <div className='columns is-vcentered is-centered'>
      <div className='rows column is-5'>
        <h1 className='row title is-2 has-text-black'>Hola! Bienvenidx</h1>
            <span className='row has-text-black'>{welcomeText}</span>
            <div className='my-4'>
        <button className='button is-rounded has-text-weight-medium is-size-5' style={{backgroundColor:"#FF0000", color:"white"}}>Contactanos</button>

            </div>
      </div>
      <div className='column is-5'>
        <div><SliderContainer /></div>
      </div>
    </div>
  </div>
</section>
    <div className='rows'>   

    <div className='container is-clipped mt-5'>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className='subtitle is-3 is-inline has-text-black ' style={{ color: "black", fontWeight: "800" }}>Nuestro Staff</h2>
        <span
          className='is-flex'
          style={{ cursor: "pointer" }}
          onClick={() => { navigate(`/novedades`) }}>Ver todos</span>
        </div>
        <div className="columns is-multiline">
          <div className="column is-flex is-justify-content-center">
            <MemberCard name='Mario Fuentes' role='Psicólogo' src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' />
          </div>
          <div className="column is-flex is-justify-content-center">
            <MemberCard name='Maria Iraola' role='Fundadora' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
          </div>
          {/* <div className="column is-flex is-justify-content-center">
            <MemberCard name='Mario Fuentes' role='Psicólogo' src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
          </div> */}
          <div className="column is-flex is-justify-content-center">
            <MemberCard name='Marita Gomez' role='Fundadora' src='https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
          </div>
          <div className="column is-flex is-justify-content-center">
            <MemberCard name='Maria García' role='Profesora de Artes' src='https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'/>
          </div>
          <div className="column is-flex is-justify-content-center">
            <MemberCard name='Marco Fernández' role='Proferos de Ed. Física' src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
          </div>
        </div>
        
    </div>

    <div className='container is-clipped mt-5'>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className='subtitle is-4 is-inline' style={{ color: "black", fontWeight: "800" }}>Testimonios</h2>
        <span
          className='is-flex'
          style={{ cursor: "pointer" }}
          onClick={() => { navigate(`/novedades`) }}>Ver todos</span>
      </div>
      <BannerHome Component={New} endpoint={'news'} />
    </div>

    <div className='container is-clipped mt-5'>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className='subtitle is-4 is-inline' style={{ color: "black", fontWeight: "800" }}>Ultimas Novedades</h2>
        <span
          className='is-flex'
          style={{ cursor: "pointer" }}
          onClick={() => { navigate(`/novedades`) }}>Ver todos</span>
      </div>
      <BannerHome Component={New} endpoint={'news'} />
    </div>
  </div>
  </Fade>
}

Home.defaultProps = {
  welcomeText: 'Desde 1997 trabajamos con los chicos, chicas, mamás, papás, abuelos y vecinos del barrio La Cava. Gracias a la unión de las manos de todas las familias, del barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar los procesos de inserción y crecimiento social. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: educación, deportes, primera infancia, salud, alimentación y trabajo social.'
}
export default Home
