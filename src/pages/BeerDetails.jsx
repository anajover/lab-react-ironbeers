import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'

function BeerDetails() {

    // 1. Create the status
    const [ beerDetails, setBeerDetails ] = useState(null)
    const [ searching, setSearching ] = useState(true)

    const { beerId } = useParams();
    const navigate = useNavigate()

    // 2. componentDidMount
    useEffect(() => {
        getBeerDetails()
    }, [])

    // 3. call the API
    const getBeerDetails = async () => {

        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            setBeerDetails(response.data)
            setSearching(false)
        } catch (error) {
            navigate("/error")
        }
    }

    // 4. Loading
    if (searching === true) {
        return <PropagateLoader color={"blue"} />
    }


  return (
    <div>

    <header>
        <Link to="/">Home</Link>
    </header>

    <img src={beerDetails.image_url} alt="Cerveza" height={200}/>
    <h2>{beerDetails.name}</h2>
    <p>{beerDetails.tagline}</p>
    <p>{beerDetails.first_brewed}</p>
    <p>{beerDetails.attenuation_level}</p>
    <p>{beerDetails.description}</p>
    <p>{beerDetails.contributed_by}</p>

    </div>
  )
}

export default BeerDetails