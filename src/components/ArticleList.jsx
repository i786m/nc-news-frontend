import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import ArticleAdder from './ArticleAdder'
import { getArticles } from '../utils/api'
import { Link } from 'react-router-dom'

const ArticleList = ({topic}) => {
  
    const [articlesToView, setArticlesToView] = useState([])

    useEffect(() => {
      
        getArticles().then((articles) =>{setArticlesToView(articles)})
    
    }, [topic])
    

  return (
    <ul className='article-list'>
        {articlesToView.map((article) => (

          <Link to={`/articles/${article.article_id}`} key={article.id} >
            <ArticleCard article={article} />
            </Link>
        ))}
        <ArticleAdder />
    </ul>
  )
}

export default ArticleList