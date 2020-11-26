import React from "react";
import {NavLink} from "react-router-dom";
import "./styles.css";
import axios from "axios";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
      password: e.target.value
    })
  }

  signIn() {
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  signUp() {
    axios.post('/register', {
      email: this.state.email,
      password: this.state.password
    })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    return (
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
                <input
                    className="date"
                    type="email"
                    name="email"
                    placeholder="Email:"
                    onChange={this.handleEmailChange}
                />
                <input
                    className="date"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handlePasswordChange}
                />
                {/*<span className="error">Тест</span>*/}
              </div>
              <div className="button">
                <input className="sign_up" type="button" onClick={this.signUp} value="Register"/>
                <input className="btn_form" type="button" onClick={this.signIn} value="Login"/>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default Auth;




