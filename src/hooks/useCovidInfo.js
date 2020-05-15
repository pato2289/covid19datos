import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useCovidInfo = () => {

    const[info, getInfo] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios(`https://api.covid19api.com/dayone/country/argentina`);
            getInfo(res.data[res.data.length-1]);
        }
        getData()

    }, [])

    return {
        info
    }

}

export default useCovidInfo;
