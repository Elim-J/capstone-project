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
import Login from './components/Login';
import { useLocalState } from './util/useLocalStorage';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup';

function App() {

  const [jwt, setJwt] = useLocalState("", "jwt");

    // useEffect(() => {
    //     if(!jwt){
    //         const reqBody = {
    //             "username": "Vince",
    //             "password": "asdfasdf"
    //         }
        
    //         //default fetch is get
    //         fetch('api/auth/login', 
    //         {
    //             headers: {
    //                 "content-type": "application/json"
    //             },
    //             method: "post",
    //             body: JSON.stringify(reqBody)
    //         }).then(response => Promise.all([response.json(), response.headers]))
    //         .then(([body, headers]) => {
    //             setJwt(headers.get("authorization")); //JWT
    //             console.log('jwt acquired');
    //         });
    //     }
        

    // }, []);

  return (
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/algorithms" element={<AlgorithmsHomePage/>}/>ß
      <Route path="/trello" element={
        <PrivateRoute>
          <Trello/>
        </PrivateRoute>
        }/>
      <Route path="/sorting" element={<SortWrapper/>}/>
      <Route path="/quicksort" element={<QuickSortPage/>}/>
      <Route path="/pathfind" element={<GridContainer/>}/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/signup" element={ <Signup/> }/>
      </Routes>
  );
}

export default App;