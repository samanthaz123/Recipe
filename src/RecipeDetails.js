import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

function formatInstructions(instructions) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = instructions;
  const textContent = tempDiv.textContent || tempDiv.innerText || "";

  const correctedText = textContent.replace(/\.(\S)/g, '. $1');

  return correctedText;
}


function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, [id, API_KEY]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="title">{recipe.title}</div>
      <img src={recipe.image} alt={recipe.title} />
      <div className="instructions" dangerouslySetInnerHTML={{ __html: formatInstructions(recipe.instructions) }}></div>
    </div>
  );
}

export default RecipeDetails;

