import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Segment, Button } from 'semantic-ui-react'

export default class App extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    isLoggedIn: "",
    user: ""
  }

  // fetchPosts = () => {
  //   fetch("http://localhost:3001/posts", {
  //     method: "GET"
  //   })
  //     .then(results => results.json())
  //     .then(data => this.setState({ posts: data }))
  //     .catch(function (error) { console.log(error) });
  // }

  // componentDidMount() {
  //   this.fetchPosts();
  // }

  handleLogin = event => {
    event.preventDefault();
    axios
      .post("http://https://battle-buddy-redux-be.herokuapp.com/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        let user = res.data.user
        localStorage.token = res.data.signedJwt;
        this.setState({
          isLoggedIn: true,
          redirect: true,
          user
        });
        console.log(this.state.user);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form>
        <Segment className="form-segment">
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <input name="email" placeholder="Email" onChange={this.props.handleInput} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <input type="password" name="password" placeholder="Password" onChange={this.props.handleInput} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button fluid name="login" onClick={this.props.handleLogin} secondary>
                  Submit
                  </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </form>
    )
  }
}
