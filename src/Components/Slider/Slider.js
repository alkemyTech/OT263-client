import styles from './CarouselImage.module.css'

function Slider({ imageUrl, text, align = 'center' }) {
  const imgStyle = {
    width: '100%',
    maxWidth: '100vw',
    minHeight: '50vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(' + imageUrl + ')',
    backgroundPosition: 'center center'
  }

  const descriptionAlign = { textAlign: align }
  return (
    <div style={imgStyle} className='is-flex justify-content-center'>
      <div
        className='title has-text-centered is-size-2 is-size-2-mobile has-text-white'
        style={{ margin: '0 auto', marginTop: '1rem' }}
      >
        {text}
      </div>
      <div className={`${styles.description}`} style={descriptionAlign}></div>
    </div>
  )
}

export default Slider
