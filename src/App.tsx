import React from 'react';
import './App.css';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Routes,Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import GreetingCat from './GreetingCat';
import RandomCat from './RandomCat';

const defaultHistory = createBrowserHistory({ window });

function App() {
  return (

   <HistoryRouter history={defaultHistory}>
    
      <Routes>
      <Route  path="/" element={<RandomCat/>} />
      <Route  path="/cat/:greeting" element={<GreetingCat/>} />
      </Routes>    

   </HistoryRouter>
   
  );
}

export default App;
