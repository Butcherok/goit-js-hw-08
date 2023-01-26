import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');



form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('textarea', throttle(onInputData, 500));
form.addEventListener('submit', onSubmitForm)



const inputData = {};
saveInputData();
function onInputData(evt) {
    inputData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}


function onSubmitForm(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function saveInputData() {
    const saveInfo = localStorage.getItem('feedback-form-state');

    if (saveInfo) {
        form.email.value = JSON.parse(saveInfo).email;
        form.message.value = JSON.parse(saveInfo).message;
    }
}