import React, { useEffect, useState } from 'react'
import { getTopics } from '../utils/api'
import { Link } from 'react-router-dom'


const Navbar = ({setTopic}) => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
     getTopics().then(topics => setTopics(topics))
    }, [])
    
  return (
    <ul className='navbar'>
        <li><Link to = {`/`}>Home</Link></li>
        {topics.map(topic => (
            <li key={topic.slug} onClick={() => setTopic(topic)}>
              <Link to={`/articles`}>
              {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
              </Link> 
            </li>
        ))}
    </ul>
  )
}

export default Navbar