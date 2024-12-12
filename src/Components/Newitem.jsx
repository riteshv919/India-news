import React from "react";

const Newitem = ({ title, description, src, url }) => {
  return (
    <div className="card news-card">
      <img src={src} className="card-img-top" alt="news" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newitem;
