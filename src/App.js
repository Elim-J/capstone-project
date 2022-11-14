import './css/App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/index'
import SignIn from './pages/signin'
import AlgorithmsHomePage from './pages/AlgorithmsHomePage';
import Trello from './pages/Trello';
import SortWrapper from './pages/BubblesortPage';
import GridContainer from './components/visualizers/pathfinding/GridContainer';
import QuickSortPage from './pages/QuickSortPage';

function App() {
  return (
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/algorithms" element={<AlgorithmsHomePage/>}/>ß
      <Route path="/trello" element={<Trello/>}/>
      <Route path="/sorting" element={<SortWrapper/>}/>
      <Route path="/quicksort" element={<QuickSortPage/>}/>
      <Route path="/pathfind" element={<GridContainer/>}/>
      </Routes>
  );
}

export default App;