import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDiets, getDishTypes, postRecipes } from "../../redux/actions";
import styles from '../createRecipe/createRecipe.module.css';
import Select from "react-select";



function validate(input) {
  let score= parseInt(input.healthScore);
  
  let error = {    
  };

  if (!input.name) error.name = 'Title is required!';
  if (!input.summary) error.summary = 'Please write a summary for your recipe!';
  if (!input.steps) error.steps = 'Please write a steps for your recipe!';

  if ( score === 0) error.healthScore = 'Please enter the healthScore';
  if(!input.name || input.diets.length === 0 || input.dishTypes.length ===0 || !input.summary || !input.steps || input.healthScore ===0) {
    error.switchS = true
  }

  if(input.name && input.diets.length> 0 && input.dishTypes.length>0 && input.summary && input.steps && input.healthScore >0) {
    error.switchS = false
  }
  if (input.diets.length === 0 || input.dishTypes.length === 0) error.dietsTypes = 'Select at least one type and one diet!';
  if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%+.~#()?&//=]*)/.test(input.image))
    error.image = "The image must be a valid url"
  return error
}



export default function AddRecipe() {

  const dispatch = useDispatch();
  let listDiets = useSelector((state) => state.diets)
  let listDishTypes = useSelector((state) => state.dishTypes)

  useEffect(() => {
    dispatch(getDiets());
    dispatch(getDishTypes());
  }, [dispatch])

  const [error, setError] = useState({});
  const [viewImageSelect, setViewImageSelect] = useState()

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

  console.log(input)
  

  let handleChange = (e) => {
    console.log(e)
    if (e.target.name === 'image') {
      let url = URL.createObjectURL(e.target.files[0])
      setViewImageSelect(url)
      console.log(url)
    }
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  let handleSelectDiet = (diet) => {
    setInput({
      ...input, 
      ['diets']: diet.map(e=> e.value)
    });
  }

  let handleSelectType = (type) => {
    setInput({
      ...input,
      ['dishTypes']: type.map(e=> e.value),
    });
  }

  console.log(listDiets)
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipes(input));
    setInput({
      name: '',
      summary: '',
      steps: '',
      healthScore: '',
      steps: '',
      img: '',
      diets: [],
      dishTypes: []
    });
  }
  return (
    <div className={styles.bkg}>

      <div className={styles.backBTN1}>
        <Link to={'/'}>
          <button className={styles.backBTN}></button>
        </Link>
      </div>

      <div>
        <h2>Create your Recipe! </h2>
      </div>
      <form class={`was-validated ${styles.containerForm}`} onSubmit={(e) => { handleSubmit(e) }}>
        <div className={styles.containerForm2} >
          <div class={`${styles.subContainer} mb-3`}>
            <label htmlFor="validationTextarea" class="form-label">Title recipe</label>
            <input onChange={(e) => handleChange(e)} name='name' type="text" value={input.name} class="form-control" id="validationTextarea" placeholder="Title..." required></input>
            <div class="invalid-feedback">
            { error.name && (
                          <div className={styles.danger}>{error.name}</div>
                  )}
              
            </div>
            <div>
            <Select isMulti options={listDiets} name='diets' className={`${styles.multiSelect} basic-multi-select`}
              onChange={(diet) => handleSelectDiet(diet)} placeholder='Select diet'></Select>
 
            <Select isMulti options={listDishTypes} name='dishTypes' className={`${styles.multiSelect} basic-multi-select`}
              onChange={handleSelectType} placeholder='Select dishType'></Select>
           <div >
            { error.dietsTypes && (
                          <div className={styles.danger}>{error.dietsTypes}</div>
                  )}
            </div> 
            </div>
           

            <div>
              <label for="customRange1" class="form-label">Health Score: {input.healthScore}</label>
              <input type="range" defaultValue={0} onChange={(e) => handleChange(e)} class="form-range" id="customRange1" min="0" max="100" step="10" name="healthScore" />
              <div >
                 { error.healthScore && (
                          <div className={styles.danger}>{error.healthScore}</div>
                  )}
              </div>
            </div>

            <div>
            <label>Image url:</label>
            <input onChange={(e) => handleChange(e)} id="files" name="image" type="file" class="form-control" required accept=".jpg, .jpeg, .png"/>
            <div>
            {
        viewImageSelect && <div><img  src={viewImageSelect} alt="Img Select" height="200px"/></div>
        
      }
            </div>
            <div class="invalid-feedback">

              Example invalid form file feedback
            </div>
          </div>
            </div>

          <div class={`${styles.text} mb-3`}>

            <label htmlFor="validationTextarea" class="form-label">Summary</label>
            <textarea onChange={(e) => handleChange(e)} name="summary" rows="5" cols="50"  placeholder="Wtite a short summary:" value={input.summary} class="form-control" id="validationTextarea" required></textarea>
            <div class="invalid-feedback">
            { error.summary && (
                          <div className={styles.danger}>{error.summary}</div>
                  )}
            </div>

            <label htmlFor="validationTextarea" class="form-label">Instructions</label>
            <textarea onChange={(e) => handleChange(e)} name="steps" rows="5" cols="50"  placeholder="Step by step" value={input.steps} class="form-control" id="validationTextarea" required></textarea>
            <div class="invalid-feedback">
            { error.steps && (
                          <div className={styles.danger}>{error.steps}</div>
                  )}
            </div>

          </div>

        </div>


        <div class="mb-3">
          <button class="btn btn-primary" type="submit" disabled={error.switchS} >Submit form</button>
        </div>
      </form>
    </div>
  )

}