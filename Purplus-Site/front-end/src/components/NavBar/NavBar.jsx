import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return <nav>
    <ul>
      <li>
        <a href='#Acceuil'>Acceuil</a>
      </li>
      <li>
        <a href='#Mission'>Qui sommes-nous?</a>
      </li>
      <li>
        <a href='#'>nos services</a>
      </li>
      <li>
        <a href='#contact'>Contactez-nous</a>
      </li>
    </ul>
  </nav>
}

export default NavBar