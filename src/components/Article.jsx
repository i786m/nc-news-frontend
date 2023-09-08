import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, putVote } from "../utils/api";
import Comments from "./Comments";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    getArticleById(article_id).then((returnedArticle) => {
      setArticle(returnedArticle);
      setVotes(returnedArticle.votes);
    });
  }, [article_id]);

  const handleVote = (e) => {
    setVoted(true);
    const vote = { inc_votes: 0 };
    e.target.className === "upVote"
      ? (vote.inc_votes++, setVotes(votes+1))
      : (vote.inc_votes--, setVotes(votes-1))
      putVote(article_id, vote)
  };

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
      <span className="article-votes">
        current votes: {votes}
        <button
          disabled={voted}
          type="button"
          onClick={handleVote}
          className="upVote"
        >
          👍{" "}
        </button>
        <button
          disabled={voted}
          type="button"
          onClick={handleVote}
          className="downVote"
        >
          👎{" "}
        </button>
      </span>
      <Comments article_id={article_id} />
    </>
  );
};

export default Article;
