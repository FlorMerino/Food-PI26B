import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Loading from "../loading/loading"
import styles from '../recipeDetail/recipeDetail.module.css';
import {RxDoubleArrowLeft} from "react-icons/rx";
import stylesB from '../createRecipe/createRecipe.module.css';
const { REACT_APP_API_URL } = process.env;


export default function Recipe() {

  const [recipe, setRecipe] = useState("")
  let { id } = useParams()
  useEffect(() => {
    axios.get(`${REACT_APP_API_URL}/api/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data)
      })
    return () => {
      setRecipe("")
    }
  }, [id])




  return (
    <div className={styles.bkg}>
        <div className={styles.bkg1} >

        <div className={stylesB.backBTN1}>
        <Link to={'/'}>
          <button ><RxDoubleArrowLeft></RxDoubleArrowLeft> </button>
        </Link>
      </div>
      {
        recipe ?
          <div className={styles.containerDetail} >
            <h3 className={styles.title}>{recipe.name}</h3>

            <div className={styles.diseño} key={recipe.id}>

              <div className={styles.izq}>
                <img className={styles.img} src={recipe.image} alt='imagen' />
                <div>Health Score: {recipe.healthScore}</div>
                <h5 className={styles.subtitle}>Type of Diet</h5>
                {recipe.diets.length ?
                  <ul className={styles.dietsTypes}>{recipe.diets.map(d => <li><p>{d}</p></li>)}</ul> :
                  <span>No type of diets specified</span>
                }
                <h5 className={styles.subtitle}>Type of Dish</h5>
                {recipe.types.length ?
                  <ul className={styles.dietsTypes}>{recipe.types.map(t => <li>{t}</li>)}</ul> :
                  <span>No dish type specified</span>
                }
              </div>

              <div className={styles.der}>
                <h5 className={styles.subtitle}>Summary:</h5>
                <p>{recipe.summary.replace(/<[^>]*>?/g, "")}</p>
                <h5 className={styles.subtitle}>How to prepare:</h5>
                {recipe.steps !== null ?
                  <p>{recipe.steps.replace(/<[^>]*>?/g, "")}</p> :
                  <span>There are steps to show</span>
                }
              </div>

            </div>
          </div> :
          <div className={styles.loading}>
            <Loading />
          </div>
      }
        </div>


      
    </div>)
}