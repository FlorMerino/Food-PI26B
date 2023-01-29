import { Link } from "react-router-dom";
import styles from '../NavBar/Nav.module.css';


export default function NavBar({setPage}) {
    
    return(
    <nav class={`navbar navbar-expand-lg ${styles.navStyle}`}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class={`collapse navbar-collapse ${styles.positionItems}`} id="navbarNav">
        <ul class="navbar-nav ">
          <li class={`nav-item ${styles.spaceItems}`}>
            <a class="nav-link active" aria-current="page" href="#recipes">Recipes</a>
          </li>
          <li class={`nav-item ${styles.spaceItems}`}>
            <Link class="nav-link spaceItems" to={'/create'}>Create Recipe</Link> 
          </li>
          <li class={`nav-item ${styles.spaceItems}`}>
            <a class="nav-link" href="#about">About us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}