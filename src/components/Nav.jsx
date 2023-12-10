import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Nav = () => {
  return (
    <div className='nav' style={{backgroundColor:'black'}}>
      <Link to='/' className='Link'>Kalvium❤️</Link>
      <Link to='/contact' className='Link a'>Contacts</Link>
      <Link to='/registration' className='Link b'>Registration form</Link>

    </div>
  )
}

export default Nav
