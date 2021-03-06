import React, { Component } from 'react'
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class SignedOut extends Component {

  render() {
    return (
      <Router>
        <div>
          <Link to="/">Sign In</Link>
          <Link to="/signup/">Sign Up</Link>
          <Route
            path="/"
            render={(props) => <SignInForm {...props}
              handleInput={this.props.handleInput}
              handleSignIn={this.props.handleSignIn} />}
          />
          <Route
            path="/signup/"
            render={(props) => <SignUpForm {...props}
              handleInput={this.props.handleInput}
              handleSignUp={this.props.handleSignUp} />}
          />
        </div>
      </Router>
    )
  }
}


