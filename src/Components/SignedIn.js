import React, { Component } from 'react';
import Nav from './Nav';

export default class extends Component {
  render() {
    return (
      <div>
        <Nav
          user={this.props.user}
        />
      </div>
    )
  }
}
