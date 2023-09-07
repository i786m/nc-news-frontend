import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Comments from "./Comments";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    getArticleById(article_id).then((returnedArticle) =>
      setArticle(returnedArticle)
    );
  }, [article_id]);


  return (
    <>
      <h1 className="aricle-title">{article.title}</h1>{" "}
      <p className="article-author">
        Posted by {article.author} in{" "}
        <span className="article-topic">{article.topic}</span>
      </p>
      <img
        src={article.article_img_url}
        alt={`an image related to ${article.topic}`}
        width="150"
      />
      <p className="article-body">{article.body}</p>
      <span className="article-comment">💬 {article.comment_count}</span>
      <span className="article-votes">👍 {article.votes}</span>

      <Comments article_id={article_id}/>
      
    </>
  );
};

export default Article;
