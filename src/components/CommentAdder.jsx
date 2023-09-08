import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/User'
import { postComment } from '../utils/api'
UserContext

const CommentAdder = ({article_id,setComments}) => {
  const [comment, setComment] = useState  ('')
  const {user} = useContext(UserContext)
  
  const handleChange = (e) => {
    setComment(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   
    setComments(comments=> [{comment_id:'newComment', body:comment, author:user, votes:0}, ...comments])
    const newComment = {body:comment, username:user}
    setComment('')
    postComment(article_id,newComment)
   
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={comment}></input>
      <button>Add Comment</button>
    </form>
  )
}

export default CommentAdder
