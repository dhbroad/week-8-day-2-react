import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
          <ul>
          {this.props.us.map((person,i)=>(<li key={i}>{person}</li>))} {/* .map() loops through (for person in this.props.us).
         We also have access to the index "i" so we can use that in our key. Note: a unique key is required for each */}
          </ul>
      </div>
    )
  }
}
