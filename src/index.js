import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import reportWebVitals from './reportWebVitals';
import SortWrapper from './components/visualizers/sorting/SortWrapper';
import GridContainer from './components/visualizers/pathfinding/GridContainer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GridContainer />
    {/* <SortWrapper/> */}
  </React.StrictMode>
);

reportWebVitals();
