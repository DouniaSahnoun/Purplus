import React from 'react'
import "./Equipe.css"
import {equipe, gradient,gradientG} from "../../assets"

const Equipe = () => {
  return (
    <header className='Equipe'>
      <h2>Notre Equipe</h2>
      <p className='texte_equipe'>Notre équipe est composée de professionnels passionnés par le numérique et experts dans leurs domaines 
        respectifs. Des designers créatifs aux développeurs techniques, en passant par les spécialistes en IA et 
        automatisation, chaque membre de notre équipe apporte une expertise unique et un engagement envers 
        l'excellence. Ensemble, nous travaillons pour transformer vos idées en réalités digitales.
      </p>
      <div className='assemble'>
      <img src={equipe} alt='employer' className='equipe'/>
      <img src={equipe} alt='employer' className='equipe1'/>
      <img src={equipe} alt='employer' className='equipe2'/>
      <img src={equipe} alt='employer' className='equipe3'/>
      <img src={gradientG} alt='effet' className='gauche'/>
      <img src={gradient} alt='effet' className='droit'/>
      </div>
    </header>
  )
}

export default Equipe