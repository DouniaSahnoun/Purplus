import React from 'react'
import "./Header.css"
import {affichageLogoL} from "../../assets"

const Header = () => {
  return  (
    <header>
      <div className="Acceuil">
        <img src={affichageLogoL} alt='Logo' className='logo'/>
        <a href='#' className="btn-contact"> Nous Contacter</a>
        </div>
        <p className='presentation'> Votre partenaire de confiance pour la transformation digitale et le web design. Nous sommes une entreprise spécialisée 
dans le développement de solutions numériques innovantes, dédiée à aider les entreprises à se démarquer dans un monde 
de plus en plus digitalisé. </p>
    </header>
  )
}

export default Header