import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onSubmitForm)

// save info in localStorage ************************

let inputData = {};
function onInputData(evt) {
    inputData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

// submit info from form and clean form fields ************************

function onSubmitForm(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

// restore info from localStorage ************************

const saveInfo = localStorage.getItem('feedback-form-state');

try {
    if (saveInfo) {
        inputData = JSON.parse(saveInfo);
        for (const name in inputData) {
            form.elements[name].value = inputData[name];
        }
    };
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        }
