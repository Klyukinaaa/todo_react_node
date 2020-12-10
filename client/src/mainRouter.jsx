import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import AuthRouter from './routes/authRouter';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './routes/secureRoutes';
import Header from './components/Header';
import HomeRoute from './routes/homeRouter';

function MainRouter() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthProvider value={{ isAuth, setIsAuth }}>
      <Header />
      <ToastContainer />
      <HomeRoute path="/" />
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <PrivateRoute path="/items" component={Container} />
      </Switch>
    </AuthProvider>
  );
}

export default MainRouter;
