import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import logoImage from './images/sz_logo.JPG'
import GitHub from './images/github_logo.png'
import Home from './images/homepage_logo.png'

function Search() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const searchRecipes = async () => {
    try {
      const ingredientsList = ingredients.split(',').map(ingredient => encodeURIComponent(ingredient.trim()));
      const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList.join(',')}&number=100&apiKey=${API_KEY}`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setRecipes(data);
      } else {
        console.error("Data is not an array:", data);
        setRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  

  return (
    <div className="container">
      <header className="header-footer">
        <div className="logo">
            <img src={logoImage} alt="Logo" className="header-image" />
          </div>
          <div className="clickable-images">
            <a href="#"><img src={GitHub} alt="GitHub Logo" className="header-image" /></a>
            <a href="#"><img src={Home} alt="Home Logo" className="header-image" /></a>
        </div>
      </header>
      <div className="content">
        <div className="black-square">
          <h2>Recipe Generator</h2>
          <p>Enter your ingredients below to find matching recipes.</p>
          <form onSubmit={e => { e.preventDefault(); searchRecipes(); }}>
            <input className="search-input" type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder="Enter ingredients, separated by commas" />
            <button className="auth-button" type="submit">Search</button>
          </form>
        </div>
        <div className="recipes-container">
          {recipes.map(recipe => (
            <Link className="recipe-link" to={`/recipe/${recipe.id}`} key={recipe.id}>
              <div className="recipe">
                <h2 className="recipe-title">{recipe.title}</h2>
                <img className="recipe-image" src={recipe.image} alt={recipe.title} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
