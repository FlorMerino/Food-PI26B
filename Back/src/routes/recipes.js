const { Router } = require('express');
const {Recipe, Diet, DishType} = require('../db');
const { getAllRecipes, getApiRecipeInf, getDbRecipeInf, getDbRecipes, addDietsTypesToDb } = require('./utils');
const router = Router();
const path = require('path');
const multer = require("multer");
const cloudinary = require("../configCloudinary/cloudinary");
const { default: axios } = require('axios');

///config multer
const storage = multer.diskStorage({
    destination:  function (req, file, cb) {
        cb(null, './storage/imgs')
      }, 

    filename: ( req, file ,cb ) => {
        cb( null , `${file.originalname}-${Date.now()}`)
    }
})
const upload = (multer({storage}).single("image"))
///


router.get("", async (req, res, next) => {
    const {name} = req.query;

    try {
        await addDietsTypesToDb()
        let totalRecipes = await getAllRecipes();
        
        if(name){
            let recipesList = await totalRecipes.filter(r => r.name.toLowerCase().includes(name.toLowerCase()));
            if (recipesList.length) return res.send(recipesList); 
            else return res.status(404).send(`There are no recipes with ${name}`);
        } 
        res.json(totalRecipes);  
    } catch (error) {
        next(error);   
    } 
});

router.get("/created", async (req, res, next) => {

    try {
        let DbRecipes = await getDbRecipes();
        if(DbRecipes){
            return res.send(DbRecipes); 
        } 
        else return res.status(404).send(`There are no recipes recipes created yet`);
    } catch (error) {
        next(error);   
    } 
});


router.get("/:id", async (req, res, next) => {
    const {id} = req.params;

    try {
        if(id.length>30){
            console.log(id)
            const infoDb = await getDbRecipeInf(id)
            if(!infoDb) return res.status(404).send("Recipe doesn`t exist")
            return res.send(infoDb)
        }
       
        const apiInfo = await getApiRecipeInf(id)
        if(!apiInfo) return res.status(404).send("Recipe doesn`t exist")
        return res.send(apiInfo)

    } catch (error) {
        next(error);
    }
})


router.post("", upload ,async (req, res, next) => {
    const {name, summary,healthScore, steps, diets, dishTypes} = req.body;
    var newRecipe;
     console.log(req.body)
     console.log(req.file)
    try {
        if(!name || !summary || !steps ) return res.status(400).send("Pleace, complete the form");        

        if(req.file){//guarda foto forma local

            const response = await cloudinary.uploader.upload(req.file.path)
            let image = `${response.secure_url}`

           newRecipe = await Recipe.create({
            name, summary, healthScore, image, steps
        });
        }else return res.status(400).send("You must select a Image");


        if(diets){
          const dietDb = await Diet.findAll({
              where : {name: diets}
          })
          await newRecipe.addDiet(dietDb)
        }
        else return res.status(400).send("You must select a type of diet");

        if(dishTypes){
            const dishTypeDb = await DishType.findAll({
                where : {name: dishTypes}
            })
            await newRecipe.addDishType(dishTypeDb)
          }
        else return res.status(400).send("You must select a type"); 

        res.status(201).send("New recipe created succesfully")

    } catch (error) {
           res.status(400).send("This recipe already exists")
    }
});







module.exports = router;
