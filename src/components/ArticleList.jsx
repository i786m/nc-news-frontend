import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import ArticleAdder from './ArticleAdder'
import { getArticles } from '../utils/api'

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
            <li key={article.id} ><ArticleCard article={article} /></li>
        ))}
        <ArticleAdder />
    </ul>
  )
}

export default ArticleList