import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import "./styles.css";
import axios from "axios";
import Container from "../../components/Container";
import Login from "../Login";

function Auth(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function signIn() {
    axios.post('/login', {
      email: email,
      password: password
    })
        .then(res => {
          setError('');
          setIsAuth(true);
          setToken(localStorage.setItem('token', res.data.token));
        })
        .catch(err => {
          setError(err.response.data.message)
          console.log(err);
        });
  }

  function logout() {
    setIsAuth(false);
    localStorage.removeItem('token');
  }

  function signUp() {
    axios.post('/register', {
      email: email,
      password: password
    })
        .then(res => {
          setError('');
          console.log(res)
        })
        .catch(err => {
          setError(err.response.data.message)
        });
  }

  return (
      <Switch>
        { isAuth || localStorage.getItem('token')
            ? <Route path="/items" exact>
              <Container logout={logout}/>
            </Route>
            : null}
        { isAuth
            ? <Redirect to="/items"/>
            : null}
        <Route path='/'>
          <Login
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              error={error}
              signUp={signUp}
              signIn={signIn}
          />
        </Route>
      </Switch>
  )
}

export default Auth;
