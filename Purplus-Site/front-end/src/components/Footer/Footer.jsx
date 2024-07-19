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
      <h5>Acceuil</h5>
      <h5>Qui sommes-nous?</h5>
      <h5>Nos services</h5>
      </div>
    </header>
  )
}

export default Footer