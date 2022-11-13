const userEmail = document.getElementById("email");
const submit = document.getElementById("submit");

userEmail.addEventListener("change", function(e) {
    e.target.value;
});

// check required inputs
const isRequired = value => value === "" ? false : true;

// check if email is valid
const isEmailValid = (email) => {
    const exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return exp.test(email);
};

// show error message or invalid field input
const showError = (input, message, text) => {

    const formParent = input.parentElement;
    const formInput = input;

    formInput.classList.remove('success');
    formInput.classList.add('error');

    text.textContent = message;
};
// console.log('input');

// remove error message
const showSuccess = (input, text) => {

    const formInput = input;
    const formParent = input.parentElement;

    formInput.classList.remove('error');
    formInput.classList.add('success');

    text.textContent = " ";
};

const checkEmail = () => {
    let valid = false;
    
    let emailError = document.getElementById('small');
    const mail = userEmail.value.trim();
    if (!isRequired(mail)) {
        showError(userEmail, 'Email cannot be empty', emailError);
    } else if (!isEmailValid(mail)) {
        showError(userEmail, 'Please provide a valid email', emailError);
    } else {
        showSuccess(userEmail, emailError);
        valid = true;
    }
    
    return valid;
};
// console.log(checkEmail);

const debounce = (fn, delay = 3000) => {
    let timeoutId;
    return (...args) => {
        // cancel previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // set up a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

submit.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'email':
            checkEmail();
    }
}));

submit.addEventListener("click", function (e) {

    e.preventDefault();

    // validate field
    let isEmailValid = checkEmail();
});
// console.log("click");