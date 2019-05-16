import React, { Component } from 'react'
import axios from 'axios';

import EditProfile from './EditProfile';

export default class Profile extends Component {

  state = {
    render: false,
    edit: false
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleEditProfile = event => {
    event.preventDefault();
    axios
      .put(`https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/users/${this.props.user._id}/update`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      })
      .then(res => {
        console.log(res);
        window.location.href = "/profile/"
      })
      .catch(err => {
        console.log("Error");
      })
  };

  handleClick = () => {
    this.setState({ render: true });
  }

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

    if (this.state.render) {
      return <EditProfile
        handleInput={this.handleInput}
        handleEditProfile={this.handleEditProfile}
        user={this.props.user}
      />
    } else {
      return (
        <div className="profile-container">
          <img src="https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg" alt="" />
          <br />
          First Name
          <p>{this.props.user.firstName}</p>
          <br />
          Last Name
          <p>{this.props.user.lastName}</p>
          <br />
          Username
          <p>{this.props.user.username}</p>
          <br />
          Email
          <p>{this.props.user.email}</p >
          <br />
          <br />
          <button onClick={this.handleClick}>Edit Profile</button>
          <button onClick={this.handleLogOut}>Log Out</button>
        </div>
      )
    }
  }
}
