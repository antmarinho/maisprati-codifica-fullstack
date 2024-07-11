import React from 'react'
import { useState,useEffect } from 'react'

const NewsUpdater = () => {

    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const fetchNews = async () => {

            setIsLoading(true)

            try {

                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
                const data = await response.json()

                setNews(data.slice(0,5))
                
            } catch(error) {

                console.log(error)
            }

            setIsLoading(false)
        }

        fetchNews()

        const interval = setInterval(fetchNews,3000)

        return () => clearInterval(interval)

    }, [])

  return (
    <div>
        <h1>Ultimas noticias</h1>
        {isLoading ? (
            <p>carregando noticias</p>
        ) : (
            <ul>
                {
                    news.map((article) => (
                        <li key={article.id}>
                            <p>{article.title}</p>
                        </li>
                    ))
                }
            </ul>
        )}
    </div>
  )
}

export default NewsUpdater