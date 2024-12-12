import React, { useEffect, useState } from 'react';
import Newsitem from './Newitem';

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.articles) {
          throw new Error("No articles found in the response.");
        }

        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  if (!Array.isArray(articles) || articles.length === 0) {
    return <div className="text-center">No news available.</div>;
  }

  return (
    <div className="news-board" style={{ marginTop: '20px' }}>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="news-container">
        {articles.map((news, idx) => (
          <Newsitem
            key={idx}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
