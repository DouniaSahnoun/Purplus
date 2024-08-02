import React from 'react'
import "./Header.css"
import {affichageLogoL,Light,Night} from "../../assets"
import NavBar from "../NavBar/NavBar"

const Header = () => {
  return  (
    <header>
      <div className="Acceuil" id='Acceuil'>
        <NavBar/>
        <img src={Light} alt='LightMode' className='btn-light'/>
        <img src={Night} className='switch-night'/> 
        <img src={affichageLogoL} alt='Logo' className='logo'/>
        <a href='#contact' className="btn-contact"> Nous Contacter</a>
        </div>
        <p className='presentation'> Votre partenaire de confiance pour la transformation digitale et le web design. Nous sommes une entreprise spécialisée 
dans le développement de solutions numériques innovantes, dédiée à aider les entreprises à se démarquer dans un monde 
de plus en plus digitalisé. </p>
    </header>
  )
}

export default Header