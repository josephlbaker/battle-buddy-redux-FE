import React, { Component } from 'react';
import axios from 'axios';

import AddComment from './AddComment';

export default class CommentList extends Component {

  state = {
    comments: [],
    newComment: false,
    content: ''
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/comments`, {
      method: 'GET'
    })
      .then(results => results.json())
      .then(data => {
        this.setState({ comments: data })
      })
      .catch(function (error) { console.log(error) });
  }

  handleDeleteComment(comment) {
    axios
      .delete(`https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/comments/${comment}/deletecomment`)
      .then(res => {
        console.log(res);
        this.fetchComments();
      })
      .catch(err => {
        console.log("Error");
      })
  }

  handleNewComment = event => {
    event.preventDefault();
    axios
      .post("https://cors-anywhere.herokuapp.com/https://battle-buddy-redux-be.herokuapp.com/comments/createcomment", {
        content: this.state.content,
        user: this.props.user,
        post: this.props.post
      })
      .then(res => {
        let myNewComment = res.data;
        this.state.comments.push(myNewComment)
        console.log(res);
        this.setState({
          comments: this.state.comments,
          newComment: false
        })
        this.fetchComments();
      })
      .catch(err => {
        console.log("Error");
      })
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleNewCommentClick = () => {
    this.setState({
      newComment: true
    })
  }

  cancelComment = () => {
    this.setState({
      newComment: false
    })
  }

  _renderComments = (comment, index) => {
    if (comment.post._id === this.props.post._id && this.props.user._id === comment.user._id) {
      return (<div key={index}>{comment.content} - {comment.user.username} <button floated='right' size='mini' class="delete-button" onClick={() => { this.handleDeleteComment(comment._id) }}>Delete</button></div>)
    }
    if (comment.post._id === this.props.post._id) {
      return (<div key={index}>{comment.content} - {comment.user.username}</div>)
    }
    else {
      return null;
    }
  }

  render() {
    const { comments } = this.state;
    if (this.state.newComment) {
      return (
        <AddComment
          handleInput={this.handleInput}
          handleNewComment={this.handleNewComment}
          cancelComment={this.cancelComment}
          post={this.props.post}
          user={this.props.user} />
      );
    }
    if (!this.state.newComment) {
      return (
        <div>
          <button className="add-comment" onClick={this.handleNewCommentClick}>Add a comment</button>
          {
            comments ?
              comments.map(this._renderComments)
              :
              "No comments yet..."
          }
        </div>
      );
    }
  }
}
