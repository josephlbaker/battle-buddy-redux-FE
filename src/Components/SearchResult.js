import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import GamePosts from './GamePosts';

export default class SearchResult extends Component {

  state = {
    gameId: '',
    gameTitle: ''
  }

  handleClick(result) {
    this.setState({
      gameId: result.id,
      gameTitle: result.name
    })
    this.props.onGetResult(result);
  }

  render() {
    if (this.props.results.length < 1) {
      return null;
    }

    if (this.state.gameTitle) {
      return (
        <Router>
          <Route
            exact path="/gameposts/"
            render={(props) => <GamePosts {...props}
              user={this.props.user}
              gameId={this.state.gameId}
              gameTitle={this.state.gameTitle}
            />}
          />
        </Router>
      )
    }

    const resultsMarkup = this.props.results.map((result, key) => {
      return (
        <Router key={key}>
          <div className="image-container">
            <Link to="/gameposts/">
              <img onClick={() => { this.handleClick(result) }} src={result.image.small_url} alt={`${result.name}`} />
            </Link>
          </div>
        </Router>
      )
    })
    window.onpopstate = function () {
      window.location.reload();
    };
    return resultsMarkup;
  }
}
