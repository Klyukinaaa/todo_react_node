import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import {MainRouter} from "./routes";

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
