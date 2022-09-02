import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"


function ListContainer({ Component, endpoint }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        get(endpoint + id && `/${id}`)
            .then(result => {
                setItems(result)
                setIsLoaded(true)
            },
                (err) => {
                    setIsLoaded(true)
                    setError(err)
                }
            )
    }, [paramId])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div style={{ height: "100vh" }} ><Loader key="1" size="200px" image="./images/Somos-Mas/LOGO-SomosMas.png" /></div>
    } else {
        return (
            <Component items={items.slice(0)} />
        );
    }
}

export default ListContainer