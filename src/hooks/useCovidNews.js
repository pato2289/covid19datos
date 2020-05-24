import React, { useState, useEffect } from 'react';
import axios from 'axios'

const useCovidNews = () => {
    
    const [news, setNews] = useState([]) 
    
    useEffect(() => {

        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };    
        axios.get('https://newsapi.org/v2/top-headlines?country=ar&apiKey=9e2bcf98ed624677902cc1e037fe9109', config)
            .then(res => {
                console.log("res es: ", res)
                const noticias = res.data.articles;
                setNews(noticias);
            });           
    }, [])

    return {
        news
    };
}
 
export default useCovidNews;