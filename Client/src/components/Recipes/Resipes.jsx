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
      <div className={styles.header}>
        <h1>explore todas las recetas</h1>
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
        
       <button className={styles.prevBTN} onClick={previusPage} disabled={page === 1}></button>
       <button className={styles.nextBTN} onClick={nextPage} disabled={page === max}></button>
       <div className={styles.PaginationBTN} >
       <button className={styles.prev} onClick={previusPage} disabled={page === 1}></button>
       <button className={styles.next} onClick={nextPage} disabled={page === max}></button>
       </div>
      </div>

    </div>

  )
}