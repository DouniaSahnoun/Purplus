import React from 'react'
import "./Mission.css"
import {Image} from "../../assets"

const Mission = () => {
  return (
    <header>
      <div className='total'>
      <h1> Notre Mission</h1>
      <p className='texte'>Chez Purplus, notre mission est de propulser votre entreprise vers de 
nouveaux sommets en exploitant le pouvoir de la technologie. Nous nous 
engageons à fournir des services de haute qualité qui incluent la 
conception de sites web, la digitalisation des processus d'affaires, ainsi que 
des solutions avancées en intelligence artificielle et automatisation. Notre 
objectif est de simplifier votre transition vers le numérique et d'optimiser 
vos opérations pour une efficacité maximale.</p> 
<img src={Image} alt='image' className='image'/> </div>
</header>
  )
}

export default Mission