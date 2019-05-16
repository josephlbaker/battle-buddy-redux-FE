import React, { Component } from 'react'

export default class NewPost extends Component {
  render() {
    return (
      <div className="add-post">
        <button className="back" onClick={this.props.handleCancel}>Cancel</button>
        <div>
          <form onSubmit={this.props.handleNewPost}>
            <p>Title</p>
            <input className="text" name="title" placeholder="Title" onChange={this.props.handleInput} />
            <p>Content</p>
            <input className="text" name="content" placeholder="Content" onChange={this.props.handleInput} />
            <p>Platform</p>
            <input className="text" name="platform" placeholder="platform" onChange={this.props.handleInput} />
            <input className="submit-button" type="submit" value="Submit" name="submit" />
          </form>
        </div>
      </div>
    )
  }
}
