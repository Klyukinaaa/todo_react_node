import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../../context/authContext';

import './styles.css';

function Header() {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  function logout() {
    authContext.setIsAuth(false);
    history.push('/auth/login');
    localStorage.removeItem('token');
  }

  const HeaderForAuthenticated = () => (
    <div id="header">
      <div id="logo">Todo</div>
      <input onClick={logout} className="logout" type="button" value="Logout" />
    </div>
  );

  const AuthHeader = () => (
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
  );

  return authContext.isAuth ? <HeaderForAuthenticated /> : <AuthHeader />;
}

export default Header;
