import React from "react";
import artcileImg from '../../assets/images/article1.png'

import './styles.css'

/*
    this.props = {
    title: "Exemplo"}
*/

export class Article extends React.Component{
    render(){
        return(
            <article id="article">
                <img src={this.props.thumbnail} alt="article-figure" />

                <div className="article-infos">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.provider}</h3>
                    <p>{this.props.description}</p>
                </div>
            </article>
        )
    }
}


//export default Article;