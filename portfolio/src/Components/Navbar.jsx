

import { useState } from "react"
import "./NavBar.css"

import Navbarmenu from "./Navbarmenu"


const Navbar = ({estado, setEstilo}) => {
 
  const [trocar, setTrocar] = useState (false)
  const [nomeBTN, setBtn] =useState (false)

  const btnColor = () => {
  
  const novoValor = trocar ? false : true
  setTrocar (novoValor)
  setEstilo (trocar)
  setBtn (novoValor)


  }
  return (
    <nav>
        <div className="navbar" >

       <Navbarmenu/>
</div>

<button onClick={btnColor} >{nomeBTN ? "Light" : "Dark"}</button>






    </nav>

    
  )
}

export default Navbar