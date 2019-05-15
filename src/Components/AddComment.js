import React, { Component } from 'react'

export default class AddComment extends Component {
  render() {
    return (
      <div className="new-post">
        <h2>Add a Comment</h2>
        <form onSubmit={this.props.handleNewComment}>
          <input className="text-area" name="content" onChange={this.props.handleInput} />
          <button size='mini'><button className="cancel-button" onClick={this.props.cancelComment}>Cancel</button></button>
          <button primary size='mini'><input className="submit-button" name="submit" type="submit" value="Submit" /></button>
        </form>
      </div>
    )
  }
}
