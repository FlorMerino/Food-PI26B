import React from "react"
import { useEffect,useState } from "react"

export default function ArrowUpBTN() {
 
    useEffect(()=>{
        window.addEventListener('scroll', () =>{
            
            if(document.documentElement.scrollTop >950){
              document.querySelector('arrowUpContainer').classList.add('arrowUpNotContainer')
            }else{
              setstyleArrowUp('arrowUpNotContainer')
            }
          }) 
    })

    return(
        <div>
            <button></button>
        </div>
    )
}