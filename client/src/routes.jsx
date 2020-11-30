import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Container from "./components/Container";
import Auth from "./screens/Auth";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         isAuth() === true
//             ? <Component {...props} />
//             : <Redirect to='/' />
//     )} />
// )
//
// export default PrivateRoute;

export function MainRouter() {
  return (
      <Switch>
        <Route path="/" component={Auth} exact/>
        <Route path="/items" component={Container}/>
      </Switch>
  )
}

// export function PrivateRoute({component, ...rest}) {
//   <Route{...rest} render={(props) => (
//       isAuthenticated() === true
//           ? <Component {...props} />
//           : <Redirect to='/login' />
//   )} />
// }


