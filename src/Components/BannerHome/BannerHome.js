import { useState, useEffect } from "react"
import { get } from "../../Services/apiService"
import Loader from "../Loader/Loader"

const URI='http://localhost:3001/'

export default function BannerHome({ Component, endpoint }) {
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        get(URI+endpoint)
        .then(({data})=>{
            setData(data)
            setLoaded(true)

        },(error)=>{
            setError(error.message)
            setLoaded(false)
        })
    }, [])
    if (error) return <div>Error: {error.message}</div>
    if (!loaded) return <div><Loader key="1" size="200px" image="./images/Somos-Mas/LOGO-SomosMas.png" /></div>
    if (loaded)
        return (
            <div className="is-flex is-flex-wrap-nowrap">
                {data.map(element => <Component key={element.id} item={element} />)}
            </div>
        )
}