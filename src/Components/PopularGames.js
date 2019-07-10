import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';

import '../styles/PopularGames.css';

import GamePosts from './GamePosts';

export default class PopularGames extends Component {
  _isMounted = false;

  state = {
    gameId: '',
    gameTitle: '',
    results: []
  }

  handleClick(result) {
    this.setState({
      gameId: result.id,
      gameTitle: result.name
    })
  }

  componentDidMount() {
    this._updateState()
  }

  componentWillReceiveProps() {
    this._updateState()
  }

  _updateState = () => {
    this._isMounted = true;

    let key = "0c85bbb4508d433251a4fa6cbedbc3141ee1c1b0";
    $.ajax({
      method: 'GET',
      url: `https://www.giantbomb.com/api/games/?api_key=${key}&limit=10&format=jsonp&resources=game&filter=id:46632|36765|52647|48190|66896|37030|72014|30475`,
      success: (res) => {
        if (this._isMounted) {
          console.log(res);
          if (res && res.results && res.results.length > 0) {
            this.setState({
              results: res.results
            })
          }
        }
      },
      error: (err) => {
        console.log("Error, Message: ", err);
      },
      dataType: 'jsonp',
      jsonp: 'json_callback',
      crossDomain: true
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const resultsMarkup = this.state.results.map((result, key) => {
      return (
        <Router key={key}>
          <div className="image-container">
            <Link to="/gameposts/">
              <img onClick={() => { this.handleClick(result) }} src={result.image.small_url} alt={`${result.name}`} />
            </Link >
          </div>
        </Router>
      )
    })

    if (this.state.results.length < 1) {
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
    else {
      window.onpopstate = function () {
        window.location.reload();
      };
      return (
        <div className="parent">
          <div className="results-wrapper">
            {resultsMarkup}
          </div>
        </div>
      );
    }
  }
}
