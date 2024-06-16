import React, { Fragment } from "react";

import "./styles/App.css";
import {Navbar} from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import { Counter } from "./components/Counter/Counter";

import artcile1Img from './assets/images/article1.png'
import artcile2Img from './assets/images/article2.png'
import artcile3Img from './assets/images/article3.png'

// Componente em classe: classe que herda a classe Component do React e retorna HTML dentro do método render.

// figma.com/file/rWyLhkEgt6eHvApPaL0K36/Space-Flight-News-(2022)?node-id=0963A1
class App extends React.Component {
  // render method responsible for rendering the HTML content from our component

  // <> fragment - just to group components
  render(){
    return (
      <> 
        <Navbar />
        
{/*         <Counter /> */}

      <section id="articles">
          
          <Article 
            title="Designing Dashboards"
            provider= "NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={artcile1Img}
          />

          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews" 
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={artcile2Img}
          />

          <Article
            title="36 Days of Malayalam type" 
            provider="Spaceflight Now" 
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={artcile3Img}
          />

          <Article
            title="Designing Dashboards"
            provider= "NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={artcile1Img}
          />
        </section> 

      </>
    );
  }
 
}

export default App;
