import React from 'react'
import axios from "axios"
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PropagateLoader } from 'react-spinners'
import Navbar from '../components/Navbar'


function AllBeers() {

    const navigate = useNavigate()
  
    // 1. Create the state when the info is going to be save
    const [allBeers, setAllBeers] = useState(null)
    const [searching, setSearching] = useState(true)

    // 2. access to the componentDidMount who's going to sarch the info from the API
    useEffect(() => {
        getAllBeers()
    }, [])

    // 3. Function to summon on componentDidMount
    const getAllBeers = async () => {
        try{
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setAllBeers(response.data)
            setSearching(false)
        } catch (error) {
             navigate("/error")
        }
    }

    // 4. Create Loading Effect
    if (searching === true) {
        return <PropagateLoader color={"blue"} />
    }
  
    return (
      
    <div id="allBeers">

        <Navbar />

        {
            allBeers.map((eachBeer) => {
                return(
                    <div key={eachBeer._id} id="container">
                    <img src={eachBeer.image_url} alt="Beer" height="150" />
                    <div id="container-details">
                    <Link to={ `/beers/${eachBeer._id}` }>{eachBeer.name}</Link>
                    <h3>{eachBeer.tagline}</h3>
                    <h5>{eachBeer.contributed_by}</h5>
                    <br></br>
                    
                    </div>
                    
                    </div>
                )
            })
            
        }
       

    </div>
  )
}

export default AllBeers