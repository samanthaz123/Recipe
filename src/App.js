import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SearchResults from './SearchResults'; // This is your search results component
import RecipeDetails from './RecipeDetails';
import Header from './Header'; // Import the Header component

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/search-results" element={<SearchResults />} /> {/* Updated this line */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
