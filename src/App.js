import React, { Component } from 'react'

export default class App extends Component {

  // fetchPosts = () => {
  //   fetch("http://localhost:3001/posts", {
  //     method: "GET"
  //   })
  //     .then(results => results.json())
  //     .then(data => this.setState({ posts: data }))
  //     .catch(function (error) { console.log(error) });
  // }

  // componentDidMount() {
  //   this.fetchPosts();
  // }

  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}
