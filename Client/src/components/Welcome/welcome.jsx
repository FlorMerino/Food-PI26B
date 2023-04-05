import React from 'react';
import styles from "../Welcome/StyleWelcom.module.css";


export default function Welcome() {

    return (
        <div className={styles.container}>

            <section >
                <img className={styles.dish} src="../imgs/platoBh.png" alt="dish" />
                  <h1>Of recipes and diets!</h1>
                <h5>Find the best recipes according to your diet, and if you can't find it, create and publish your own recipe!</h5>

            </section>
            <section>

                <div id="carouselExampleAutoplaying" class={`carousel slide ${styles.carousel}`} data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href="https://www.healthkart.com/connect/balanced-diet-what-is-it-and-how-to-achieve-it/" target="_blank"> <img src="../imgs/BalanceDiet.png" class="d-block w-100" alt="Balance diet" /></a> {/*las imagenes deben estar guardadas en public siempre y cuando sea img estaticas*/}
                        </div>
                        <div class="carousel-item">
                            <a href="https://betterme.world/articles/different-types-of-diets/" target="_blank"><img src="../imgs/diets.png" class="d-block w-100" alt="diets" /></a>
                        </div>
                        <div class="carousel-item">
                            <a href="https://www.2adays.com/blog/nutrition-for-athletes-overview/" target="_blank"> <img src="../imgs/nutrition.png" class="d-block w-100" alt="nutrition" /></a>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <p>Click on the image and get information about the different diets☝</p>
            </section>


        </div>

    )
}