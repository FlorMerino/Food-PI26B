import styles from '../Footer/footer.module.css';
import {BsFacebook} from 'react-icons/bs';
import {GrInstagram, GrMail} from 'react-icons/gr';

export default function Footer() {
  return (
    // <footer id="about" className={styles.footerConteiner}>
    //       <div className={styles.conteiner2}>
    //         <div>Sobre nosotros</div>
    //         <div>Nuestro obj</div>
    //         <div>Contacto</div>
    //       </div>
    //       <p>Copyright © 2022, All Right Reserved</p>
    // </footer>

    <footer  id="about" className={styles.footer}>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div className={styles.single_footer}>
              <h4>Sobre nosotros</h4>
             <p>Blog creado por y para toda la comunidad amante del arte culinario de la cocina, para aquellos que siguen dietas especificas o quieren explorar nuevas dietas.</p>
            </div>
          </div>
          {/* <!-- END COL -->  */}
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class={styles.single_footer}>
              <h4>Nuestro objetivo</h4>
            <p>Establecer un espacio para crear y compartir sus propias recetas o para explorar diversas recetas con una gran variedad de dietas y puntuacion, todas con su paso a paso.</p>
            </div>
          </div>
          {/* <!--- END COL --> */}
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div className={styles.single_footer}>
              <h4>Contactanos   </h4>
            </div>
            <div className={styles.social_profile}>
              <div>
              <p>informanos un problema</p> <ul> <li><a href="#info@gmail.com"><GrMail></GrMail></a> </li></ul> 
              </div>
              <div>
               <p>Redes</p> 
                <ul>             
                <li><a href="#"><BsFacebook></BsFacebook></a></li>
                <li><a href="#"><GrInstagram></GrInstagram></a></li>                
              </ul>
              
              </div>
              
              </div>
           
          </div>
          {/* <!--- END COL -->          */}
        </div>
        {/* <!--- END ROW -->  */}
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <p className={styles.copyright}>Copyright © 2022, derechos resevados <a href="https://www.linkedin.com/in/florencia-merino-02a22a11b/">FlorMerino</a>.</p>
          </div>
          {/* <!--- END COL -->                  */}
        </div>
        {/* <!--- END ROW -->                  */}
      </div>
      {/* <!--- END CONTAINER --> */}
    </footer>
  )
}