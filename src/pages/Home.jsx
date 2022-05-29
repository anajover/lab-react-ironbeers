import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import allbeersImg from "../assets/beers.png"
import randombeerImg from "../assets/random-beer.png"
import newbeerImg from "../assets/new-beer.png"



function Home() {

  return (
    <div id="home">

    <img src={allbeersImg} alt="All Beers"/>
    <Link to="/beers" className="nav">All Beers</Link>
    <img src={randombeerImg} alt="Random Beer"/>
    <Link to="/random-beer" className="nav">Random Beer</Link>
    <img src={newbeerImg} alt="New Beer"/>
    <Link to="/new-beer" className="nav">New Beer</Link>


    </div>
  )
}

export default Home