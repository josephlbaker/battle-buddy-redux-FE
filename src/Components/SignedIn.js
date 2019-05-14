import React, { Component } from 'react';
import Nav from './Nav';

export default class extends Component {

  handleLogOut = () => {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
    window.location.href = "/"
  };

  render() {
    return (
      <div>
        <Nav
          user={this.props.user}
        />
        <button onClick={this.handleLogOut}>Log Out</button>
      </div>
    )
  }
}
