import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
  const [ingredients, setIngredients] = useState('');
  const navigate = useNavigate();

  const searchRecipes = () => {
    navigate(`/search-results?ingredients=${encodeURIComponent(ingredients)}`);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="black-square">
          <h2>Recipe Generator</h2>
          <p>Enter your ingredients below to find matching recipes.</p>
          <form onSubmit={e => { e.preventDefault(); searchRecipes(); }}>
            <input className="search-input" type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder="Enter ingredients, separated by commas" />
            <button className="auth-button" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
