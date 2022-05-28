import axios from 'axios'
import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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

    <header>
        <Link to="/">Home</Link>
    </header>

    <img src={randomBeerDetails.image_url} alt="Beer" height="200"/>
    <h2>{randomBeerDetails.name}</h2>
    <p>{randomBeerDetails.tagline}</p>
    <p>{randomBeerDetails.first_brewed}</p>
    <p>{randomBeerDetails.attenuation_level}</p>
    <p>{randomBeerDetails.description}</p>
    <p>{randomBeerDetails.contributed_by}</p>

    </div>
  )
}

export default RandomBeer