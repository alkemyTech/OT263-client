import React, { useEffect, useState } from "react";
import Get from "../../Services/publicApiService";
import Loader from "../Loader/Loader";
import NewsDetail from "./NewsDetail";

function NewsDetailContainer({ id }) {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const res = await Get(`/novedades/${id}`);
                // Replace the following line with GET public service API call
                const res = {
                    name: "News Title",
                    content:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum                     ",
                    image: "https://via.placeholder.com/2000x800.png",
                };

                setNews(res);
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
