import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../redux/actions";
import styles from '../Recipes/StylesRecipes.module.css';
import Pagination from "../pagination/pagination";
import Recipe from "../recipe/recipe";
import Loading from "../loading/loading";
import NavRecipes from "../NavRecipes/NavRecipes";

export default function Recipes() {
  const recipes = useSelector((state) => state.filteredRecipes)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(9)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])
  const max = Math.ceil(recipes.length / perPage)

  return (
       <div id="recipes" className={styles.containerSectionRecipe}>
       <div className={styles.header}>
        <h1>explore todas las recetas</h1>
        <NavRecipes setPage={setPage} ></NavRecipes>
      </div>
      
      <div className={styles.ContaineRecipes}>
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
      </div>
      <Pagination page={page} setPage={setPage} max={max} />
       </div>
    
  )
}