const { Router } = require('express');
const {Recipe} = require('../db'); //esto viene del model de sequelize ya con el belongsToMany de la db
const { Op } = require('sequelize');
const { getInfoRecipe, getNameRecipe } = require('../controllers/recipes_controllers');




const router = Router();

router.get('/', async(req,res,next)=>{
  const {name} = req.query;
  try {
    const infoDb= await Recipe.findAll({
      attributes: ['name', 'id'],
      where:{
        name: {
          [Op.like]: `%${name}%` 
        },
     // order: [
       // ['name', 'ASC'], //q este en orden decendente
     // ]
      }
    });
    let recipesDb =infoDb.map(e=> {return e.name})
    const recipeApi= await getNameRecipe(name); 

    if(recipesDb.length>0 || recipeApi.length>0){
      let nameRecipes= [...recipesDb,...recipeApi];
      res.status(200).send(nameRecipes);
    }
    else res.status(404).send(`No se encontro ninguna receta con el nombre ${name}`);

  } catch (error) {
    next(error);
  }
});

router.get('/:idReceta', async (req,res,next)=>{
  let {idReceta}= req.params;
  let id2Receta= parseInt(idReceta);
  try {
  let getRecipeDb;
  if(typeof idReceta === 'string' && idReceta.length>10){
    //es de mi Db
   getRecipeDb = await Recipe.findByPk(idReceta);
   res.status(200).send(getRecipeDb);

  }else{
    //es de mi api
   let getRecipeApi = await getInfoRecipe(id2Receta);
   res.status(200).send(getRecipeApi);
  }
  } catch (error) {
    next(error);
  }
});

//con este creo la receta
router.post('/', async (req,res, next)=>{
    const {name, dishSummary, healthScore, stepBystep} = req.body;
    try {
        if(name && dishSummary){
            const newRecipe = await Recipe.create({
                name,
                dishSummary,
                healthScore,
                stepBystep
           });
          res.send(newRecipe);
        }else res.status(404).send('Faltan llenar campos obligatorios')
    } catch (error) {
       next(error); // va a ir al siguiente middleware q en este caso es el control de errores Error catching endware
    }
});



module.exports = router;