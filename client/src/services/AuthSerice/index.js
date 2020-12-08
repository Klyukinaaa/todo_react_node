import axios from "axios";

class AuthService {

  signIn(email, password) {
    return axios.post('/login', {
      email: email,
      password: password
    })
        .then(res => {
          localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
          return err.response.data.message;
        });
  }

  signUp(email, password) {
    return axios.post('/register', {
      email: email,
      password: password
    })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          return err.response.data.message;
        });
  }

}

export default AuthService;
