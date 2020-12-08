import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import AuthService from "../../services/AuthSerice";
import {useHistory} from 'react-router-dom';

import './styles.css';

function Register() {
  const authService = new AuthService();
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleRepeatPasswordChange(e) {
    setRepeatPassword(e.target.value)
  }

  async function signUp() {
    if (password === repeatPassword) {
      const data = await authService.signUp(email, password);
      try {
        if (data) {
          setError(data)
        } else {
          setError('Registration completed successfully. You can log in.')
        }
      } catch (e) {
      }
    } else {
      setError('Passwords do not match');
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
              <NavLink to="/auth/register" activeClassName="hurray">
                <div id="reg_btn">Register</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div id="block-form">
          <form id="form" action="">
            <div className="title_form">Register</div>
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
                <input
                    className="date"
                    type="password"
                    name="password"
                    placeholder="Repeat password"
                    onChange={handleRepeatPasswordChange}
                />
              </div>
              <span className="error">{error}</span>
            </div>
            <div className="buttons">
              <input className="btn_form" type="button" onClick={signUp} value="Sign up"/>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Register;