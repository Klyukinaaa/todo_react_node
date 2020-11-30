import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import "./styles.css";
import axios from "axios";
import Container from "../../components/Container";
import Form from "../Login";
import PrivateRoute from "../../routes";
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
          localStorage.setItem('token', res.data.token);
          this.setState({
            error: '',
            isAuth: true
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
        <Route path="/">
          {this.state.isAuth === true ? (
          <Redirect to="/items"/>
          ) : (
              <Login handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                    error={this.state.error}
                    signUp={this.signUp}
                    signIn={this.signIn}
              />
          )}
        </Route>
    )
  }
}

export default Auth;

// <Switch>
//   <Route path="/">
//     {this.state.isAuth === false ? (
//
//     ) : (
//         <Form handleEmailChange={this.handleEmailChange}
//               handlePasswordChange={this.handlePasswordChange}
//               error={this.state.error}
//               signUp={this.signUp}
//               signIn={this.signIn}
//         />
//     )}
//   </Route>
//   <Route path="/items" exact component={Container}/>
//   <Route path="/login" exact component={Container}/>
// </Switch>
