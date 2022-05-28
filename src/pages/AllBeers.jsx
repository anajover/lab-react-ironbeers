import React from 'react'
import axios from "axios"
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PropagateLoader } from 'react-spinners'


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
      
    <div>

    <header>
        <Link to="/">Home</Link>
    </header>

        {
            allBeers.map((eachBeer) => {
                return(
                    <li key={eachBeer._id}>
                    <img src={eachBeer.image_url} alt="Beer" height="150" />
                    <Link to={ `/beers/${eachBeer._id}` }>{eachBeer.name}</Link>
                    <br></br>
                    {eachBeer.tagline}
                    <br></br>
                    {eachBeer.contributed_by}
                    <br></br>
                    <hr />
                    </li>
                )
            })
            
        }
       

    </div>
  )
}

export default AllBeers