import SliderContainer from '../Components/Slider/SliderContainer'
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";
import BannerHome from '../Components/BannerHome/BannerHome';
import New from '../Components/News/New';
import MemberCard from '../Components/Members/MemberCard';
import { BsChevronRight } from 'react-icons/bs'
import TestimonialCard from '../Components/Testimonials/TestimonialCard'
import NewCard from '../Components/News/NewCard'


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
        <h2 className='subtitle is-3 is-inline has-text-black has-text-weight-bold'>Nuestro Staff</h2>
        <span
          className='is-flex is-align-items-center has-text-black'
          style={{ cursor: "pointer" }}
          onClick={() => { navigate(`/novedades`) }}>Ver todos <BsChevronRight /></span>
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
        <h2 className='subtitle is-3 is-inline has-text-black has-text-weight-bold'>Testimonios</h2>
        <span
          className='is-flex is-align-items-center has-text-black'
          style={{ cursor: "pointer" }}
          onClick={() => { navigate(`/novedades`) }}>Ver todos <BsChevronRight /></span>
        </div>
        <div className="columns is-multiline">
          <div className="column is-flex is-justify-content-center">
          <TestimonialCard
          name='Maria Fuentes'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          img='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          </div>
          <div className="column is-flex is-justify-content-center">
          <TestimonialCard
          name='Maria Fuentes'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          img='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          </div>
          <div className="column is-flex is-justify-content-center">
          <TestimonialCard
          name='Maria Fuentes'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          img='https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          </div>
          <div className="column is-flex is-justify-content-center">
          <TestimonialCard
          name='Maria Fuentes'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          img='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' />
          </div>
        </div>

    </div>
        
    <div className='container is-clipped mt-5'>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className='subtitle is-3 is-inline has-text-black has-text-weight-bold' style={{ color: "black", fontWeight: "800" }}>Ultimas Novedades</h2>
        <span
          className='is-flex is-align-items-center has-text-black'
          style={{ cursor: "pointer" }}
          onClick={() => { navigate(`/novedades`) }}>Ver todos <BsChevronRight /></span>
        </div>
        <div className="columns is-multiline  is-variable is-2-mobile is-4-tablet is-5-desktop is-8-widescreen is-2-fullhd mx-2">
          <div className="column is-flex is-justify-content-center my-4">
        <NewCard
          title={'Nuevos talleres técnicos'}
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          url='/'
          image='https://images.unsplash.com/photo-1580893206515-2fc3e8a2aa96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
          </div>    
          <div className="column is-flex is-justify-content-center my-4">
          <NewCard
          title={'Nutrir'}
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          url='/'
          image='https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80' />
          </div>
          </div>

    </div>
  </div>
  </Fade>
}

Home.defaultProps = {
  welcomeText: 'Desde 1997 trabajamos con los chicos, chicas, mamás, papás, abuelos y vecinos del barrio La Cava. Gracias a la unión de las manos de todas las familias, del barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar los procesos de inserción y crecimiento social. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: educación, deportes, primera infancia, salud, alimentación y trabajo social.'
}
export default Home
