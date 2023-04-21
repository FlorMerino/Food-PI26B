import React from "react";
import styles from '../pagination/pagination.module.css'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

export default function Pagination({ page, setPage, max }) {
  const nextPage = () => {
    setPage(parseInt(page) + 1);
  };

  const previusPage = () => {
    setPage(parseInt(page) - 1);
  };

  const handleChange = (e) => {
    setPage(parseInt(e.target.innerHTML))
  }

  let numbrerPages = [];
  for (let i = 1; i < max + 1; i++) {
    numbrerPages.push(i);
  }

  return (
    <div className={styles.pag}>
      <button className={page <= 1 ? styles.notButton : 'button'} disabled={page <= 1} onClick={previusPage} ><MdKeyboardDoubleArrowLeft></MdKeyboardDoubleArrowLeft></button>

      <ul class="pagination pagination-sm">
        {
          numbrerPages.map(num =>{
            return <li class={num===page? "page-item active" : "page-item"} aria-current="page">
            <a class="page-link" onClick={handleChange}>{num}</a>
          </li>
          })
        }
      </ul>
    
      <button className={page >= max ? styles.notButton : 'button'} disabled={page >= max} onClick={nextPage}><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></button>
    </div>
  )
}