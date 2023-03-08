import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../redux/actions";
import styles from '../Recipes/StylesRecipes.module.css';
import Recipe from "../recipe/recipe";
import Loading from "../loading/loading";
import NavRecipes from "../NavRecipes/NavRecipes";
import ArrowUpBTN from "../ArrowUp/BTNArrowUp";


export default function Recipes() {
  const recipes = useSelector((state) => state.filteredRecipes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])

  
  /*Paginacion*/
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(8)

  const max = Math.ceil(recipes.length / perPage)
  const nextPage = () => {
    setPage(parseInt(page) + 1);
  };

  const previusPage = () => {
    setPage(parseInt(page) - 1);
  };


  return (
    <div id="recipes" className={styles.containerAllSection}>
     
      <div  id="firstRecipe" className={styles.header}>
        <div className={styles.subTitles}>
         <h1>
           <ul>
             <li className={styles.item}>
              Explora +100 recetas!
             </li>
             <li className={styles.item}>
               Busca tu dieta y descubre recetas
             </li>
             <li className={styles.item}>
               Los platos del mundo a tu mesa
             </li>
           </ul>
         </h1>
        </div>
        
        <NavRecipes setPage={setPage} ></NavRecipes>
      </div>

     
      <div className={recipes.length > 0 ? styles.ContaineRecipes : styles.ContainerNotRecipes}>
    
        {
          recipes.length ?
            recipes
              .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((r, i) =>
                <div className={styles.containerCard} key={i}>
                  <Recipe
                    key={r.id}
                    id={r.id}
                    name={r.name}
                    image={r.image}
                    diets={r.diets}
                    dishTypes={r.dishTypes}
                  />
                </div>) :
            <span className={styles.load}>
              <Loading />
            </span>

        }
         
     
       <button className={recipes.length ? styles.prevBTN :styles.visibilityBTN } onClick={previusPage} disabled={page === 1}></button>
       <button className={recipes.length ? styles.nextBTN :styles.visibilityBTN} onClick={nextPage} disabled={page === max}></button>

       <div className={styles.visibilityBTN} >
       <button className={styles.prev} onClick={previusPage} disabled={page === 1}></button>
       <button className={styles.next} onClick={nextPage} disabled={page === max}></button>
       </div>
      
      </div>
      
      <ArrowUpBTN></ArrowUpBTN>

    </div>

  )
}