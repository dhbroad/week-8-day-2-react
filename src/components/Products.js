import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        const p = this.props.product // So we don't have to type this.props.product every time
      return (
        <a href='/products' class="card text-decoration-none" style={{width: '18rem'}}>
                        <img src={p.image} class="card-img-top" alt={p.title} />
                        <div class="card-body">
                        <h5 class="card-title">{p.title}</h5>
                        <p class="card-text">{p.caption}</p>
                        </div>
                    </a>
      )
    }
  }
