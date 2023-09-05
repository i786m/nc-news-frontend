import React from "react";

const ArticleCard = ({ article }) => {
  console.log(article);
  return (
    <div className="article-card">
      <img
        src={article.article_img_url}
        alt={`an image related to ${article.topic}`}
        width="150"
      />
      <div >
        <h3 className="aricle-title">{article.title}</h3>
        <p className="article-author">Posted by {article.author} in  <span className="article-topic">{article.topic}</span></p>
        
        <span className="article-comment">💬 {article.comment_count}</span>
        <span className="article-votes">👍 {article.votes}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
