import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Selections = ({data}) => {
    const {result, loading, error} = data

    if(loading) return <section><p>Loading...</p></section>
    if(error) return <section><p>{error}</p></section>

    const get30 = () => result.filter(result => result.title.length < 30)
    const get100 = () => result.filter(result => result.title.length > 30)

  return (
    <section>
        <h1>Nested Routes</h1>
        <Link to='titles30' state={get30()}>Title 30</Link>
        <Link to='titles100' state={get100()}>Title 100</Link>
        <Outlet />


    </section>
  )
}

export default Selections