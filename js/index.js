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
        
    

})