import React, { Component } from 'react';
import Nav from './Nav';

export default class extends Component {
  render() {
    return (
      <Nav
        user={this.props.user}
      />
    )
  }
}
