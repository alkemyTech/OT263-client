import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Slider from "./Slider"
import './Slider.css'

const images = [
    {
        imageUrl: "./images/Somos-Mas/LOGO-SomosMas.png",
        text: "Lorem impus"
    },
    {
        imageUrl: "./images/Somos-Mas/Fotos/Foto1.jpg",
        text: "Lorem impus"
    },
    {
        imageUrl: "./images/Somos-Mas/Fotos/Foto3.jpg",
        text: "Lorem impus"
    },
]

function SliderContainer() {
    return (
        <>
            <Carousel            
                showThumbs={ false }
                showStatus={ false }
                showIndicators={ true }
                dynamicHeight={ false }
                infiniteLoop={ true }
                autoPlay={ true }
                transitionTime={ 1000 }
                interval={ 5000 }
                stopOnHover={ false }
            >
            {images.map(({imageUrl, text}, index)=> <Slider key={index} imageUrl={imageUrl} text={text} />)}            
            </Carousel>
        </>
    )
}

export default SliderContainer