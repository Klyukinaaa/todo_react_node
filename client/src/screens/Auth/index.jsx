import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import "./styles.css";
import axios from "axios";
import Container from "../../components/Container";
import Form from "../Form";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      token: '',
      isAuth: false
    };
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
            token: res.data.token,
            isAuth: true
          });
          localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
          this.setState({
            error: err.response.data.message,
          });
          console.log(err);
        });
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
          console.log(res);
        })
        .catch(err => {
          this.setState({
            error: err.response.data.message,
          });
        });
  }

  render() {
    if (this.state.isAuth) {
      return (
          <Switch>
            <Route path="/items" exact>
              <Container/>
            </Route>
            <Redirect to="/items"/>
          </Switch>
      )
    }
    return (
        <Switch>
          <Route path="/" exact>
            <Form handleEmailChange={this.handleEmailChange}
                  handlePasswordChange={this.handlePasswordChange}
                  error={this.state.error}
                  signUp={this.signUp}
                  signIn={this.signIn}
            />
          </Route>
          <Redirect to="/"/>
        </Switch>
    );
  }
}

export default Auth;




