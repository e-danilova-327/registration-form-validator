const user = document.querySelector('#user');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm');
const form = document.getElementById('form');
const error = document.querySelectorAll('.error');
const input = document.getElementsByClassName('input');

form.addEventListener('click', preventDflt);

function preventDflt(e) {
    e.preventDefault();
}

function mainValidator() {
    checkEmail(); 
    checkRequired(); 
    checkLength();
    checkPasswordsMatch(); 
}

//checkRequired() to accept array of inputs WORKING

const checkRequired = () => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].value == '') {
            document.querySelectorAll('.error')[i].innerHTML = 'Please fill in this field';
            document.querySelectorAll('.error')[i].style.color = 'red';
            document.querySelectorAll('.error')[i].style.fontSize = '12px';
        }
    }
};

//checkLength() to check min and max length WORKING
function checkLength() {
    if (password.value.length < 6) {
        document.getElementById(
            'pass'
        ).innerHTML = `The password should be at least 6 characters long, you now have ${password.value.length}`;
        document.getElementById(
            'pass'
        ).style.color = 'red';
        document.getElementById(
            'pass'
        ).style.fontSize = '12px';
    } else if (password.value.length > 12) {
        document.getElementById(
            'pass'
        ).innerHTML = `The password should be max 12 characters long, you now have ${password.value.length}`;
    } else {
        showSuccess();
    }
}

//checkEmail() to validate email with regex WORKING

function checkEmail() {
    let mailformat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(mailformat)) {
        document.getElementById('emailErr').innerHTML = `Valid email address!`;
        document.getElementById('emailErr').style.color = 'green';
        document.getElementById('emailErr').style.fontSize = '12px';
        //return true;
    } else {
        document.getElementById(
            'emailErr'
        ).innerHTML = `You have entered an invalid email address!`;
        document.getElementById('emailErr').style.color = 'red';
        document.getElementById('emailErr').style.fontSize = '12px';
        //return false;
    }
}

//checkPasswordsMatch() to match confirm password WORKING
function checkPasswordsMatch() {
    if (password.value == confirmPass.value) {
        document.getElementById('confErr').innerHTML = `The password is OK!`;
        document.getElementById('confErr').style.color = 'green';
        document.getElementById('confErr').style.fontSize = '12px';
        //return true;
    } else {
        document.getElementById(
            'confErr'
        ).innerHTML = `The passwords don't match!`;
        document.getElementById('confErr').style.color = 'red';
        document.getElementById('confErr').style.fontSize = '12px';
        //return false;
    }
    if (confirmPass.value == '') {
        document.getElementById(
            'confErr'
        ).innerHTML = `Please fill in this field`;
        document.getElementById('confErr').style.color = 'red';
        document.getElementById('confErr').style.fontSize = '12px';
    }
}

//showError() to display the error message NOT WORKING YET

function showError(message) {
    document.getElementsByClassName('error') = message;
}

//showSuccess() to show success green outline NOT WORKING YET

function showSuccess() {
    document.getElementsByTagName('input').style.outlineColor = 'green';
}
