import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import AuthContext from "../context/authContext";

const PrivateRoute = ({component: Component, ...rest}) => {
  const authContext = useContext(AuthContext);
  return (
      <Route {...rest} exact
          render={(props) => (
          authContext.isAuth === false
              ? <Component {...props} />
              : <Redirect to='/items'/>
      )}
      />
  )
}

export default PrivateRoute;
