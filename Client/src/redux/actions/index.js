import axios from 'axios';

export const FETCH_RECIPES = 'FETCH_RECIPES'
export const SEARCH_RECIPES = 'SEARCH_RECIPES'
export const ORDER_BY_HEALTH_SCORE = 'ORDER_BY_HEALTH_SCORE'
export const POST_RECIPE = 'POST_RECIPE'
export const GET_TYPE_DIETS = 'GET_TYPE_DIETS'
export const GET_DISH_TYPES = 'GET_DISH_TYPES'
export const ORDER_BY_ABC = 'ORDER_BY_ABC'
export const FILTER_BY_DIET ='FILTER_BY_DIET'
export const FILTER_BY_TYPE  = 'FILTER_BY_TYPE'



export function fetchRecipes() {
    return function(dispatch) {
        axios.get('/api/recipes')
        .then((recipes) => {
            dispatch({
                type: FETCH_RECIPES,
                payload: recipes.data
            });
        })
        .catch((error) => {
            console.log(error)
        })
        
    };
};

export function searchRecipes(search) {
    return function(dispatch) {
        axios.get(`/api/recipes?name=${search}`)
        .then((recipes) => {
            dispatch({
                type: SEARCH_RECIPES,
                payload: recipes.data
            });
        })
        .catch((error) => {
            console.log(error && alert(`⚠️ There are no recipes with the name ${search} ⚠️`))
        })
        
    };
};


export function orderByHealthScore(order){
    return {
        type: ORDER_BY_HEALTH_SCORE,
        payload : order
    };
};

export function orderByABC(order){
    return {
        type: ORDER_BY_ABC,
        payload : order
    };
};

export function filterByDiet(diet){
    return {
        type: FILTER_BY_DIET,
        payload : diet
    };
};

export function filterByType(type){
    return {
        type: FILTER_BY_TYPE,
        payload : type
    };
};

export function getDiets (){
    
    return async function(dispatch){
        var json = await axios.get(`/api/diets`);
        return dispatch( {
            type : GET_TYPE_DIETS,
            payload: json.data.map(diet=>{ return{ value: diet, label:diet}})
        })

    };
};

export function getDishTypes (){
    
    return async function(dispatch){
        var json = await axios.get(`/api/dishTypes`);
        return dispatch( {
            type : GET_DISH_TYPES,
            payload: json.data.map(dishType=>{ return{ value: dishType, label:dishType}})
        })

    };
};



export function postRecipes (payload) {
    return async function(){
        try {

            let formData = new FormData()
            formData.append("image", payload.image)
            formData.append("name", payload.name) 
            formData.append("healthScore", payload.healthScore) 

            for (var i = 0; i < payload.diets.length; i++) {
                formData.append('diets[]', payload.diets[i]);
            }

            for (var i = 0; i < payload.dishTypes.length; i++) {
                formData.append('dishTypes[]', payload.dishTypes[i]);
            }
           
            formData.append("summary", payload.summary) 
            formData.append("steps", payload.steps) 
         
            var response = await axios.post('/api/recipes', formData);
            return console.log(response, alert("Recipe created succesfully ✅"))
            
        } catch (error) {
            console.log(error)
            alert(`⛔${error.response.data}⛔`)                    
        }
    };
};