import React, { Component } from 'react'
import Article from '../components/Article'

export default class news extends Component {
    constructor(){
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount = async () => {
        // Once it has mounted, we can fetch our data
        // const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=0850cf003d1d486ebc3fb4094fc68467`);
        // const data = await res.json();
        // const myArticles = data.articles;
        // this.setState({
        //     articles: myArticles
        // })
    }


  render() {
      console.log(this.state.articles)
    return (
      <div class="row">
          {this.state.articles.map((a, i)=><Article key={i} article={a}/>)} {/* a for article, i for index*/}
      </div>
    )
    }
}
