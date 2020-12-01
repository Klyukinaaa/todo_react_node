import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import "./styles.css";
import axios from "axios";
import Container from "../../components/Container";
import Login from "../Login";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      isAuth: false,
      token: null
    };
    this.logout = this.logout.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    })
  }

  signIn() {
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    })
        .then(res => {
          this.setState({
            error: '',
            isAuth: true,
            token: localStorage.setItem('token', res.data.token)
          });
        })
        .catch(err => {
          this.setState({
            error: err.response.data.message,
          });
          console.log(err);
        });
  }

  logout() {
    this.setState({
      isAuth: false
    });
    localStorage.removeItem('token');
  }

  signUp() {
    axios.post('/register', {
      email: this.state.email,
      password: this.state.password
    })
        .then(res => {
          this.setState({
            error: '',
          });
        })
        .catch(err => {
          this.setState({
            error: err.response.data.message,
          });
        });
  }

  render() {
    return (
        <Switch>
          {this.state.isAuth || localStorage.getItem('token')
              ? <Route path="/items" exact>
                  <Container logout={this.logout} />
                </Route>
              : null}
          {this.state.isAuth
              ? <Redirect to="/items"/>
              : null}
          <Route path='/'>
            <Login
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                error={this.state.error}
                signUp={this.signUp}
                signIn={this.signIn}
            />
          </Route>
        </Switch>
    )
  }
}

export default Auth;
