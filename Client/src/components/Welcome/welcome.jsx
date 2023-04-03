import React from 'react';
import styles from "../Welcome/StyleWelcom.module.css";


export default function Welcome() {

    return (
            <div className={styles.container}>
                <section >
                    <div id="carouselExampleAutoplaying" class={`carousel slide ${styles.carousel}`} data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../imgs/bhoomis.png" class="d-block w-100" alt="..." /> {/*las imagenes deben estar guardadas en public siempre y cuando sea img estaticas*/}
                            </div>
                            <div class="carousel-item">
                                <img src="../imgs/veg.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/04/625ee284e0735_1200.jpg" class="d-block w-100" alt="..." />
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
                    <h5>Find the best recipes according to your diet, and if you can't find it, create and publish your own recipe!</h5>
                </section>

                <section >
                    <img className={styles.dish} src="../imgs/plato-sin-fondo1.gif" alt="dish" />
                </section>
            </div>
        
    )
}