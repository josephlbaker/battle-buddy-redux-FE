import React, { Component } from 'react'

import ViewPost from './ViewPost';
export default class MyFeed extends Component {

  state = {
    posts: [],
    postId: '',
    newPost: false
  }

  handleClick(result) {
    this.setState({
      postId: result._id,
      username: result.user.username
    })
  }

  fetchPosts = () => {
    fetch("https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/posts", {
      method: "GET"
    })
      .then(results => results.json())
      .then(data => this.setState({ posts: data }))
      .catch(function (error) { console.log(error) });
  }

  componentDidMount() {
    this.fetchPosts();
  }

  handleGoBack = () => {
    this.setState({
      postId: ''
    })
    this.fetchPosts();
  }

  _renderPosts = (post, index) => {
    if (post.user.username === this.props.user.username) {
      return (
        <div key={index}>
          <h3>{post.title}</h3> <p className="username">-{post.user.username}</p>
          <br />
          <p className="game-title">{post.gameTitle}</p>
          <br />
          <p className="content">{post.content}</p>
          <br />
          <button className="edit-post" name="viewPost" onClick={() => { this.handleClick(post) }}>View Details</button>
        </div>
      )
    } else {
      return null;
    }
  }

  render() {
    const { posts } = this.state;

    if (this.state.postId) {
      return (
        <ViewPost
          username={this.state.username}
          handleGoBack={this.handleGoBack}
          user={this.props.user}
          postId={this.state.postId}
          handleNewPostSubmit={this.handleNewPostSubmit}
        />
      )
    } else {
      return (
        <div className="parent">
          {
            posts ?
              posts.map(this._renderPosts)
              :
              "No posts yet..."
          }
        </div>
      );
    }
  }
}
