import axios from 'axios'
import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

function RandomBeer() {

    const [ randomBeerDetails, setRandomBeerDetails ] = useState(null)
    const [ searching, setSearching ] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        getRandomBeerDetails()
    }, [])

    const getRandomBeerDetails = async () => {
        try  {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random/")
            setRandomBeerDetails(response.data)
            setSearching(false)
        } catch (error) {
            navigate("/error")
        }
    }

    if (searching === true) {
        return <PropagateLoader color={"blue"} />
    }

  return (
    <div>

    <Navbar />

    <div id="random-container">

    <img src={randomBeerDetails.image_url} alt="Beer" width="75"/>
    <div id="random-details">
    <title className="random-title">
    <h2>{randomBeerDetails.name}</h2>
    <p>{randomBeerDetails.attenuation_level}</p>
    </title>
    <p>{randomBeerDetails.tagline}</p>
    <p>{randomBeerDetails.first_brewed}</p>
    
    <p>{randomBeerDetails.description}</p>
    <p>{randomBeerDetails.contributed_by}</p>
    </div>
    </div>
    </div>
  )
}

export default RandomBeer