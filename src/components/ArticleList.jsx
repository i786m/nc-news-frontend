import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import ArticleAdder from './ArticleAdder'
import { getArticles } from '../utils/api'
import { Link } from 'react-router-dom'

const ArticleList = ({topic}) => {
  const [isLoading,setIsLoading] = useState(false)
  const [isError,setIsError] = useState(false)
    const [articlesToView, setArticlesToView] = useState([])

    useEffect(() => {
      
        getArticles().then((articles) =>{setArticlesToView(articles)})
    
    }, [topic])
    

  return (
    <ul className='article-list'>
        {articlesToView.map((article) => (
            <li key={article.article_id} >
              <Link to ={`/articles/${article.article_id}`}>
              <ArticleCard article={article} /></Link>
              </li>
        ))}
        <ArticleAdder />
    </ul>
  )
}

export default ArticleList