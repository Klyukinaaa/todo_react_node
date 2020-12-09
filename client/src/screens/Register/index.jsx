import React, {useState} from 'react';
import AuthService from "../../services/AuthSerice";
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './styles.css';
import 'react-toastify/dist/ReactToastify.css';

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
      const notify = () => toast.error(data, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      try {
        if (data) {
          setError(notify)
        } else {
          history.push('/auth/login')
        }
      } catch (e) {
      }
    } else {
      const notify = () => toast.error('Passwords do not match.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      setError(notify);
    }
  }

  return (
      <div id="main">
        <ToastContainer/>
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
              <input className="btn_form" type="button" onClick={signUp} value="Sign up"/>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Register;
