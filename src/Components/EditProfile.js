import React, { Component } from 'react'

export default class EditProfile extends Component {

  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    email: this.props.user.email,
    username: this.props.user.username,
    password: this.props.user.password,
  }

  render() {
    return (
      <div>
        <form>
          <p>First Name</p>
          <input name="firstName" placeholder={this.state.firstName} onChange={this.props.handleInput} />
          <p>Last Name</p>
          <input name="lastName" placeholder={this.state.lastName} onChange={this.props.handleInput} />
          <p>Email</p>
          <input name="email" placeholder={this.state.email} onChange={this.props.handleInput} />
          <p>Username</p>
          <input name="username" placeholder={this.state.username} onChange={this.props.handleInput} />
          <p>Password</p>
          <input name="password" placeholder="New Password" onChange={this.props.handleInput} />
          <button name="editProfile" onClick={this.props.handleEditProfile}>Submit</button>
        </form>
      </div>
    )
  }
}
