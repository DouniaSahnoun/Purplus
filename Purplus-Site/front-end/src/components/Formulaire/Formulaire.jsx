import React from 'react'
import "./Formulaire.css"

const Formulaire = () => {
  return (
    <header className='Form'>
      <h2>Vous etes</h2>
      <div className='info'>
        <h3>Nom</h3>
        <h4 className='input'>Nom</h4>
        <h3>Prenom</h3>
        <h4 className='input'>Prenom</h4>
        <h3>Adresse Mail</h3>
        <h4 className='input'>Adresse Mail</h4>
        <h3>Telephone</h3>
        <h4 className='input'>Telephone</h4>
        <h3>Votre Message</h3>
        <h4 className='inputMessage'>Entrez le message...</h4>
      </div>
      </header>
  )
}

export default Formulaire