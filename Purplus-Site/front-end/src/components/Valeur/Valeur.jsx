import React from 'react'
import "./Valeur.css"

const Valeur = () => {
  return (
    <header className='totalval'>
      <h2>Nos Valeurs</h2>
      <div className='valeur'>
        <h3 className='innov'> Innovation</h3>
        <h3 className='qual'> Qualite</h3>
        <h3 className='integ'> Integrite</h3>
        <h3 className='eng'> Engagement</h3>
      </div>
      <div className='descrip'>
        <p className='innov'>Nous nous efforçons constamment de rester à la pointe des technologies et des tendances digitales pour offrir des solutions novatrices.</p>
        <p className='qual'>  Nous garantissons des services de haute qualité, répondant aux normes les plus strictes de l'industrie.</p>
        <p className='integ'>Nous croyons en la transparence et l'honnêteté dans toutes nos interactions, assurant une collaboration basée sur la confiance mutuelle.</p>
        <p className='eng'> La satisfaction de nos clients est notre priorité. Nous nous engageons à fournir un support et des solutions personnalisées adaptées à vos besoins spécifiques.</p>
      </div>
    </header>
  )
}

export default Valeur