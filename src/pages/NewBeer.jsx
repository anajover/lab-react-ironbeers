import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function NewBeer() {

  const navigate = useNavigate()

  const [ name, setName ] = useState("")
  const [ tagline, setTagline ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ firstBrewed, setFirstBrewed ] = useState("")
  const [ brewersTips, setBrewersTips ] = useState("")
  const [ attenuationLevel, setAttenuationLevel ] = useState(0)
  const [ contributedBy, setContributedBy ] = useState("")

  const handleNameChange = (e) => setName(e.target.value)
  const handleTaglineChange = (e) => setTagline(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleFirstBrewedChange = (e) => setFirstBrewed(e.target.value)
  const handleBrewersTipsChange = (e) => setBrewersTips(e.target.value)
  const handleAttenuationLevelChange = (e) => setAttenuationLevel(e.target.value)
  const handleContributedByChange = (e) => setContributedBy(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{

      const newBeer = {
        name,
        tagline,
        description,
        firstBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy
      }

      const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      navigate("/beers")

    } catch (error) {
      navigate("/error")
    }
  }

  return (
    <div>

    <Navbar />

    <br />

    <form onSubmit={handleSubmit}>

    <div id="form-class">

    <label htmlForm="name">Name</label>
    <input className="input-field" type="text" name="name" value={name} onChange={handleNameChange} />

    <label htmlForm="tagline">Tagline</label>
    <input className="input-field" type="text" name="tagline" value={tagline} onChange={handleTaglineChange} />
    
    <label htmlForm="description">Description</label>
    <input className="input-field description-field" type="text" name="description" value={description} onChange={handleDescriptionChange} />

    <label htmlForm="firstbrewed">First Brewed</label>
    <input className="input-field" type="text" name="firstbrewed" value={firstBrewed} onChange={handleFirstBrewedChange} />

    <label htmlForm="brewerstips">Brewers Tips</label>
    <input className="input-field" type="text" name="brewerstips" value={brewersTips} onChange={handleBrewersTipsChange} />

    <label htmlForm="attenuationlevel">Attenuation Level</label>
    <input className="input-field" type="number" name="attenuationlevel" value={attenuationLevel} onChange={handleAttenuationLevelChange} />

    <label htmlForm="contributedby">Contributed By</label>
    <input className="input-field" type="text" name="contributedby" value={contributedBy} onChange={handleContributedByChange} />
    </div>

    <br />

    <button className="new-btn">ADD NEW</button>

    </form>

    </div>
  )
}

export default NewBeer