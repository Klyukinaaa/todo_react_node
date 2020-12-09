import React, {useContext} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AuthContext from "../context/authContext";

export function AuthRouter({match}) {
  const authContext = useContext(AuthContext);

  if (authContext.isAuth) {
    return <Redirect to='/items'/>
  }
  return (
      <Switch>
        <Route exact path={`${match.path}/login`} component={Login}/>
        <Route exact path={`${match.path}/register`} component={Register}/>
      </Switch>
  )
}


