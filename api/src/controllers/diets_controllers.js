const axios = require('axios');  //Devuelve Promesa, pero no es una promesa en si 
//el axios hace q no tengamos q hacerle el .JSON y devolver otra promesa, nos devuelve la data de una sola vez
const {apiKey} = process.env;



const getDiets = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`)
    let arrayDiets =[];
    let arrayResults =response.data.results; //aca tengo el array de resultados con las comidas, array de objetos
    
    for (let i = 0; i< arrayResults.length; i++) {
      if(arrayResults[i].vegetarian && !arrayDiets.includes('vegetarian')) arrayDiets.push('vegetarian');
      let dietsRecipe= arrayResults[i].diets; //arreglo de dietas de una receta
      dietsRecipe.forEach(element => {
        if(!arrayDiets.includes(element)){
          arrayDiets.push(element);
        }
      });  
    }
    return arrayDiets;
}
module.exports= {
    getDiets,
}

