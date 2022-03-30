import React, { Component } from 'react'

export default class Article extends Component {
  render() {
      const a = this.props.article // So we don't have to type this.props.article every time
    return (
      <div class="card" style={{width: '18rem', }}> {/* JSX styling has to be a dictionary*/}
      <img src={a.urlToImage} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{a.title}</h5>
        <h6>{a.author?a.author:'Author Unknown'} - {a.source.name}</h6>
        <p class="card-text">{a.description}</p>
        <a href={a.url} target='_blank' class="btn btn-primary">See Full Article</a>
      </div>
    </div>
    )
  }
}
