import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/AuthSerice';

import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import NotificationService from '../service';

function Register() {
  const authService = new AuthService();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRepeatPasswordChange(e) {
    setRepeatPassword(e.target.value);
  }

  async function signUp() {
    if (password === repeatPassword) {
      const data = await authService.signUp(email, password);
      try {
        if (data) {
          NotificationService.error(data);
        } else {
          const message = 'Successful registration!';
          NotificationService.success(message);
          history.push('/auth/login');
        }
      } catch (e) {
      }
    } else {
      console.log('пароли не совпадают');
    }
  }

  return (
    <div id="main">
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
          </div>
          <div className="buttons">
            <input className="btn_form" type="button" onClick={signUp} value="Sign up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
