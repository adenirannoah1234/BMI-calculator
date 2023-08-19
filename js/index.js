// form validation
// 1. input must not be empty
// 2. make sure the input are only numbers

// giving feedback to the users whether what theyre doing is correct or not.
// assignment
// 1. bmi  formula
// 2. bmi status
// 3. check how to use the switch statement in javascript

const submitButton = document.querySelector('.calculate');
const alert = document.querySelector('.alert');
const bmiAnswer = document.querySelector('.bmivalue');
const bmiStatus = document.querySelector('.bmistatus');
const clearBtn = document.querySelector('.clearing');

submitButton.addEventListener('click', function (e) {
    e.preventDefault()
    const weight = document.querySelector('#weight').value
    const height = document.querySelector('#height').value
    if (height === '' || weight === '') {
        alert.style.display = 'block';
        alert.textContent = 'Fill in the fields';
        setTimeout(function () {
            alert.style.display = 'none';
        },5000)
    } else if (!Number(height) || !Number(weight)) {
        alert.style.display = 'block';
        alert.textContent = 'Both fields must be numbers';
        setTimeout(function () {
            alert.style.display = 'none';
        },5000)
    }
    const heightInMeters = height / 100

    const bmiValue = ((weight / (heightInMeters * heightInMeters)) * 100).toFixed(2)
    bmiAnswer.textContent = bmiValue

    console.log(typeof bmiValue);

    if (Number(bmiValue) < 18.5) {
        bmiStatus.textContent = 'You are Under Weight'
    } else if (Number(bmiValue) >= 18.5 && Number(bmiValue) <= 24.9) {
        bmiStatus.textContent = 'You are Healthy Weight'
    } else if (Number(bmiValue) >= 25 && Number(bmiValue) <= 29.9) {
        bmiStatus.textContent = 'You are Over Weight'
    } else if (Number(bmiValue) >= 30) {
        bmiStatus.textContent = 'You are Obese'
    }
        
    

})
clearBtn.addEventListener('click', function(e) {
    e.preventDefault();
    weight.value = '';
    height.value = '';
})


