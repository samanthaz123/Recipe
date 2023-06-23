import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SearchResults.css';


function SearchResults() {
  const [recipes, setRecipes] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const location = useLocation();

  useEffect(() => {
    const fetchRecipes = async () => {
      const ingredients = new URLSearchParams(location.search).get('ingredients');

      const ingredientsList = ingredients.split(',').map(ingredient => encodeURIComponent(ingredient.trim()));
      const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList.join(',')}&number=100&apiKey=${API_KEY}`);
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setRecipes(data);
      } else {
        console.error("Data is not an array:", data);
        setRecipes([]);
      }
    };

    if (location && location.search) { // Check if location and location.search are defined
      fetchRecipes();
    }
  }, [location]);

  return (
    <div className="recipes-container">
      {recipes.map(recipe => (
        <Link className="recipe-link" to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="recipe">
            <img className="recipe-image" src={recipe.image} alt={recipe.title} />
            <h2 className="recipe-title">{recipe.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
  
}

export default SearchResults;
