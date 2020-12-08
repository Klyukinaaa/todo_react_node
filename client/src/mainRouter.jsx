import React, {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
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
          <PrivateRoute path="/auth" component={AuthRouter}/>
          <Route path="/items" component={Container}/>
        </Switch>
      </AuthProvider>
  )
}
