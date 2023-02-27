import React from "react";
import {IoIosArrowDropupCircle} from 'react-icons/io';
import styles from '../ArrowUp/BTNArrowUp.module.css';

import { useState } from "react";

export default function ArrowUpBTN() {
  const [ArrowUp, setstyleArrowUp] = useState(false)

  window.onscroll= function (){
    let buttonUp= document.getElementById("button-up");
    let scroll= document.documentElement.scrollTop;

    if( scroll>950){
      setstyleArrowUp(true)
      buttonUp.style.transform ="scale(1)";

    }else if (scroll <950){
      buttonUp.style.transform ="scale(0)";
     setstyleArrowUp(false)
      
    }
  }

    return(
        <div >
             {
       ArrowUp && (
        <div id="button-up" className={styles.arrowUpContainer}>
         < a href="#firstRecipe"> <IoIosArrowDropupCircle></IoIosArrowDropupCircle></a>
        </div>
        
        )
      }

        </div>
    )
}