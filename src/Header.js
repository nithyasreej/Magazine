import React from 'react'
import logo from './logo.png'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <img src={logo} alt='Logo'></img>
        </div>
        <div className="button-container">
            <button className="button" >Go to site!</button>
        </div>
    </header>
  )
}
