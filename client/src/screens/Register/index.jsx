import React from 'react';
import {NavLink} from "react-router-dom";
import './styles.css';

function Register() {
  return (
    <div id="main">
      <div id="header">
        <NavLink to="/"><div id="logo">Todo</div></NavLink>
        <div id="login_btns">
          <NavLink to="/login"><div id="log_btn">Login</div></NavLink>
          <NavLink to="/register" activeClassName="hurray"><div id="reg_btn">Register</div></NavLink>
        </div>
      </div>
      <div id="block-form">
        <form id="form" action="">
          <div className="title_form">Create an account</div>
          <div className="date_form">
            <input
                className="date"
                type="text"
                placeholder="Email:"
            />
            <input
                className="date"
                type="password"
                placeholder="Password"
            />
          </div>
          <div className="button">
            <input className="btn_form" type="submit" value="Create" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
