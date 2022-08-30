import styles from './CarouselImage.module.css'

function Slider({ imageUrl, text, align }) {
    console.log(imageUrl)
    const imgStyle = {
        width: '100%',
        maxWidth: '100vw',
        minHeight: '70vh',
        backgroundSize: 'expand',
        backgroundRepeat:"repeat",
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundPosition: 'center center'
    }

    const descriptionAlign = { textAlign: align }

    return (
        <div style={imgStyle}>
            
            <div className={styles.description} style={descriptionAlign}>
                {text.split(" ").map(word => { return <div key={word}>{word}</div> })}
            </div>
        </div>
    )
}

export default Slider