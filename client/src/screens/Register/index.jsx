import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import Input from "../Input";

import './styles.css';

function Register(props) {
  const {
    handleEmailChange,
    handlePasswordChange,
    error,
    signUp,
    signIn,
  } = props;
  return (
      <div id="main">
        <div id="lg">
          <div id="header">
            <NavLink to="/">
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
                    onChange={handlePasswordChange}
                />
              </div>
              <span className="error">{error}</span>
            </div>
            <div className="buttons">
              <input className="btn_form" type="button" onClick={signIn} value="Sign up"/>
            </div>
          </form>
        </div>
      </div>
  )
}

Input.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  signUp: PropTypes.func,
  signIn: PropTypes.func,
};

export default Register;
