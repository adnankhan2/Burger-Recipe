import React, { useEffect, useState } from "react";
import Recipe from "./Recipe"
import "./App.css";

const App = () => {
  const APP_ID = "71a33bb8";
  const APP_KEY = "cb57160c545d90f775fe515161fcd311";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  return (
    <div className="App">
      <form className="search-form">
        <input className="search_bar" type="text" />
        <button className="search_btn" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe />
      )) }
    </div>
  );
};
export default App;
