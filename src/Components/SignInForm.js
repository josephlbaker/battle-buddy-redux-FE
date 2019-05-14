import React, { Component } from 'react'

export default class SignInForm extends Component {

  render() {
    return (
      <div>
        <form>
          <input name="email" placeholder="Email" onChange={this.props.handleInput} />
          <input type="password" name="password" placeholder="Password" onChange={this.props.handleInput} />
          <button name="signin" onClick={this.props.handleSignIn}></button>
        </form>
      </div >
    )
  }
}
