import styles from '../Footer/footer.module.css';
import {BsFacebook} from 'react-icons/bs';
import {GrInstagram, GrMail,GrYoutube} from 'react-icons/gr';

export default function Footer() {
  return (
 
    <footer  id="about" className={styles.footer}>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div className={styles.single_footer}>
              <h4>About the site</h4>
             <p>Site created by and for the entire community that loves the culinary art of cooking, 
              in order to share various recipes, both for those who follow specific diets or want to explore new diets.</p>
            </div>
          </div>
  
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class={styles.single_footer}>
              <h4>Use of the site</h4>
            <p>Only strictly recipe publications will be allowed, those that do not meet the required fields will be deleted, 
              thank you, and enjoy sharing or searching for recipes. Let's cook!</p>
            </div>
          </div>
   
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div className={styles.single_footer}>
              <h4>Contacts </h4>
            </div>
            <div className={styles.social_profile}>
              <div>
              <p>Report a problem with the web</p> <ul> <li><a href="mailto:florenciamerino012@gmail.com"><GrMail></GrMail></a> </li></ul> 
              </div>
              <div>
               <p>Discover more about recipes</p> 
                <ul>             
                <li><a href="https://www.facebook.com/bhoomisquickrecipes"  target="_blank"><BsFacebook></BsFacebook></a></li>
                <li><a href="https://www.youtube.com/@BhoomisQuickRecipes/videos"  target="_blank"><GrYoutube></GrYoutube> </a></li>
                <li><a href="https://www.instagram.com/bhoomisquickrecipes/?fbclid=IwAR025t2xTFMXCfM20Qecj5Y8mwH1mXR7_ARYLYrebMBgZ6aFQx8pIB_GOlk"  target="_blank"><GrInstagram></GrInstagram></a></li>                
              </ul>
              
              </div>
              
              </div>
           
          </div>
  
        </div>
 
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <p className={styles.copyright}>Copyright © 2022, rights reserved website created by <a href="https://www.linkedin.com/in/florencia-merino-02a22a11b/">FlorMerino</a>.</p>
          </div>        
        </div>
      </div>
    </footer>
  )
}