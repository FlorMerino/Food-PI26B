import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({id,name,diet,image}) => {
    
 let allDiets = `${diet.map(e => ` ${e}`).toString()}.`

  return (
    <div>        
     <Link to={`/recipeDetails/${id}`}>
     <h3>{name}</h3>
     </Link>
     <img src={image} alt={`image ${name}`} />
     <p>Dieta: {allDiets}</p>
    </div>
  );
};

export default Recipe;