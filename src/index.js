import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from '../src/components/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));        
root.render(<React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
</React.StrictMode>);
