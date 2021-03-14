import React from "react";
import { Link, useParams } from "@reach/router";

const Recipe = ({ getRecipe }) => {
  const params = useParams();
  const recipe = getRecipe(parseInt(params.id));

  return (
    <div>
      <Link to="/">Return</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((i) => {
          return <li key={i}>{i}</li>;
        })}
      </ul>
      <p>{recipe.cookingTime}</p>
      <p>{recipe.submitter}</p>
    </div>
  );
};

export default Recipe;
