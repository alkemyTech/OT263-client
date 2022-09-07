import React from "react";
import "./NewsDetail.css";

const NewsDetail = ({ news }) => {
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
