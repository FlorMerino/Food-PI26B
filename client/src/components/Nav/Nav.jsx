import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../SearchBar/Search';
import Recipe from '../RecipeCards/Recipe';
import { useSelector } from 'react-redux';

const Nav = () => {
  
  let recipes= useSelector((state)=> state.recipes) //estado con las recetas cargadas traidas desde la api


  return (
    <div>
     <Link to="/">Home</Link>
     <Search/>
    
     <Link to="/recipe/create">Crear Receta</Link>

     {recipes.map( (recipe) =>{
       return <Recipe key={recipe.id} name={recipe.name}
        image={recipe.image} diet={recipe.diet} id={recipe.id}/>
     })}
     <h3>aca se ve el listado de recetas</h3>
    </div>
  );
};

export default Nav;