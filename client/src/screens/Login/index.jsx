import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import AuthService from "../../services/AuthSerice";

import './styles.css';

function Login() {
  const authService = new AuthService();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  async function signIn() {
    const data = await authService.signIn(email, password);
    try {
      setError(data);
    } catch (e) {

    }
  }

  return (
      <div id="main">
        <div id="lg">
          <div id="header">
            <NavLink to="/auth/login">
              <div id="logo">Todo</div>
            </NavLink>
            <div id="login_btns">
              <NavLink to="/auth/login" activeClassName="hurray">
                <div id="log_btn">Login</div>
              </NavLink>
              <NavLink to="/auth/register">
                <div id="reg_btn">Register</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div id="block-form">
          <form id="form_login" action="">
            <div className="title_form">Login</div>
            <div className="date_form">
              <div>
                <input
                    className="date"
                    type="email"
                    name="email"
                    placeholder="Email:"
                    onChange={handleEmailChange}
                />
                <input
                    className="date"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                />
              </div>
              <span className="error">{error}</span>
            </div>
            <div className="buttons">
              <input className="btn_form" type="button" onClick={signIn} value="Login"/>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login;
