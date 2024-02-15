const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');
    if (height==='' || height==0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height"
    }
    else if (weight==='' || weight==0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight"
    }
    else {
        const bmi  = (weight/((height*height)/10000)).toFixed(2);
        let text =  `<span>Your BMI is : ${bmi} </span>`
        if (bmi<18.6) {
            text += ` , You are <span id="underweight">Under-Weight</span>`
        }
        else if (bmi>=18.6 && bmi<24.9){
            text += ` , You are <span id="normal">Normal</span>`
        }
        else{
            text += ` , You are <span id="overweight">Over-weight</span>`
        }
        result.innerHTML = text;
    }
})