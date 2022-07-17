const { Router } = require('express');
const {TypeOfDiet} = require('../db');

const {getDiets} = require('../controllers/diets_controllers');

const router = Router();

router.get('/', async (req,res, next)=>{
  try {
   const arrayDiets= await getDiets(); //array de dietas traidas desde la api
   const diets = await TypeOfDiet.findAll();// me trae el array de dietas si hay cargadas

    if(diets.length>0){
      res.json(diets)
    }else{
     arrayDiets.forEach(diet =>{
      TypeOfDiet.findOrCreate({
        where: {name: diet}
      });
     });
    };
    const dietsDb= await TypeOfDiet.findAll();
    res.json(dietsDb);
  } catch (error) {
    next(error);
  }
});

//------con .then
//axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`)
  //.then(response => { 
    //res.send(response.data.results[0].diets)                        
  //})
  //.catch(error => res.status(404).send(error));   


module.exports = router;