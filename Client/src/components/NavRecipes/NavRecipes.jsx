import { useDispatch } from 'react-redux';
import styles from '../NavRecipes/NavRecp.module.css'
import OrderHs from "../flter&order/orderByHs";
import OrderABC from "../flter&order/orderbyABC";
import FilterDiet from "../flter&order/filterDiet";
import FilterType from "../flter&order/filterType";
import { fetchRecipes } from "../../redux/actions";

export default function NavRecipes({setPage}) {

    const dispatch = useDispatch()

    function handleOnClick(e) {
        e.preventDefault();
        dispatch(fetchRecipes())
      }
    return(
      <nav class={`navbar navbar-expand-lg navbar-light ${styles.navRcp}`}>
      <div class={`container-md ${styles.navSelect}`}>
        <div>
         <OrderHs />
         <OrderABC/>
         <FilterDiet setPage={setPage} />
         <FilterType setPage={setPage} />
        </div>
         <div>
         <button onClick={e => handleOnClick(e)} className={styles.RefBTN}></button>
         </div>
      </div>
    </nav>
    )
}

  {/* <div className={styles.filter}>
         <OrderHs />
         <OrderABC/>
         <FilterDiet setPage={setPage} />
         <FilterType setPage={setPage} />
         <button onClick={e => handleOnClick(e)} className={styles.RefBTN}></button>
        </div> */}