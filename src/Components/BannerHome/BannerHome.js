import { useState, useEffect } from "react"

const newsMock = [
    { id: 1, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new1.png", description: 'Descripcion de prueba' },
    { id: 2, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new1.png", description: 'Descripcion de prueba' },
    { id: 3, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new1.png", description: 'Descripcion de prueba' },
    { id: 4, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new1.png", description: 'Descripcion de prueba' },
    { id: 5, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new2.png", description: 'Descripcion de prueba' }
]

export default function BannerHome({Component}){
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setData(newsMock)
        setLoaded(true)
    }, [])
    if(loaded)
    return(
        <div className="is-flex is-flex-wrap-nowrap">
            {data.map(element=><Component key={element.id} item={element}/>)}
        </div>
    )
}