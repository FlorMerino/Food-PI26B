import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../../redux/actions";
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
    dispatch(fetchRecipes())
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
    image: null,
    diets: [],
    dishTypes: []
  });

  let handleChange = (e) => {
    
    if (e.target.name === 'image') {
      e.preventDefault();
      console.log(e)
      let url = URL.createObjectURL(e.target.files[0])
      setViewImageSelect(url)
      setInput({
        ...input,
        [e.target.name]: e.target.files[0]
      });
      setError(
        Validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }else{
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
    }

  };

  let handleSelectDiet = (diet) => {
    let arrayDiets= diet.map(e => e.value);
    setInput({
      ...input,
      ['diets']: arrayDiets
    });
    setError(
      Validate({
        ...input,
        ['diets']: arrayDiets,
      })
    );
  }

  let handleSelectType = (type) => {
    let arrayTypes= type.map(e => e.value)
    setInput({
      ...input,
      ['dishTypes']: arrayTypes,
    });
    setError(
      Validate({
        ...input,
        ['dishTypes']: arrayTypes,
      })
    );
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
      image: null,
      diets: [],
      dishTypes: []
    });
  }
  const [selectedOption, setSelectedOption] = useState('soy una opcion');
 console.log(input)
  return (
    <div className={styles.bkg}>
 <div className={styles.bkg2}>
 <div className={styles.backBTN1}>
        <Link to={'/'} className={styles.backBTN1} >
         <button ><RxDoubleArrowLeft></RxDoubleArrowLeft> </button> 
        </Link>
      </div>

      <div className={styles.title}>
        <h1>Create your Recipe! </h1>
      </div>
      <form className={`was-validated ${styles.containerForm}`} onSubmit={(e) => { handleSubmit(e) }}>
      
      <div className={styles.containerForm2} >
          <div className={`${styles.subContainer} mb-3`}>
    
            <div>
              <label htmlFor="validationTextarea" className="form-label">Title recipe</label>
              <input onChange={(e) => handleChange(e)} name='name' type="text" value={input.name} className="form-control" id="validationTextarea" placeholder="Title..." required></input>
               {error.name?
                  (<p className={styles.danger}>{error.name}</p>)
                  :
                  <span></span>
                }
              
            </div>

            <div>
              <div className={styles.selects}>
              <Select isMulti options={listDiets} name='diets' className={error.dietsTypes ? `${styles.multiSelectError} basic-multi-select` : `${styles.multiSelect} basic-multi-select`}
                onChange={(diet) => handleSelectDiet(diet)} placeholder='Select diet'></Select>  
              </div>

              <div className={styles.selects}>
              <Select defaultValue={selectedOption} isMulti options={listDishTypes} name='dishTypes' className={error.dietsTypes ? `${styles.multiSelectError} basic-multi-select` : `${styles.multiSelect} basic-multi-select`}
                onChange={handleSelectType} placeholder='Select dishType'></Select>
              </div>    
                {
                  error.dietsTypes?
                (<p className={styles.danger}>{error.dietsTypes}</p>)
                :
                <span></span>
                }
             
            </div>

            <div className={styles.image}>
              
              <label>
                Image {'(jpg, jpeg, png)'}:             
              </label>
              <input onChange={(e) => handleChange(e)} id="files" name="image" type="file" className="form-control" required accept=".jpg, .jpeg, .png" />
              <div>
                {
                  viewImageSelect ?
                    <img src={viewImageSelect} alt="Img Select" height="200px" />
                    :
                    <span className={styles.iconImage} ><BsFillImageFill></BsFillImageFill></span>

                }
              </div>
                  
                { error.image?
                  (<p className={styles.danger}>{error.image}</p>)
                  :
                  <span></span>
                }
              
            </div>
          </div>

          <div className={`${styles.text} mb-3`}>

          
              <label htmlFor="customRange1" className="form-label">Health Score: {input.healthScore}</label>
              <input type="range" defaultValue={0} onChange={(e) => handleChange(e)} className={`${styles.range} form-range`} id="customRange1" min="0" max="100" step="10" name="healthScore" />
                {error.healthScore?
                (<p className={styles.danger}>{error.healthScore}</p>)
                 :
                 <span></span>
              }
            
           

            <div>
            <label htmlFor="validationTextarea" className="form-label">Summary</label>
            <textarea onChange={(e) => handleChange(e)} name="summary" rows="5" cols="50" placeholder="Wtite a short summary:" value={input.summary} className="form-control" id="validationTextarea" required></textarea>     
              {error.summary?
              (<p className={styles.danger}>{error.summary}</p>)
              :
              <span></span>
            }
          
            </div>
      
             <div>
             <label htmlFor="validationTextarea" className="form-label">Instructions</label>
            <textarea onChange={(e) => handleChange(e)} name="steps" rows="5" cols="50" placeholder="Step by step" value={input.steps} className="form-control" id="validationTextarea" required></textarea>
              {error.steps?
              (<p className={styles.danger}>{error.steps}</p>)
              :
              <span></span>
              }
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