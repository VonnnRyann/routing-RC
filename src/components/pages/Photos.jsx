import React from 'react'
import { Link } from 'react-router-dom'

const Photos = ({data}) => {
    const {result,loading, error} = data;

    if(loading) return <section><p>Loading...</p></section>
    if(error) return <section><p>{error}</p></section>

    const photoList = result.map(photo => (
    <li key={photo.id}>
        <Link to={`/photo-detail/${photo.id}`}><p>{photo.title}</p></Link>
    </li> ))


  return (
    <section>{photoList}</section>
  )
}

export default Photos