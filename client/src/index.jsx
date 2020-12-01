import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Auth from "./screens/Auth";

export function App() {
  return (
      <Router>
          <Auth/>
      </Router>
  )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
