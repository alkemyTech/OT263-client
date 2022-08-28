import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import "./NewsDetail.css";

const NewsDetail = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const result = await axios(`http://localhost:3000/news/${id}`);
                const result = {
                    data: {
                        name: "News Title",
                        content:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum                     ",
                        image: "https://via.placeholder.com/1500x500.png",
                    },
                };
                setNews(result.data);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <Loader weight={5} color={"blue"} />;
    }
    if (error) {
        return <p>Error...</p>;
    }

    return (
        <div className="news-detail-container">
            <img
                className="news-detail-image"
                src={news.image}
                alt={news.name}
            />
            <h1 className="news-detail-title">{news.name}</h1>
            <p className="news-detail-body">{news.content}</p>
        </div>
    );
};

export default NewsDetail;
