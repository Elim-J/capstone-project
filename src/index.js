import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from '../src/components/Login'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <Login/> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
