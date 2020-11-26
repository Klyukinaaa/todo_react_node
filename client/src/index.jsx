import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import useRoutes from "./routes";

export function App() {
  const routes = useRoutes(false);
  return (
      <Router>
          {routes}
      </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
