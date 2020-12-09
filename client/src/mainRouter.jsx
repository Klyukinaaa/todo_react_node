import React, {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import Container from "./components/Container";
import {AuthRouter} from "./routes/authRouter";
import {AuthProvider} from "./context/authContext";
import PrivateRoute from "./routes/secureRoutes";
import Header from "./components/Header";

export function MainRouter() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      setIsAuth(true)
    }
  }, []);

  console.log(isAuth)
  return (
      <AuthProvider value={{isAuth, setIsAuth}}>
        <Header/>
        <Switch>
          <Route path="/auth" component={AuthRouter}/>
          <PrivateRoute path="/items" component={Container}/>
        </Switch>
      </AuthProvider>
  )
}


//TODO: 1. TOASTS
//TODO: 2. REDIRECT TO LOGIN
