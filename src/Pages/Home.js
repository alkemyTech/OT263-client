import React, {useState, useEffect} from 'react'
import axios from 'axios';
import FlatList from 'flatlist-react';
import SliderContainer from '../Components/Slider/SliderContainer'


const Home = (values) => {
  const {textBienvenida} = values
  const [listOfNews, setListOfNews] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums/1/photos").then((response) => {
      setListOfNews(response.data)
    })
  }, [])

  const renderNews= (value, index) => {
    return(
      <div className='mainContainer'
        style={{display:"flex", alignItems:"center"}}
      >
        <div 
          key={index} 
          className="new" 
          onClick={ () => {/*navigate(`/news/${value.id}`)*/}}
        >
          <div className='card mr-5 p-1' 
            style={{display:"flex", borderRadius: 20, backgroundColor: "#6d7aee", width:350}}>
            <div className='imageContainer column card-image'>
              <figure class="image" style={{width: 150}}>
                <img style={{borderRadius: 20, height: 158}} src={value.url} alt="imagen"/>
              </figure>
            </div>
            <div className='contentContainer column card-content'>
              <div className='content'>{value.title}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

	return <div className='rows'>
    <div className='columns is-vcentered is-centered' style={{margin: 15}}>
      <div className='rows column is-5' style={{marginRight: 5}}>
        <h1 className='row title'>Hola! Bienvenidx</h1>
        <span className='row'>{textBienvenida}</span>
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
