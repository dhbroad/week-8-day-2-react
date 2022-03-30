import React, { Component } from 'react'
import Post from '../components/Post'

export default class IG extends Component {
  constructor(){
      super();
      this.state = {
          posts: []
      }
  }



    componentDidMount = async () => {
        // Once it has mounted, we can fetch our data
        const res = await fetch(`https://127.0.0.1:5000/api/posts`);
        const data = await res.json();
        const myPosts = data.posts;
        this.setState({
            articles: myPosts
        })
    }


    render() {
    console.log(this.state.articles)
      return (
    <div class="row">
        {this.state.posts.map((p, i)=><Post key={i} post={p}/>)} {/* p for post, i for index*/}
    </div>
      )
    }
}