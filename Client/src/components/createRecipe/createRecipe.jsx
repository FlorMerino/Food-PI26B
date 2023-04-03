import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDiets, getDishTypes, postRecipes } from "../../redux/actions";
import styles from '../createRecipe/createRecipe.module.css';
import Select from "react-select";
import { BsFillImageFill } from "react-icons/bs";
import {RxDoubleArrowLeft} from "react-icons/rx";
import Validate from "./ValidateForm";


export default function AddRecipe() {

  const dispatch = useDispatch();
  let listDiets = useSelector((state) => state.diets)
  let listDishTypes = useSelector((state) => state.dishTypes)

  useEffect(() => {
    dispatch(getDiets());
    dispatch(getDishTypes());
  }, [dispatch])

  const [error, setError] = useState({switchS: true});
  const [viewImageSelect, setViewImageSelect] = useState(undefined)

  const [input, setInput] = useState({
    name: '',
    summary: '',
    steps: '',
    healthScore: 0,
    steps: '',
    image: undefined,
    diets: [],
    dishTypes: []
  });

  let handleChange = (e) => {

    if (e.target.name === 'image') {
      e.preventDefault();
      let url = URL.createObjectURL(e.target.files[0])
      setViewImageSelect(url)

    }
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setError(
      Validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  let handleSelectDiet = (diet) => {
    setInput({
      ...input,
      ['diets']: diet.map(e => e.value)
    });
  }

  let handleSelectType = (type) => {
    setInput({
      ...input,
      ['dishTypes']: type.map(e => e.value),
    });
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipes(input));
    setInput({
      name: '',
      summary: '',
      steps: '',
      healthScore: 0,
      steps: '',
      image: undefined,
      diets: [],
      dishTypes: []
    });
  }

  return (
    <div className={styles.bkg}>
 <div className={styles.bkg2}>
 <div className={styles.backBTN1}>
        <Link to={'/'} className={styles.backBTN1} >
         <button ><RxDoubleArrowLeft></RxDoubleArrowLeft> </button> 
        </Link>
      </div>

      <div className={styles.title}>
        <h2>Create your Recipe! </h2>
      </div>
      <form className={`was-validated ${styles.containerForm}`} onSubmit={(e) => { handleSubmit(e) }}>
      
      <div className={styles.containerForm2} >
          <div className={`${styles.subContainer} mb-3`}>
    
            <div>
              <label htmlFor="validationTextarea" className="form-label">Title recipe</label>
              <input onChange={(e) => handleChange(e)} name='name' type="text" value={input.name} className="form-control" id="validationTextarea" placeholder="Title..." required></input>
               {
                  (<p className={styles.danger}>{error.name}</p>)
                }
              
            </div>

            <div>
              <div className={styles.selects}>
              <Select isMulti options={listDiets} name='diets' className={error.dietsTypes ? `${styles.multiSelectError} basic-multi-select` : `${styles.multiSelect} basic-multi-select`}
                onChange={(diet) => handleSelectDiet(diet)} placeholder='Select diet'></Select>  
              </div>

              <div className={styles.selects}>
              <Select isMulti options={listDishTypes} name='dishTypes' className={error.dietsTypes ? `${styles.multiSelectError} basic-multi-select` : `${styles.multiSelect} basic-multi-select`}
                onChange={handleSelectType} placeholder='Select dishType'></Select>
              </div>    
                {(
                  <p className={styles.danger}>{error.dietsTypes}</p>
                )}
             
            </div>

            <div className={styles.image}>
              
              <label>Image {'(jpg, jpeg, png)'}:</label>
              <input onChange={(e) => handleChange(e)} id="files" name="image" type="file" className="form-control" required accept=".jpg, .jpeg, .png" />
              <div>
                {
                  viewImageSelect ?
                    <img src={viewImageSelect} alt="Img Select" height="200px" />
                    :
                    <span className={styles.iconImage} ><BsFillImageFill></BsFillImageFill></span>

                }
              </div>
             
                {
                  (<p className={styles.danger}>{error.image}</p>)
                }
              
            </div>
          </div>

          <div className={`${styles.text} mb-3`}>

          
              <label htmlFor="customRange1" className="form-label">Health Score: {input.healthScore}</label>
              <input type="range" defaultValue={0} onChange={(e) => handleChange(e)} className={`${styles.range} form-range`} id="customRange1" min="0" max="100" step="10" name="healthScore" />
                {(
                  <p className={styles.danger}>{error.healthScore}</p>
                )}
            
           

            <div>
            <label htmlFor="validationTextarea" className="form-label">Summary</label>
            <textarea onChange={(e) => handleChange(e)} name="summary" rows="5" cols="50" placeholder="Wtite a short summary:" value={input.summary} className="form-control" id="validationTextarea" required></textarea>     
              {(
                <p className={styles.danger}>{error.summary}</p>
              )}
          
            </div>
      
             <div>
             <label htmlFor="validationTextarea" className="form-label">Instructions</label>
            <textarea onChange={(e) => handleChange(e)} name="steps" rows="5" cols="50" placeholder="Step by step" value={input.steps} className="form-control" id="validationTextarea" required></textarea>
              {(
                <p className={styles.danger}>{error.steps}</p>
              )}
             </div>

          </div>

        </div>


        <div className={`${styles.btnSubmit} mb-3`}>
          <button className={`btn btn-primary ${styles.btn}`} type="submit" disabled={error.switchS} >Submit form</button>
        </div>
    
       
      </form>
 </div>
      
    </div>
  )

}