import React, { useState } from "react";
import {IoIosArrowDropupCircle} from 'react-icons/io';
import styles from '../ArrowUp/BTNArrowUp.module.css';

export default function ArrowUpBTN() {
  
  
  window.onscroll= function (){
    let buttonUp= document.getElementById("button-up");
    let scroll= document.documentElement.scrollTop;
    let path= document.URL
  
    if(path === 'http://localhost:3000/' || path === 'http://localhost:3000/#firstRecipe'){
      if( scroll>950){
        
         buttonUp.style.transform ="scale(1)";
  
      }else if (scroll <950){
       
        buttonUp.style.transform ="scale(0)";
      }
    }
    
  }

    return(

        <div id="button-up" className={styles.arrowUpContainer}>
         < a href="#firstRecipe"> <IoIosArrowDropupCircle></IoIosArrowDropupCircle></a>
        </div>
      
    )
}