import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Slider from './Slider'
import './Slider.css'

function SliderContainer({ data }) {
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        dynamicHeight={false}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={1000}
        interval={5000}
        stopOnHover={false}
      >
        {data?.map(({ image, name }, index) => (
          <Slider key={index} imageUrl={image} text={name} />
        ))}
      </Carousel>
    </>
  )
}

export default SliderContainer
