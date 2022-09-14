import SliderContainer from '../Components/Slider/SliderContainer'
import { useNavigate } from "react-router-dom";
import BannerHome from '../Components/BannerHome/BannerHome';
import New from '../Components/News/New';


const Home = ({ textBienvenida }) => {
  const navigate = useNavigate()

  return <div className='rows'>
    <div className='columns is-vcentered is-centered' style={{ margin: 15 }}>
      <div className='rows column is-5' style={{ marginRight: 5 }}>
        <h1 className='row title'>Hola! Bienvenidx</h1>
        <span className='row'>{textBienvenida}</span>
        <button className='button is-rounded' style={{backgroundColor:"#FF0000", color:"white"}}>Contactenos</button>
      </div>
      <div className='column is-5' style={{ marginLeft: 5 }}>
        <div><SliderContainer /></div>
      </div>
    </div>

    <div className='container is-clipped mt-5'>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className='subtitle is-4 is-inline' style={{ color: "black", fontWeight: "800" }}>Testimonios</h2>
        <span
          className='is-flex'
          style={{ cursor: "pointer" }}
          onClick={() => { navigate(`/novedades`) }}>ver todos</span>
      </div>
      <BannerHome Component={New} endpoint={'news'} />
    </div>

    <div className='container is-clipped mt-5'>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className='subtitle is-4 is-inline' style={{ color: "black", fontWeight: "800" }}>Nuestro Staff</h2>
        <span
          className='is-flex'
          style={{ cursor: "pointer" }}
          onClick={() => { navigate(`/novedades`) }}>ver todos</span>
      </div>
      <BannerHome Component={New} endpoint={'news'} />
    </div>

    <div className='container is-clipped mt-5'>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className='subtitle is-4 is-inline' style={{ color: "black", fontWeight: "800" }}>Ultimas Novedades</h2>
        <span
          className='is-flex'
          style={{ cursor: "pointer" }}
          onClick={() => { navigate(`/novedades`) }}>ver todos</span>
      </div>
      <BannerHome Component={New} endpoint={'news'} />
    </div>
  </div>
}

export default Home
