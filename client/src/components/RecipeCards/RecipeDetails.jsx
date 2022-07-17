import React, { useEffect } from 'react';
import {getRecipeDetail} from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const RecipeDetail = (props) => {

 let param = props.match.params.id;
 console.log(param)
 const dispatch = useDispatch();
 //-----aca despacho la accion con hooks (mapDispatchToProps)
 useEffect( () => dispatch(getRecipeDetail(param)),[dispatch,param]); //{type:GET_RECIPE_DETAIL,payload: recipe.data}
 //-----aca defino el estado (mapStateToProps)  
 const recipe = useSelector(state => state.recipeDetail);

 console.log(recipe)
 let allDiets = recipe.diets.map(e => ` ${e}`).toString();//array de dietas ordenado
 let allTypes = recipe.dishTypes.map(e => ` ${e}`).toString();
 
    return (
        <div>
           {
             <div>
             <h1>{recipe.name}</h1> 
             <img src={recipe.image} alt={`img ${recipe.name}`} />
             <h2>Tipo de plato: {allTypes}.</h2>
             <h2>Para dietas: {allDiets}.</h2>
             <h2>Resumen del plato: {recipe.summary.replace(/<[^>]+>/g,"")}</h2>
             <h2>Nivel de comida saludable :{recipe.healthScore}</h2>
             <h2>Paso a paso:</h2>
             <ul>
              {
               recipe.steps.map(e=> <li key={e.number}> <h2>{e.step}</h2>.</li>)
              }
             </ul>
             </div>
           }
            <Link to="/home">Volver</Link>   
        </div>
    );

};

export default RecipeDetail;
