
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './PAGES/Home'
import Contato from './PAGES/Contato'
import Projetos from './PAGES/Projetos'

import { useState } from 'react'


function App() {
const [estilo, setEstilo] = useState (true)

const NewEstilo = () => {

  if (estilo === true) {
  return  setEstilo ("escuro")
  }
  if (estilo === false) {
    return setEstilo ("claro")
  }
 
}
NewEstilo ()



  return (
    <div className={`container ${estilo}`}  >
 
      <BrowserRouter>
      
      <Navbar  estado= {estilo} setEstilo={setEstilo}/> 

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Contato" element={<Contato/>}></Route>
        <Route path="/projetos" element={<Projetos/>}></Route>
      </Routes>
      </BrowserRouter>
     
      <footer> Desenvolvedor </footer>
    </div>
  )
}

export default App
