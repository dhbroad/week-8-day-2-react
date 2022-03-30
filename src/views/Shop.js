import React, { Component } from 'react'
import Products from '../components/Products';

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
        products:[]
    }
  }

  componentDidMount = async () => {
    // Once it has mounted, we can fetch our data
    const res = await fetch(`http://127.0.0.1:5000/api/products`);
    const data = await res.json();
    const myProducts = data.articles;
    this.setState({
        products: myProducts
    })
}


render() {
  console.log(this.state.articles)
return (
  <div class="row">
      {this.state.products.map((p, i)=><Products key={i} product={p}/>)} {/* p for product, i for index*/}
  </div>
)
}
}


