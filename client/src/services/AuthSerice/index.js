import axios from 'axios';

class AuthService {
  signIn(email, password) {
    return axios.post('/login', {
      email,
      password,
    })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
      })
      .catch((err) => err.response.data.message);
  }

  signUp(email, password) {
    return axios.post('/register', {
      email,
      password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => err.response.data.message);
  }
}

export default AuthService;
