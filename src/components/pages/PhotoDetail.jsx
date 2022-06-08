import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'


const PhotoDetail = () => {

    const {id} = useParams()

    
    const navigate = useNavigate()

    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;

    const {result, loading, error} = useFetch(url);


    if(loading) return <section><p>Loading...</p></section>
    if(error) return <p>{error}</p>

    

  return (
    <section className='details'>
        <p>{result.title}</p>
        <img src={result.thumbnailUrl} alt={result.title} />
        <button onClick={() => navigate(-1)}>Return</button>
    </section>
  )
}

export default PhotoDetail