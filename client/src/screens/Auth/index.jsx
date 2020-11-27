import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import "./styles.css";
import axios from "axios";
import Input from "../Input";
import Container from "../../components/Container";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorLog: '',
      errorReg: '',
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
            errorLog: '',
            errorReg: '',
            token: res.data.token,
            isAuth: true
          });
          localStorage.setItem('token', res.data.token);
          console.log(res);
        })
        .catch(err => {
          this.setState({
            errorLog: err.response.data.message,
            errorReg: ''
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
            errorReg: '',
            errorLog: ''
          });
          console.log(res);
        })
        .catch(err => {
          console.log(err.response.data.message);
          console.log(err)
          this.setState({
            errorReg: err.response.data.message,
            errorLog: '',
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
            <div id="main">
              <div id="lg">
                <div id="header">
                  <NavLink to="/">
                    <div id="logo">Todo</div>
                  </NavLink>
                </div>
              </div>
              <div id="block-form">
                <form id="form" action="">
                  <div className="title_form">Authorization</div>
                  <div className="date_form">
                    <Input
                        handleEmailChange={this.handleEmailChange}
                        handlePasswordChange={this.handlePasswordChange}
                    />
                    <span className="error">{this.state.errorLog}</span>
                    <span className="error">{this.state.errorReg}</span>
                  </div>
                  <div className="button">
                    <input className="sign_up" type="button" onClick={this.signUp} value="Sign up"/>
                    <input className="btn_form" type="button" onClick={this.signIn} value="Login"/>
                  </div>
                </form>
              </div>
            </div>
          </Route>
          <Redirect to="/"/>
        </Switch>
    );
  }
}

export default Auth;




