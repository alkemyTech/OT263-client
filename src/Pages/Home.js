import React, {useState, useEffect} from 'react'
import axios from 'axios';
import FlatList from 'flatlist-react';
import SliderContainer from '../Components/Slider/SliderContainer'
import { TbH1 } from 'react-icons/tb';



const Home = () => {
  const [listOfNews, setListOfNews] = useState([
    {image: "image",
      content:"Este es un ejemplo de una gran novedad novedosa"}
  ])

  // useEffect(() => {
  //   axios.get("http://localhost:3001/RUTA-DE-NEWS-").then((response) => {
  //     setListOfNews(response.data)
  //   })
  // }, [])

  const renderNews= (value, index) => {
    return(
      <div className='mainContainer'
        style={{display:"flex", alignItems:"center"}}
      >
        <div className='card mr-5 p-1' 
          style={{display:"flex", borderRadius: 20, backgroundColor: "#6d7aee", width:350}}>
          <div className='imageContainer column card-image'>
            <figure class="image" style={{width: 150}}>
              <img style={{borderRadius: 20, height: 158}} src={'/images/placeholder/150x150.png'} alt="imagen"/>
            </figure>
          </div>
          <div className='contentContainer column card-content'>
            <div className='content'>{value.content}</div>
          </div>
        </div>

        <div className='card mr-5 p-1' 
          style={{display:"flex", borderRadius: 20, backgroundColor: "#6d7aee", width:350}}>
          <div className='imageContainer column card-image'>
            <figure class="image" style={{width: 150}}>
              <img style={{borderRadius: 20, height: 158}} src={'/images/placeholder/150x150.png'} alt="imagen"/>
            </figure>
          </div>
          <div className='contentContainer column card-content'>
            <div className='content'>{value.content}</div>
          </div>
        </div>


      </div>
    )
  }

	return <div className='rows'>
    <div className='columns is-vcentered is-centered' style={{margin: 15}}>
      <div className='rows column is-5' style={{marginRight: 5}}>
        <h1 className='row title'>Hola! Bienvenidx</h1>
        <h3 className='row'>texto de bienvenida</h3>
        <button className='row'>Contactenos</button>
      </div>
      <div className='column is-5' style={{marginLeft: 5}}>
        <div><SliderContainer/></div>
      </div>
    </div>

    <div className='container'>
    <div>
        <h2 className='subtitle is-4' style={{color:"black", fontWeight:"800" }}>Nuestro Staff</h2>
      </div>
    <div 
        className='container is-centered' 
        style={{height: 240, display: "flex", justifyContent:"start",alignItems: "center"}}
      >
        
      </div>
    </div>

    <div className='container'>
    <div>
        <h2 className='subtitle is-4' style={{color:"black", fontWeight:"800" }}>Testimonios</h2>
      </div>
    <div 
        className='container is-centered' 
        style={{height: 240, display: "flex", justifyContent:"start",alignItems: "center"}}
      >
        
      </div>
    </div>

    <div className='container'>
      <div>
        <h2 className='subtitle is-4' style={{color:"black", fontWeight:"800" }}>Ultimas Novedades</h2>
      </div>
      <div 
        className='container is-centered' 
        style={{height: 230, display: "flex", justifyContent:"start",alignItems: "center"}}
      >
        <FlatList 
          list={listOfNews}
          renderItem={renderNews}
          reversed
        />
      </div>
    </div>
  </div>
}

export default Home
