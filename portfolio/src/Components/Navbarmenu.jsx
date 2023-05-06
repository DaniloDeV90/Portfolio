
import { NavLink } from 'react-router-dom'
const Navbarmenu = () => {
  return (
 <>

   <div> <NavLink to="/" id="link">Home</NavLink> </div>
<div><NavLink to={"/Contato"} id="link" >Contato</NavLink> </div>
<div><NavLink to={"/Projetos"} id="link" >Projetos</NavLink> </div>

 </>
  )
}

export default Navbarmenu