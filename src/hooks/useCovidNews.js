import React, { useState, useEffect } from 'react';
import axios from 'axios'

const useCovidNews = () => {
    
    const [news, setNews] = useState([]) 
    
    useEffect(() => {
        const getNews = async () => {
            const res = await axios('https://newsapi.org/v2/top-headlines?country=ar&apiKey=9e2bcf98ed624677902cc1e037fe9109')
            setNews(res.data.articles)
        }

        getNews();
    }, [])

    return {
        news
    };
}
 
export default useCovidNews;