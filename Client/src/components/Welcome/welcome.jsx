import React from 'react';
import styles from "../Welcome/StyleWelcom.module.css";
import "../Welcome/styleTittle.css";


export default function Welcome() {

    return (
        <div className={styles.container}>

            <section className={styles.section1}>
                <div className={styles.imgTittle} >
                <a href="#recipes"><img className={styles.dish} src="../imgs/logoRecipes2.jpg" alt="logoRecipes" /></a>
                
                <div className="shadow_letters">
                    <div>
                    <span className="--shadow:1">O</span>
                    <span className="--shadow:2">f</span>
                    </div>
                    <div>
                    <span className="--shadow:3">r</span>
                    <span  className="--shadow:4">e</span>
                    <span  className="--shadow:6">c</span>
                    <span  className="--shadow:7">i</span>
                    <span  className="--shadow:8">p</span>
                    <span  className="--shadow:9">e</span>
                    <span  className="--shadow:10">s</span>
                    </div>
                   
                   <div>
                   <span  className="--shadow:11">a</span>
                    <span  className="--shadow:12">n</span>
                    <span  className="--shadow:13">d</span>
                   </div>
                   <div>
                   <span  className="--shadow:14">d</span>
                    <span  className="--shadow:15">i</span>
                    <span  className="--shadow:16">e</span>
                    <span  className="--shadow:17">t</span>
                    <span  className="--shadow:18">s</span>
                    <span  className="--shadow:19">!</span>
                   </div>
                   

                </div>
                
                </div>
                
                <p>Find the best recipes according to your diet, and if you can't find it, create and publish your own recipe!</p>

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
                <p className={styles.footerSlide}>Click on the image and get information about the different diets☝</p>
            </section>


        </div>

    )
}