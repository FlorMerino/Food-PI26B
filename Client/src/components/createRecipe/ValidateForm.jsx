


const Validate = (input) => {
console.log(input)
    let score = parseInt(input.healthScore);

    let error = {
    };

    if (!input.name) error.name = 'Title is required!';
    if (!input.summary) error.summary = 'Please write a summary for your recipe!';
    if (!input.steps) error.steps = 'Please write a steps for your recipe!';

    if (score === 0) error.healthScore = 'Please enter the healthScore';
    if (!input.name || input.diets.length === 0 || input.dishTypes.length === 0 || !input.summary || !input.steps || input.healthScore === 0 || !input.image) {
        error.switchS = true
    }

    if (input.name && input.diets.length > 0 && input.dishTypes.length > 0 && input.summary && input.steps && input.healthScore > 0 && input.image) {
        error.switchS = false
    }
    if (input.diets.length === 0 || input.dishTypes.length === 0) error.dietsTypes = 'Select at least one type and one diet!';
    if (!input.image || !/([jpgn])+$/.test(input.image)) {
        error.image = "Please insert an image in jpg, png or jpeg format"
    }
    return error


}



export default Validate;