import "./App.css";
import { Router } from "@reach/router";
import Recipes from "./components/recipes";
import Recipe from "./components/recipe";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://krdo-cooking-api.herokuapp.com/api/cooking")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  });

  const getRecipe = (id) => {
    return recipes.find((r) => r.id === id);
  };

  return (
    <Router>
      <Recipes path="/" exact recipes={recipes} />
      <Recipes path="/with/:ingredient" recipes={recipes} />
      <Recipe path="/recipe/:id" getRecipe={getRecipe} />
    </Router>
  );
}

export default App;
