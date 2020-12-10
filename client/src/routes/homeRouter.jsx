import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../context/authContext';

const HomeRoute = () => {
  const authContext = useContext(AuthContext);
  if (authContext.isAuth) {
    return (
      <Redirect to="/items" />
    );
  }
  return (
    <Redirect to="/auth/login" />
  );
};

export default HomeRoute;
