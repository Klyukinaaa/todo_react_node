import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import AuthContext from "../context/authContext";

const PrivateRoute = ({component: Component, ...rest}) => {
  const authContext = useContext(AuthContext);
  console.log(authContext)
  return (
      <Route {...rest} exact
          render={(props) => (
          authContext.isAuth ? <Component {...props} />
              : <Redirect to='/auth/login'/>
      )}
      />
  )
}

export default PrivateRoute;
