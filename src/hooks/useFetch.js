import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data,setData] = useState({
        result: null,
        loading: true,
        error: null
    })

    useEffect(() => {

        const abortController = new AbortController()



        fetch(url, {signal: abortController.signal})
        .then((res) => res.json())
        .then((result) => setData({
            result,
            loading: false,
            error: null
        }))
        .catch((error) => { 
            abortController.signal.aborted
            ?console.log('fetch aborted')
            :setData({result: null, loading: false, error: error.message})
        })

        return () => abortController.abort()

    }, [url])

    return data
}

export default useFetch