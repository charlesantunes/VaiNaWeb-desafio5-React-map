import React, { Component } from "react";
import "./App.css";
import Chelsea from "./assents/Chelsea.png";
import Corinthians from './assents/Corinthians.png';
import Flamengo from "./assents/Flamengo.png";
import Paysandu from "./assents/Paysandu.png";
import PSG from './assents/PSG.png';
import RealMadrid from "./assents/RealMadrid.png";

export default class App extends Component {
  state = {
    melhoresTimes: [
      { 
        id: 1,
        time: "Paysandu",
        fundação: 1914,
        coresBandeira: "azul e branco",
        cidade: "Pará",
        img: Paysandu
      },{
        id: 2,
        time: "Corinthias",
        fundação: 1910,
        coresBandeira: "branco e preto",
        cidade: "São Paulo",
        img: Corinthians
      },{
        id: 3,
        time: "Flamengo",
        fundação: 1895,
        coresBandeira: "vermelho e preto",
        cidade: "Rio de Janeiro",
        img: Flamengo
      },{
        id: 4,
        time: "Chelsea",
        fundação: 1905,
        coresBandeira: "azul e branco",
        cidade: "Londres",
        img: Chelsea
      },{
        id: 5,
        time: "PSG - Paris Saint-Germain",
        fundação: 1970,
        coresBandeira: "azul e vermelho",
        cidade: "Paris",
        img: PSG
      },{
        id: 6,
        time: "Chelsea",
        fundação: 1929,
        coresBandeira: "branco",
        cidade: "Madri",
        img: RealMadrid
      }
    ]
  }

  
  render(){
    return(
      <nav>
        {this.state.melhoresTimes.map((item) => (
          <section key={item.id}>
            <ul className="container">
              <img src={item.img} alt="escutodo do time"/>
              <li>Time: {item.time}</li>
              <li>Ano de fundação: {item.fundação}</li>
              <li>Cores da bandeira{item.coresBandeira}</li>
              <li>Cidade do time: {item.cidade}</li>
              <button>Página do time</button>
            </ul>
          </section>

        ))}

      </nav>
    )
  }
}