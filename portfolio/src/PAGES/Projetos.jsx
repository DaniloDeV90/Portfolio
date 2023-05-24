
import "./Projetos.css"
import  Agenda from "./ImagensProj/Agenda.jpg"
import imgFilme from "./ImagensProj/imgFilme.jpg"
import LandingPage from "./ImagensProj/LandingPage.png"
const Projetos = () => {
  


  return (
    <main>

    <div>



      <div className="cards">

        <div className="cardProjeto">
          <a href="https://teste2-sooty.vercel.app" target="_blank">

    
          <div className="img">
          <img src={Agenda} alt="" className="imagensProjetos" width={"350px"} height={"200px"} />
          <p>React agenda</p>
          <p>Tecnlogias utilizadas: </p>
          <ul>
          <li>React</li>
          <li>Css</li>
          <li>Node</li>
          <li>Sequelize</li>
          <li>PostgreSQL</li>
         </ul>
          </div>
          </a>
     

        </div>
        <div className="cardProjeto">
          <a href="https://encontrar-filmes.vercel.app" target="_blank">

    
          <div className="img">
          <img src={imgFilme} alt="" className="imagensProjetos" width={"350px"} height={"200px"} />
          <p>Gerador de filmes aleatórios</p>
          <p>Tecnlogias utilizadas: </p>
          <ul>
          <li>React</li>
          <li>Javascript</li>
         </ul>
          </div>
          </a>
     

        </div>
          
        <div className="cardProjeto">
          <a href="https://rocket-nfts-seven.vercel.app" target="_blank">

    
          <div className="img">
          <img src={LandingPage} alt="" className="imagensProjetos" width={"350px"} height={"200px"} />
          <p>Landing Page</p>
          <p>Tecnlogias utilizadas: </p>
          <ul>
          <li>React</li>
       
         </ul>
          </div>
          </a>
     

        </div>
          
        </div>
        <div className="cardProjeto">
        <div className="img">
          
          </div>
          
        </div>
      </div>
    
      
    </main>
  
  )
}

export default Projetos