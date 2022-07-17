import axios from 'axios';
export const GET_RECIPES = 'GET_ALL_PRODUCTS';
export const CREATE_RECIPE = 'CREATE_PRODUCT';
export const GET_RECIPE_DETAIL = 'GET_PRODUCT_DETAIL';

export const getRecipes = (name) => {
    return async function (dispatch) {
      return  axios.get(`http://localhost:3001/api/recipes?name=${name}`) //poner luego en una variable de entorno y desps poner
      .then (recipes =>{ 
        dispatch({
            type: GET_RECIPES, 
            payload: recipes.data
        });
      })
      .catch((error)=>{
          console.log(error)
      })
    };
  };

export const getRecipeDetail = (id)=>{

   return async function(dispatch){
    return  axios.get(`http://localhost:3001/api/recipes/${id}`)
     .then(recipe =>{
       dispatch({
         type:GET_RECIPE_DETAIL,  //se despacha la info de la api al reducer
         payload: recipe.data
         
       });
     })
     .catch((error)=>{
       console.log(error)
     });
   };
   
}