import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Post from './components/Post';
import About from './views/About';
import Home from './views/Home';
import IG from './views/IG';
import News from './views/News';
import Shop from './views/Shop';


export default class App extends Component {
  constructor() {
    super();
    // console.log('Main app: I have constructed')
    this.state = {
      name: 'David',
      age: 31,
      people: ['David','Christine']
    }
  }
  happyBirthday = () => {
    this.setState(
      {age:this.state.age +1}
    )
  };

  componentDidMount () {
    // console.log("MAIN APP: I have mounted")
  }



  render() {
    // console.log("MAIN APP: I have rendered")
    return (
      <div>
        <Navbar myName={this.state.name}/>
        {/* <h1>Hi, I am {this.state['name']} and I am {this.state.age}.</h1> {/* accessing the state of the state. You can index into the item if it is indexable
      <button onClick={()=>this.happyBirthday()}>Happy Birthday</button> */}
        <div class="container">
        <Routes>
          <Route path='/' element={<Home />}/> {/* Path takes in a couple of parameters*/}
          <Route path='/about' element={<About us={this.state.people}/>}/>
          <Route path='/news' element={<News />}/>
          <Route path='/instagram' element={<IG />}/>
          <Route path='/products' element={<Shop />}/>
          
        </Routes>
        </div>
      </div>
    )
  }
}