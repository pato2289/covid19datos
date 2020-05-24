import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useCovidInfo = () => {

    const[info, getInfo] = useState([])

    useEffect(() => {
        const getData = async () => {
            axios.get(`https://api.covid19api.com/dayone/country/argentina`)
            .then(res => {
                console.log(res)
                //res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
                getInfo(res.data[res.data.length-1]);
            })
        }
        getData()

    }, [])

    return {
        info
    }

}

export default useCovidInfo;
