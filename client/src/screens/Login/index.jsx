import React, {useState, useContext} from 'react';
import AuthService from "../../services/AuthSerice";
import {useHistory} from 'react-router-dom';

import './styles.css';
import AuthContext from "../../context/authContext";

function Login() {
  const authService = new AuthService();
  let history = useHistory();
  const authContext = useContext(AuthContext);

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
      if (data) {
        setError(data)
      } else {
        authContext.setIsAuth(true)
        history.push('/items')
      }
    } catch (e) {
    }
  }

  return (
      <div id="main">
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
