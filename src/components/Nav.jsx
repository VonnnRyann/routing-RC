import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../assets/logo.jpg'






const Nav = () => {
  return (
    <>
    <Link to='/'>
    <h2>
        <img src={logo} alt="" />
    </h2>
    </Link>
    <nav>
      <ul>
        <NavLink to='/' style={({isActive}) => {
          return {
            color: isActive && 'red'
          }
        }}>
          <li>Home</li>
        </NavLink>
        <NavLink to='/photos' style={({isActive}) => {
          return {
            color: isActive && 'red'
          }
        }}>
          <li>Photos</li>
        </NavLink>
        <NavLink to='/about' style={({isActive}) => {
          return {
            color: isActive && 'red'
          }
        }}>
          <li>About</li>
        </NavLink>
        <NavLink to='/selection' style={({isActive}) => {
          return {
            color: isActive && 'red'
          }
        }}>
          <li>Selection</li>
        </NavLink>
      </ul>
    </nav>
    </>
  )
}

export default Nav