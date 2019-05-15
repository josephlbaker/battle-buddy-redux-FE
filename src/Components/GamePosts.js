import React, { Component } from 'react'
import axios from 'axios';

import NewPost from './NewPost';
import ViewPost from './ViewPost';
export default class GamePosts extends Component {

  state = {
    posts: [],
    postId: '',
    newPost: false,
    isEvent: false
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

  handleCheckbox = event => {
    if (this.state.isEvent === false || this.state.isEvent === 'off') {
      this.setState({
        isEvent: true
      })
    }
    if (this.state.isEvent === true || this.state.isEvent === 'on') {
      this.setState({
        isEvent: false
      })
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick(result) {
    this.setState({
      postId: result._id,
      username: result.user.username
    })
  }

  handleNewPostClick = () => {
    this.setState({
      newPost: true
    })
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({
      newPost: false
    })
  }

  handleNewPost = event => {
    event.preventDefault();
    axios
      .post("https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/posts/createpost", {
        title: this.state.title,
        content: this.state.content,
        user: this.props.user,
        platform: this.state.platform,
        gameId: this.props.gameId,
        gameTitle: this.props.gameTitle,
        isEvent: this.state.isEvent
      })
      .then(res => {
        console.log(res);
        let myNewPost = res.data;
        this.state.posts.push(myNewPost)

        this.setState({
          posts: this.state.posts,
          newPost: false,
          postId: ''
        })
      })
      .catch(err => {
        console.log("Error", err);
      })
  };

  _renderPosts = (post) => {
    if (post.gameId === this.props.gameId.toString()) {
      return (
        <div>
          <h3>{post.title}</h3> <p className="username">-{post.user.username}</p>
          <br />
          <p>{post.content}</p>
          <div>
            <br />
            <button className="edit-post" name="editPost" onClick={() => { this.handleClick(post) }}>View Details</button>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  render() {
    const { posts } = this.state;

    if (this.state.newPost) {
      return (
        <NewPost user={this.props.user}
          gameTitle={this.props.gameTitle}
          gameId={this.props.gameId}
          handleNewPost={this.handleNewPost}
          handleInput={this.handleInput}
          handleCancel={this.handleCancel}
        />
      )
    }
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
    }
    if (!this.state.newPost) {
      return (
        <div className="game-post-body">
          <h1>Posts for {this.props.gameTitle}</h1>
          {
            posts ?
              posts.map(this._renderPosts)
              :
              "No posts for this game"
          }
        </div>
      )
    }
  }
}
