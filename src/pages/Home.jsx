import React from 'react'
import { NavLink } from 'react-router-dom'
import allbeersImg from "../assets/beers.png"
import randombeerImg from "../assets/random-beer.png"
import newbeerImg from "../assets/new-beer.png"



function Home() {

    const activeClass = (navInfo) => {
        return navInfo.isActive === true ? "active-nav" : "inactive-nav"
    }
  return (
    <div>

    <img src={allbeersImg} alt="All Beers"/>
    <NavLink to="/beers" className={activeClass}>All Beers</NavLink>
    <img src={randombeerImg} alt="Random Beer"/>
    <NavLink to="/random-beer" className={activeClass}>Random Beer</NavLink>
    <img src={newbeerImg} alt="New Beer"/>
    <NavLink to="/new-beer" className={activeClass}>New Beer</NavLink>


    </div>
  )
}

export default Home