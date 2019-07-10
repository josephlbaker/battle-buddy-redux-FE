import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../styles/Nav.css';

import PopularGames from './PopularGames';
import Search from './Search';
import MyFeed from './MyFeed';
import Profile from './Profile';


export default class Nav extends Component {

  state = {
    render: 'trending',
    myClass: 'navbar'
  }

  myFunction = (e) => {
    e.preventDefault()
    if (this.state.myClass === "navbar") {
      this.setState({
        myClass: "extended"
      })
    } else {
      this.setState({
        myClass: "navbar"
      })
    }
  }

  handleClick(compName, e) {
    this.setState({
      render: compName,
      myClass: 'navbar'
    });
  }

  renderSubComp() {
    switch (this.state.render) {
      case 'trending': return <PopularGames
        user={this.props.user}
      />
      case 'search': return <Search
        user={this.props.user}
      />
      case 'feed': return <MyFeed
        user={this.props.user}
      />
      case 'profile': return <Profile
        user={this.props.user}
      />
      default: return <PopularGames
        user={this.props.user}
      />
    }
  }

  render() {

    return (
      <div>
        <nav className={this.state.myClass} id="myNavbar">
          <div id="logo" className="nav-el" onClick={this.handleClick.bind(this, 'trending')} active={this.state.render === 'trending'}>Battle Buddy</div>
          <div className="nav-el" onClick={this.handleClick.bind(this, 'trending')} active={this.state.render === 'trending'}>TRENDING</div>
          <div className="nav-el" onClick={this.handleClick.bind(this, 'search')} active={this.state.render === 'search'}>SEARCH</div>
          <div className="nav-el" onClick={this.handleClick.bind(this, 'feed')} active={this.state.render === 'feed'}>FEED</div>
          <div className="nav-el" onClick={this.handleClick.bind(this, 'profile')} active={this.state.render === 'profile'}>PROFILE</div>
          <div class="icon" onClick={e => this.myFunction(e)}><i class="fa fa-bars"></i></div>
        </nav>
        {this.renderSubComp()}
      </div>
    )
  }
}

