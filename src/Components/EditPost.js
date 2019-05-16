import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {

  state = {
    title: this.props.post.title,
    content: this.props.post.content,
    platform: this.props.post.platform,
    gameId: this.props.post.gameId,
    gameTitle: this.props.post.gameTitle,
    isEvent: this.props.post.isEvent,
    players: this.props.post.players
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleEditPost = event => {
    event.preventDefault();
    axios
      .put(`https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/posts/${this.props.post._id}/updatepost`, {
        title: this.state.title,
        content: this.state.content,
        platform: this.state.platform,
        gameId: this.state.gameId,
        gameTitle: this.state.gameTitle,
        isEvent: this.state.isEvent,
        players: this.state.players
      })
      .then(res => {
        console.log(res);
        this.props.handleGoBack();
      })
      .catch(err => {
        console.log("Error");
      })
  };

  handleDeletePost = event => {
    event.preventDefault();
    axios
      .delete(`https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/posts/${this.props.post._id}/deletepost`)
      .then(res => {
        console.log(res);
        this.props.handleGoBack();
      })
      .catch = () => {
        console.log("Error");
      }
  }

  render() {
    return (
      <div className="edit-posts">
        <button className="back" onClick={this.props.handleBackToPosts}>Cancel</button>
        <form>
          <p>Title</p>
          <input name="title" placeholder={this.state.title} onChange={this.handleInput} />
          <p>Content</p>
          <input name="content" placeholder={this.state.content} onChange={this.handleInput} />
          <p>Platform</p>
          <input name="platform" placeholder={this.state.platform} onChange={this.handleInput} />
          <button name="submit" onClick={this.handleEditPost}>Submit</button>
          <button name="delete" onClick={this.handleDeletePost}>Delete Post</button>
        </form>
      </div>
    )
  }
}
