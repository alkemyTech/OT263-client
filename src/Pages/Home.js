import React, {useState, useEffect} from 'react'
import axios from 'axios';
import FlatList from 'flatlist-react';
import SliderContainer from '../Components/Slider/SliderContainer'

const Home = () => {
  const [listOfNews, setListOfNews] = useState([{image:"image", texto: "texto"}])

  // useEffect(() => {
  //   axios.get("http://localhost:3001/RUTA-DE-NEWS-").then((response) => {
  //     setListOfNews(response.data)
  //   })
  // }, [])

  const renderNews= (value, index) => {
    return(
      <div className='mainContainer'>
        <div className='card'>
          <div className='imageContainer'>
            <div>imagen - {value.image}</div>
          </div>
          <div className='newContainer'>
            <div>novedad - {value.texto}</div>
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
    <div>Staff</div>
    <div>Testimonios</div>
    <div>
      Novedades
      <FlatList 
        list={listOfNews}
        renderItem={renderNews}
        reversed
      />
    </div>
    
    
  </div>
}

export default Home
