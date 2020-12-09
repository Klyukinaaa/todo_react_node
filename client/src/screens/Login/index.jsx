import React, {useState, useContext} from 'react';
import AuthService from "../../services/AuthSerice";
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
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
        authContext.setIsAuth(true)
        history.push('/items')
      }
    } catch (e) {
    }
  }

  return (
      <div id="main">
        <ToastContainer/>
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
