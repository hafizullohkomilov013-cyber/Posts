


import React from 'react'
import { useState, useEffect } from 'react'

function Navbar() {
    let [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle("dark-mode", darkMode)    
    })

  return (
    <nav >
      <div className='nav-container'>
        <h2>Posts</h2>
        <button className='theme-btn' onClick={() => {setDarkMode(!darkMode)}}>
           {darkMode ? "light" : "dark"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
