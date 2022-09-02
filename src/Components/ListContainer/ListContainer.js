import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"


function ListContainer({ Component, endpoint }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const { id } = useParams()
    const { get } = require('../../Services/publicApiService')

    useEffect(() => {
        get(`${endpoint}${id && `/${id}`}`)
            .then(result => {
                console.log(result)
                setData(result)
                setIsLoaded(true)
            },
                (err) => {
                    setIsLoaded(true)
                    setError(err)
                }
            )
    }, [id])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div  ><Loader key="1" size="200px" image="./images/Somos-Mas/LOGO-SomosMas.png" /></div>
    } else {
        const dataCopy = id ? data.slice(0) : {...data}
        return (
            <Component data={dataCopy} />
        );
    }
}

export default ListContainer