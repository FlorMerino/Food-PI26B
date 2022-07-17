import { GET_RECIPES, GET_RECIPE_DETAIL } from "../actions";

const initialState = {
    recipes: [], //las recetas por nombre
    recipeDetail: {},  //las recetas por id
  
  };

  export default function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
         return{...state, recipes: action.payload}
         
        case GET_RECIPE_DETAIL:
          return{...state, recipeDetail: action.payload}
         
        default: return{...state}
      }
  }