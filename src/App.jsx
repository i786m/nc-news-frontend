import { useState } from 'react'
import './App.css'
import Article from './components/Article'
import ArticleList from './components/ArticleList'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  const [topic, setTopic] = useState('')

  return (
    <>
        <Header />
        <Navbar setTopic={setTopic}/>
        <ArticleList topic={topic}/>
   </>
  )
}

export default App
