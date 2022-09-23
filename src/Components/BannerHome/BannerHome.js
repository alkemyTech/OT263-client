import { useState, useEffect } from "react"
import { get } from "../../Services/apiService"

const URI='http://localhost:3001/'

export default function BannerHome({ Component, endpoint }) {
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        get(URI+endpoint)
        .then(({data})=>{
            setData(data)
            setLoaded(true)

        })
    }, [])
    if (loaded)
        return (
            <div className="is-flex is-flex-wrap-nowrap">
                {data.map(element => <Component key={element.id} item={element} />)}
            </div>
        )
}