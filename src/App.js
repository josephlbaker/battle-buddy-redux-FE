import React, { Component } from 'react'
import axios from 'axios';
import { BrowserRouter as Redirect } from "react-router-dom";

import SignedIn from './Components/SignedIn';
import SignedOut from './Components/SignedOut';

export default class App extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    isLoggedIn: false,
    user: '',
    redirect: false
  }

  componentDidMount() {
    if (localStorage.token) {
      axios({
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/users/`,
        headers: { authorization: `Bearer ${localStorage.token}` }
      })
        .then(response => {
          console.log('App successfully recieves a response', response)
          this.setState({
            isLoggedIn: true,
            user: response.data
          });
        })
        .catch(err => console.log(err))
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSignUp = event => {
    event.preventDefault();
    axios
      .post("https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/users/signup", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        redirect: true,
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.signedJwt;

        this.setState({
          isLoggedIn: true,
          user: response.data.user
        });
      })
      .catch(err => console.log(err));
  };

  handleSignIn = event => {
    event.preventDefault();
    axios
      .post("https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        let user = res.data.user
        localStorage.token = res.data.signedJwt;
        this.setState({
          isLoggedIn: true,
          redirect: true,
          user
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <SignedIn
            user={this.state.user}
          />
        </div>
      )
    } else {
      return (
        <SignedOut
          handleInput={this.handleInput}
          handleSignIn={this.handleSignIn}
          handleSignUp={this.handleSignUp}
        />
      )
    }
  }
}
