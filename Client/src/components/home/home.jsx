import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../redux/actions";
import styles from '../home/home.module.css'
import Welcome from "../Welcome/welcome";
import NavBar from '../NavBar/NavBar'
import Recipes from "../Recipes/Resipes";
import Footer from "../Footer/Footer";



export default function Home() {
  
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(9)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])


  return (
    <div >
        <NavBar setPage={setPage} ></NavBar>
        <Welcome></Welcome>
        <Recipes></Recipes>
        <Footer></Footer>
    </div>
  )
}