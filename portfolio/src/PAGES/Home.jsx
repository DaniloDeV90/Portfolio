

import { useEffect, useRef, useState } from "react";
import "./Home.css"
import 'animate.css';
import html from "./images/html.png"
import css from "./images/css.png"
import js from "./images/js.png"
import reactr from "./images/reactr.png"
import web_pack from "./images/web_pack.png"
import Node from "./images/Node.png"
import express from "./images/express.png"
import Sequelize from "./images/Sequelize.png"
import Mongo from "./images/Mongo.png"
import Postgre from "./images/Postgres.png"
import githubF from "./images/githubF.svg"
import ibagens from "./images/ibagens.png"
const Home = () => {






  return (
    <main>

<div className="titulo">
<h1 className="animate__animated animate__fadeInTopLeft">Danilo do Carmo</h1> 
<p className="animate__animated animate__fadeInTopLeft">Desenvolvedor Full Stack Js</p>
</div>

<div className="conteudo">

<div className="card1">
  <div className="lista">
    <h1>Sobre mim</h1>
 <p> Sou um estudante e futuro desenvolvedor Full Stack Javascript, Estou no 3 semeste em Análise e Desenvolvimento de sistemas na faculdade UNIDESC Luziânia -GO, tenho 19 anos e estou em busca da primeira oportunidade.</p>


  <h2 id="h3git" >Acesse meu git</h2>


</div>

<div className="gitcard">

 <a href="https://github.com/DaniloDeV90" target="_blank">  <img src={githubF} alt="" className="imgGit" width={"200px"}/></a>


</div>


 
  
</div>

<div className="card1_5">
<img src={ibagens} alt="" width={"100%"}/>
</div>


<div className="card2">
  <div className="tec">
  <h1 id="tecnologias">Tecnologias</h1>

  <h2>Front-End</h2>
  <ul className="ulFront">
 
    <li><img src={html} width={"20px"} height={"20px"} alt="Imagem da logo do HTML" /> HTML</li>
    <li > <img src={css} width={"20px"} height={"20px"} alt="imagem da logo do css" />CSS</li>
    <li> <img src={js} width={"20px"} height={"20px"} alt="imagem da logo do css" />Javascript</li>
    <li > <img src={reactr} width={"20px"} height={"20px"} alt="imagem da logo do react" /> REACT</li>
    <li> <img src={web_pack} width={"20px"} height={"20px"} alt="imagem da logo do webpack" />Webpack</li>

    </ul>
    </div>

    <div className="tec">
  <h2>Back-End</h2>

  <li > <img src={Node} width={"20px"} height={"20px"} alt="imagem da logo do Node" />NODE</li>
  <li> <img src={express} width={"20px"} height={"20px"} alt="imagem da logo do express" />EXPRESS</li>
  <li> <img src={Sequelize} width={"20px"} height={"20px"} alt="imagem da logo do Sequelize" /> Sequelize</li>
  <h3>Banco de dados NoSQL</h3>
  <li> <img src={Mongo} width={"20px"} height={"20px"} alt="imagem da logo do Sequelize" />Mongodb</li>
  <h3>Banco de dados SQL</h3>
  <li> <img src={Postgre} width={"20px"} height={"20px"} alt="imagem da logo do Sequelize" />PostgreSQL</li>
  
  </div>
</div>
</div>






  </main>
  )
}

export default Home