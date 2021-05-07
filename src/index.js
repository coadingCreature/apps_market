import React from 'react';

import ReactDOM from 'react-dom';

import "./client/asset/css/reset.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
