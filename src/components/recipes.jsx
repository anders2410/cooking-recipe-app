import React from "react";
import { Link, useParams } from "@reach/router";

const Recipes = ({ recipes }) => {
  const params = useParams();

  if (params.ingredient) {
    recipes = recipes.filter((a) => a.ingredients.includes(params.ingredient));
  }

  const addRecipe = () => {
    fetch("https://krdo-cooking-api.herokuapp.com/api/cooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Chili con carne",
        description: "Lotsa chili",
        ingredients: ["chili", "meat", "beans", "tomato"],
        cooking_time: 180,
        submitter: "Anders",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {recipes
        .sort((a, b) => a.title > b.title)
        .map((r) => {
          return (
            <div
              key={r.id}
              style={{
                border: "solid black",
                margin: "10px",
                width: "15%",
                padding: "10px",
              }}
            >
              <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            </div>
          );
        })}
      <button onClick={addRecipe}>Submit</button>
    </div>
  );
};

export default Recipes;
