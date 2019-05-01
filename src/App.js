import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    isLoggedIn: "",
    user: ""
  }

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

  // handleInput = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // handleLogin = event => {
  //   event.preventDefault();
  //   axios
  //     .post("https://battle-buddy-redux-be.herokuapp.com/users/login", {
  //       email: this.state.email,
  //       password: this.state.password
  //     })
  //     .then(res => {
  //       let user = res.data.user
  //       localStorage.token = res.data.signedJwt;
  //       this.setState({
  //         isLoggedIn: true,
  //         redirect: true,
  //         user
  //       });
  //       console.log(this.state.user);
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      // <form>
      //   <input name="email" placeholder="Email" onChange={this.handleInput} />
      //   <input type="password" name="password" placeholder="Password" onChange={this.handleInput} />
      //   <button name="login" onClick={this.handleLogin}>Submit</button>
      // </form>
      <h1>Test</h1>
    )
  }
}
