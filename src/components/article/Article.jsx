import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog img" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <h4>{date}</h4>
          <h2>{title}</h2>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
