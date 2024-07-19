import React from 'react'
import {Header,Footer, Valeur,Mission,Equipe,Formulaire,Raison} from "./components"
import "./App.css"

const App = () => {
  return (
  <div> 
    <Header/>
    <Mission/>
    <Equipe/>
    <Valeur/>
    <Raison/>
    <Formulaire/>
    <Footer/>
  </div>
  )
}

export default App