import React from "react";
import {Switch, Route} from "react-router-dom";
import Container from "./components/Container";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Main from "./screens/Main";

function useRoutes(isAuthenticated) {
  if (isAuthenticated) {
    return (
        <Switch>
          <Route path="/items" exact>
            <Container/>
          </Route>
        </Switch>
    )
  }
  return (
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>
        <Route path="/login" >
          <Login/>
        </Route>
        <Route path="/register" >
          <Register/>
        </Route>
      </Switch>
  )
}

export default useRoutes;

//exact отклик исключительно на данную ссылку
