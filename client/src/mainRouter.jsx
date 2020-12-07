import React, {useState, useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Container from "./components/Container";
import {AuthRouter} from "./routes/authRouter";
import {AuthProvider} from "./context/authContext";
import PrivateRoute from "./routes/secureRoutes";

export function MainRouter() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      setIsAuth(true)
    }

  }, [setIsAuth])

  return (
      <AuthProvider value={{isAuth, setIsAuth}}>
        <Switch>
          <PrivateRoute path="/items" component={Container}/>
          <Route path="/auth" component={AuthRouter}/>
        </Switch>
      </AuthProvider>
  )
}
