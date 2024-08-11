import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const APP_ID = process.env.REACT_APP_EDAMAM_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_KEY;

const getRecipes = async (query, setRecipes) => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json();
  setRecipes(data.hits || []);
};

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Veg Paneer");

  useEffect(() => {
    getRecipes(query, setRecipes);
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div style={{paddingTop:"20px"}}><h1 style={{textAlign:"center"}}>Welcome to Saloni Patel's Recipe House!</h1></div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Which dish do you want to prepare?"
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
