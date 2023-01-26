import styles from '../home/home.module.css'
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import './Nav.css'

export default function NavBar({setPage}) {
    
    return(
    //     <ul className={styles.nav}>
    //     <li><SearchBar setPage={setPage} /></li>
    //     <li ><Link to={'/create'}><button className={styles.createBTN}>Create Recipe</button></Link></li>
    //     <li> <a href="#recipes">Recipes</a> </li>
    //   </ul>
    <nav class="navbar navbar-expand-lg  styles">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}