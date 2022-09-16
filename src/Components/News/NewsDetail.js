import React from "react";
import "./NewsDetail.css";

const NewsDetail = ({ data }) => {    
    return (
        <div className="news-detail-container">
            <img
                className="news-detail-image"
                src={data.image}
                alt={data.name}
            />
            <h1 className="news-detail-title">{data.name}</h1>
            <p className="news-detail-body">{data.content}</p>
        </div>
    );
};

export default NewsDetail;
