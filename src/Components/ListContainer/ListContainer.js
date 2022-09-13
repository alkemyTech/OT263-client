import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import { get } from '../../Services/publicApiService'

function ListContainer({ Component, endpoint }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const { id } = useParams()
    
    useEffect(() => {
        const newEndpoint = id ? `${endpoint}/${id}` : endpoint
        get(newEndpoint)
            .then(({data}) => {
                setData(data)
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
        const dataCopy = id ? { ...data } : data.slice(0)
        return (
            <Component data={dataCopy} />
        );
    }
}

export default ListContainer