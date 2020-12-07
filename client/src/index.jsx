import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import {MainRouter} from "./mainRouter";

export function App() {
  return (
      <Router>
          <MainRouter/>
      </Router>
  )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
