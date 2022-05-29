import React from 'react'
import { Link } from 'react-router-dom'
import homeImg from "../assets/home.png"

function Navbar() {
  return (
    <div>
    <header>
        <Link to="/"><img src={homeImg} width="500" /></Link>
    </header>
    </div>
  )
}

export default Navbar