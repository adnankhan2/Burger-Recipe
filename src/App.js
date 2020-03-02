import React, { useEffect, useState } from "react";
import Recipe from "./Recipe"
import "./App.css";

const App = () => {
  const APP_ID = "71a33bb8";
  const APP_KEY = "cb57160c545d90f775fe515161fcd311";

  const [recipes, setRecipes] = useState([]);
  const [search , setSearch] = useState([''])
  const [querry ,setQuerry] =useState("chicken")

  useEffect(() => {
    getRecipes();
  }, [querry]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = e =>{
    setSearch(e.target.value)
  };
  const getSearch = e => {
    e.preventDefault();
    setQuerry(search)
    setSearch('')
  }
  return (
    <div className="App">
      <form  onSubmit = {getSearch} className="search_form">
        <input className="search_bar" type="text" value= {search} onChange={updateSearch} />
        <button className="search_btn" type="submit">
          search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe
        key= {recipe.recipe.label}
        title = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        />
      )) }
    </div>
  );
};
export default App;
