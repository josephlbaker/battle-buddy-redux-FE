import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PopularGames from './PopularGames';
import Search from './Search';
import MyFeed from './MyFeed';
import Profile from './Profile';


export default class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Popular Games</Link>
              </li>
              <li>
                <Link to="/search/">Search</Link>
              </li>
              <li>
                <Link to="/feed/">My Feed</Link>
              </li>
              <li>
                <Link to="/profile/">Profile</Link>
              </li>
            </ul>
          </nav>
          <Route
            exact path="/"
            render={(props) => <PopularGames {...props}
              user={this.props.user}
            />}
          />
          <Route
            path="/search/"
            render={(props) => <Search {...props}
              user={this.props.user}
            />}
          />
          <Route
            path="/feed/"
            render={(props) => <MyFeed {...props}
              user={this.props.user}
            />}
          />
          <Route
            path="/profile/"
            render={(props) => <Profile {...props}
              user={this.props.user}
            />}
          />
        </div>
      </Router>
    )
  }
}

