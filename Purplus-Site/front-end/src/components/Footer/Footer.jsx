import React from 'react'
import "./Footer.css"
import { affichageLogoL, Insta, Xlogo} from '../../assets'

const Footer = () => {
  return (
    <header className='FooterBK'>
      <img src={affichageLogoL} alt='logo' className='minilogo'/>
      <div className='liens'>
      <img src={Insta} alt='insta' className='lien'/>
      <img src={Xlogo} alt='X' className='lienX'/> </div>
      <p className='Figma'>Concu avec Figma</p>
      <div className='menuFooter'>
      <a href='#Acceuil'>Acceuil</a>
      <a href='#Mission'>Qui sommes-nous?</a>
      <a>Nos services</a>
      </div>
    </header>
  )
}

export default Footer