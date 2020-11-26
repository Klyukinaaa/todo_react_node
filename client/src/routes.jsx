import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Container from "./components/Container";
import Auth from "./screens/Auth";

function useRoutes(isAuthenticated) {
  if (isAuthenticated) {
    return (
        <Switch>
          <Route path="/items" exact>
            <Container/>
          </Route>
          <Redirect to="/items"/>
        </Switch>
    )
  }
  return (
      <Switch>
        <Route path="/" exact>
          <Auth/>
        </Route>
        <Redirect to="/"/>
      </Switch>
  )
}

export default useRoutes;

//exact отклик исключительно на данную ссылку
