import React, { useEffect, useState } from 'react'
import { getTopics } from '../utils/api'

const Navbar = ({setTopic}) => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
     getTopics().then(topics => setTopics(topics))
    }, [topics])
    
  return (
    <ul className='navbar'>
        {topics.map(topic => (
            <li key={topic.slug} onClick={() => setTopic(topic)}>
                {topic.slug}
            </li>
        ))}
    </ul>
  )
}

export default Navbar