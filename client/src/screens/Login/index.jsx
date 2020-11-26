import React from "react";
import {NavLink} from "react-router-dom";
import "./styles.css";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
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
    console.log('Email address is ' + this.state.email + ' Password is ' + this.state.password);

    axios.post('http://localhost:5000/login', {
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
          <div id="header">
            <NavLink to="/">
              <div id="logo">Todo</div>
            </NavLink>
            <div id="login_btns">
              <NavLink to="/login" activeClassName="hurray">
                <div id="log_btn">Login</div>
              </NavLink>
              <NavLink to="/register">
                <div id="reg_btn">Register</div>
              </NavLink>
            </div>
          </div>
          <div id="block-form">
            <form id="form" action="">
              <div className="title_form">Sign in</div>
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
              </div>
              <div className="button">
                <input className="btn_form" type="button" onClick={this.signIn} value="Come in"/>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default Login;
