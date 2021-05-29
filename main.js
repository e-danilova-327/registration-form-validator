const user_input = document.querySelector('.user');
const email_input = document.querySelector('.email');
const password_input = document.querySelector('.password');
const confirm_input = document.querySelector('.confirm');
const form_input = document.querySelector('.form');

/*form_input.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired();
    checkLength();
    checkEmail();
    checkPasswordsMatch();
    showError();
    showSuccess();
});*/

let x = document.getElementById('btn');
x.addEventListener('click', checkRequired);
x.addEventListener('click', checkLength);
x.addEventListener('click', checkEmail);
x.addEventListener('click', checkPasswordsMatch);
x.addEventListener('click', showError);
x.addEventListener('click', showSuccess);

const userValue = String(user_input.value.trim());
const emailValue = String(email_input.value.trim());
const passwordValue = String(password_input.value.trim());
const confirmValue = String(confirm_input.value.trim());

//checkRequired() to accept array of inputs

const checkRequired = (input) => {
    if (input == '') {
        input.getElementById('demo').innerText = 'Please fill in this field';
    }
};

//checkLength() to check min and max length
function checkLength() {
    if (passwordValue.length < 6) {
        document.getElementById(
            'password'
        ).innerHTML = `The password should be at least 6 characters long, you now have ${passwordValue.length}`;
    }
    if (passwordValue.length > 12) {
        document.getElementById(
            'password'
        ).innerHTML = `The password should be max 12 characters long, you now have ${passwordValue.length}`;
    }
}

//checkEmail() to validate email with regex

function checkEmail(inputText) {
    let mailformat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        document.getElementById('demoEmail').innerHTML = `Valid email address!`;
        document.getElementById('demoEmail').style.color = 'green';
        document.getElementById('demoEmail').style.fontSize = '12px';
        return true;
    } else {
        document.getElementById(
            'demoEmail'
        ).innerHTML = `You have entered an invalid email address!`;
        document.getElementById('demoEmail').style.color = 'red';
        document.getElementById('demoEmail').style.fontSize = '12px';
        return false;
    }
}

//checkPasswordsMatch() to match confirm password
function checkPasswordsMatch() {
    let pass1 = passwordValue;
    let pass2 = confirmValue;
    if (pass1 == pass2) {
        document.getElementById('demoConf').innerHTML = `The password is OK!`;
        document.getElementById('demoConf').style.color = 'green';
        document.getElementById('demoConf').style.fontSize = '12px';
    } else {
        document.getElementById(
            'demoConf'
        ).innerHTML = `The passwords don't match!`;
        document.getElementById('demoConf').style.color = 'red';
        document.getElementById('demoConf').style.fontSize = '12px';
    }
}

//showError() to display the error message

function showError() {}

//showSuccess() to show success green outline

function showSuccess() {
    document.getElementsByTagName('input').style.outlineColor = 'green';
}
