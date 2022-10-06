import './css/App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/index'
import SignIn from './pages/signin'
import AlgorithmsHomePage from './pages/AlgorithmsHomePage';
import Trello from './pages/Trello';
import SortWrapper from './pages/BubblesortPage';

function App() {
  return (
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/algorithms" element={<AlgorithmsHomePage/>}/>ß
      <Route path="/trello" element={<Trello/>}/>
      <Route path="/bubblesort" element={<SortWrapper/>}/>
      </Routes>
  );
}

export default App;