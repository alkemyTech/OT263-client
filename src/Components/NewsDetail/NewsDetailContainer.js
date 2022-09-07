import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import NewsDetail from "./NewsDetail";

function NewsDetailContainer({ id }) {
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('localhost:3000/novedad/' + id);

                setNews(res.data);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <Loader weight={5} color={"#9AC9FB"} />;
    }
    if (error) {
        return <p>Error...</p>; //TODO replace with error component
    }

    return <NewsDetail news={news} />;
}

export default NewsDetailContainer;
