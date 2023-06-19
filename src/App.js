import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './Search';
import RecipeDetails from './RecipeDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

