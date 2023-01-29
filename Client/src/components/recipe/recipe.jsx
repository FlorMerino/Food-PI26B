import { Link } from "react-router-dom";
import styles from "../recipe/recipe.module.css"

export default function Recipe({ id, name, image, diets }) {
    return (

        <div class={`card ${styles.size}`} >
            <Link to={`recipes/${id}`}>
                <img src={image} class="card-img-top" alt="..." />
            </Link>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{diets.map(d => <h5>{d}</h5>)}</p>
                <a href="#" class="btn btn-primary">Ir a algún lugar</a>
            </div>
        </div>


    )
}