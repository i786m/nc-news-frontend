import { useEffect, useState } from "react";
import { getComments } from "../utils/api";

const Comments = ({ article_id }) => {
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((returnedComments) =>
      setComments(returnedComments)
    );
  }, []);
  return (
    <>
      <h3>Comments</h3>
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