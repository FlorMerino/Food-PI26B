import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../redux/actions";
import styles from '../Recipes/StylesRecipes.module.css';
import Recipe from "../recipe/recipe";
import Loading from "../loading/loading";
import NavRecipes from "../NavRecipes/NavRecipes";
import ArrowUpBTN from "../ArrowUp/BTNArrowUp";
import {TbArrowBigLeftFilled, TbArrowBigRightFilled} from "react-icons/tb";


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
             Explore more than +50 recipes!
             </li>
             <li className={styles.item}>
             Select your diet and discover recipes
             </li>
             <li className={styles.item}>
             Find the favorite dish for your occasion
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

                    
          <button className={recipes.length ? styles.prevBTN :styles.visibilityBTN } onClick={previusPage} disabled={page === 1}> <TbArrowBigLeftFilled></TbArrowBigLeftFilled> </button>

          <button className={recipes.length ? styles.nextBTN :styles.visibilityBTN} onClick={nextPage} disabled={page === max}> <TbArrowBigRightFilled></TbArrowBigRightFilled> </button>
         {
          recipes.length ?

          <div className={styles.nextAndPrevBTN} >
          <button className={styles.prev} onClick={previusPage} disabled={page === 1}><TbArrowBigLeftFilled></TbArrowBigLeftFilled> </button>
          <button className={styles.next} onClick={nextPage} disabled={page === max}><TbArrowBigRightFilled></TbArrowBigRightFilled> </button>
          </div>      
          :
          <span></span>
        }
     
       
      
      </div>
      
      <ArrowUpBTN></ArrowUpBTN>
    
   
    </div>

  )
}