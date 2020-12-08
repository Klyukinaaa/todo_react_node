import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import AuthContext from "../context/authContext";

const PrivateRoute = ({component: Component, ...rest}) => {
  const authContext = useContext(AuthContext);
  console.log('AAAAA',authContext.isAuth)
  return <Route {...rest} render={(props) => (
      authContext.isAuth === true
          ? <Component {...props} />
          : <Redirect to='/auth/login'/>
  )}/>
}

export default PrivateRoute;
