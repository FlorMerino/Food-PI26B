import { Link } from "react-router-dom";
import {GiWhisk} from 'react-icons/gi';
import styles from "../recipe/recipe.module.css"

export default function Recipe({ id, name, image, diets }) {

    let diet = diets.join(', ')

    return (
        <div class={`card ${styles.size}`} >
            <Link to={`recipes/${id}`}>
                <img src={image} class="card-img-top" alt="..." />
            </Link>
            <div class={`card-body ${styles.containerBody}`}>
                <h5 class="card-title">{name}</h5>
                <p class={`card-text ${styles.text}`}>Diets: {diet}.</p>
                <Link to={`recipes/${id}`} class={`btn btn-primary ${styles.btn}`}> <GiWhisk></GiWhisk> Recipe</Link>
            </div>
        </div>


    )
}