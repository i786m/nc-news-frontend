import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentAdder from "./CommentAdder";

const Comments = ({ article_id }) => {
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((returnedComments) =>
      setComments(returnedComments)
    );
  }, [article_id]);
  return (
    <>
      <h3>Comments</h3>
      <CommentAdder article_id={article_id} setComments={setComments}/>
      <ul>
        {Comments.map((comment) => {
            return (
                <li key={comment.comment_id}>
                <p>{comment.body}</p>
                <span>{comment.author}</span>
                <span>👍 {comment.votes}</span>
                </li>
            );
        }
         )}
      </ul>
    </>
  );
};

export default Comments;