const axios = require('axios');  //Devuelve Promesa, pero no es una promesa en si 
//el axios hace q no tengamos q hacerle el .JSON y devolver otra promesa, nos devuelve la data de una sola vez
const {apiKey} = process.env;

//Busco receta por nombre ingresado
const getNameRecipe = async (name) => {
    //info api es un obj
  let infoApi= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`);
  let nameRecipes =[]; //nombres de recetas que contienen el buscado
  let arrayResults =infoApi.data.results;
  for (let i = 0; i< arrayResults.length; i++){
    if(arrayResults[i].title.includes(`${name}`)){
      nameRecipes.push({
        name: arrayResults[i].title , 
        id: arrayResults[i].id, 
        image: arrayResults[i].image, 
        diet: arrayResults[i].diets 
      });
    };
  };
  return nameRecipes;
}


//Busco por id de receta
const getInfoRecipe = async (idReceta)=> {
    let infoApi= await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${apiKey}`);
     let steps;
     if(infoApi.data.analyzedInstructions.length>0) {
       steps= infoApi.data.analyzedInstructions[0].steps.map( e => {
        return{
         number: e.number,
         step: e.step
        };
        })
      } else steps =  'Esta receta no tiene paso a paso'
   
    const recipeApi = 
      {
       id: infoApi.data.id,
       name: infoApi.data.title,
       image: infoApi.data.image,
       diets: infoApi.data.vegetarian? ["vegetarian",...infoApi.data.diets] : infoApi.data.diets,
       dishTypes: infoApi.data.dishTypes,
       summary: infoApi.data.summary,
       healthScore: infoApi.data.healthScore,
       steps: steps
      };

    return recipeApi;
}


module.exports={
    getInfoRecipe,
    getNameRecipe,
}