import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getRecipes } from '../../redux/actions';

const Search = () => {

  const[input, setInput]= useState({name:''});
  let dispatch = useDispatch();
  const handleInputChange = (e) => {
    e.preventDefault();
      setInput( {
         ...input,
         [e.target.name]: e.target.value,
        });
     };
  let handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(getRecipes(input.name)); 
    setInput({name: ''}) //se setee a vacio
  };
  //traigo mi receta por el input.name
 
  //let recipes= useSelector((state)=> state.recipes) //estado con las recetas cargadas traidas desde la api

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Nombre de receta: </label>
        <input type='text' name="name" value={input.name} onChange={handleInputChange} ></input>  
        <button type='submit' >Buscar</button>
      </form>
    </div>
  );
};

export default Search;