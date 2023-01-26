import React from 'react';
import styles from "../Welcome/StyleWelcom.module.css";


export default function Welcome() {

    return (
            <div className={styles.container}>
                <div className={styles.carousel}>
                    <h5>More than 100 recipes, to bring gastronomy to your table</h5>
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../imgs/DIETA_MEDITERRANEA_ITALIA.JPG" class="d-block w-100" alt="..." /> {/*las imagenes deben estar guardadas en public siempre y cuando sea img estaticas*/}
                            </div>
                            <div class="carousel-item">
                                <img src="https://cdn.hsnstore.com/blog/wp-content/uploads/2018/10/tipos-de-dietas.jpg" class="d-block w-100" alt="..." />
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
                </div>

                <div >
                    <h1 className={styles.title}>What are we going to eat?</h1>
                    <img className={styles.dish} src="../imgs/plato-sin-fondo1.gif" alt="dish" />
                </div>
            </div>
        
    )
}