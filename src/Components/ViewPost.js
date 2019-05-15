import React, { Component } from 'react'
import axios from 'axios';

import EditPost from './EditPost';
import CommentList from './CommentList';
export default class ViewPost extends Component {

  state = {
    post: {},
    edit: '',
    gamePosts: false,
    myPosts: false
  }

  fetchPost = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/posts/${this.props.postId}`, {
      method: 'GET'
    })
      .then(results => results.json())
      .then(data => this.setState({ post: data }))
  }

  componentDidMount() {
    this.fetchPost();
  }

  returnToGamePosts = (e) => {
    e.preventDefault();
    this.props.handleNewPostSubmit();
  }

  handleClick = () => {
    this.setState({
      edit: true
    })
  }

  handleBackToPosts = () => {
    this.setState({
      edit: false
    })
  }

  render() {
    if (this.state.edit === true) {
      return (
        <div>
          <EditPost
            handleGoBack={this.props.handleGoBack}
            handleBackToPosts={this.handleBackToPosts}
            post={this.state.post} />
        </div>
      )
    }

    if (this.props.user._id === this.state.post.user) {
      return (
        <div class="parent-container">
          <button className="back" onClick={this.props.handleGoBack}>Back to posts</button>
          <h3>{this.state.post.title}</h3><p> - {this.props.username}</p>
          <br />
          <p className="game-title">{this.state.post.gameTitle} on {this.state.post.platform}</p>
          <br />
          <p className="content">{this.state.post.content}</p>
          <br />
          <button name="editPost" onClick={this.handleClick}>Edit</button>
          <CommentList user={this.props.user}
            post={this.state.post} />
        </div>
      )
    }
    return (
      <div class="parent-container">
        <button className="back" onClick={this.props.handleGoBack}>Back to posts</button>
        <h3>{this.state.post.title}</h3><p> - {this.props.username}</p>
        <br />
        <p className="game-title">{this.state.post.gameTitle} on {this.state.post.platform}</p>
        <br />
        <p className="content">{this.state.post.content}</p>
        <br />
        <CommentList user={this.props.user}
          post={this.state.post} />
      </div>
    )
  }
}
