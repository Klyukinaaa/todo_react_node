import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Auth from "./screens/Auth";
import './index.css';

export function App() {
  return (
      <Router>
          <Auth/>
      </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
