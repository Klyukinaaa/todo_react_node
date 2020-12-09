import React, {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import Container from "./components/Container";
import {AuthRouter} from "./routes/authRouter";
import {AuthProvider} from "./context/authContext";
import PrivateRoute from "./routes/secureRoutes";
import Header from "./components/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function MainRouter() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      setIsAuth(true)
    }
  }, []);

  return (
      <AuthProvider value={{isAuth, setIsAuth}}>
        <Header/>
        <ToastContainer/>
        <Switch>
          <Route path="/auth" component={AuthRouter}/>
          <PrivateRoute path="/items" component={Container}/>
        </Switch>
      </AuthProvider>
  )
}

