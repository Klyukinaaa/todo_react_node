import React from 'react';
import {NavLink} from "react-router-dom";
import './styles.css';

function Main() {
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
      </div>
  )
}

export default Main;
