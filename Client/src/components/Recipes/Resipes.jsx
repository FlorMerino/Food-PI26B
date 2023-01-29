import React, { useEffect, useState } from "react";
import OrderHs from "../flter&order/orderByHs";
import OrderABC from "../flter&order/orderbyABC";
import FilterDiet from "../flter&order/filterDiet";
import FilterType from "../flter&order/filterType";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../redux/actions";
import styles from '../Recipes/StylesRecipes.module.css';
import Pagination from "../pagination/pagination";
import Recipe from "../recipe/recipe";
import Loading from "../loading/loading";

export default function Recipes() {
  const recipes = useSelector((state) => state.filteredRecipes)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(9)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])
  const max = Math.ceil(recipes.length / perPage)

  function handleOnClick(e) {
    e.preventDefault();
    dispatch(fetchRecipes())
  }

  return (
       <div id="recipes" className={styles.container}>
       <div className={styles.filter}>
        
        <OrderHs />
        <OrderABC/>
        <FilterDiet setPage={setPage} />
        <FilterType setPage={setPage} />
        <button onClick={e => handleOnClick(e)} className={styles.RefBTN}></button>
      </div>
      
      <div className={styles.ContaineRecipes}>
        {
          recipes.length ?
            recipes
              .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((r, i) =>
                <div key={i}>
                  <Recipe
                    key={r.id}
                    id={r.id}
                    name={r.name}
                    image={r.image}
                    diets={r.diets}
                    dishTypes={r.dishTypes}
                  />
                </div>) :
            <Loading />
        }
      </div>
      <Pagination page={page} setPage={setPage} max={max} />
       </div>
    
  )
}