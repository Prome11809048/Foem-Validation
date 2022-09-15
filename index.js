
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone_number = document.getElementById('phone_number');
const male = document.getElementById('male');
const female = document.getElementById('female');
const address = document.getElementById('address');
const date_of_birth = document.getElementById('date_of_birth');
form.addEventListener('submit', (e) => {
    //alert("promiii");
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phone_numberValue = phone_number.value.trim();
    const maleValue = male.value.trim();
    const femalenameValue = female.value.trim();
    const addressValue = address.value.trim();
    const date_of_birthValue = date_of_birth.value.trim();

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    }
    else {
        // add success class
        setSuccessFor(username);
    }
    if(emailValue ==''){
        setErrorFor(email,'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,'Email is not valid');
    }
    else{
        setSuccessFor(email);
    }
    if(phone_numberValue ==''){
        setErrorFor(phone_number,'Phone number cannot be blank');
    }
    else if(!isPhoneN(phone_numberValue)){
        setErrorFor(phone_number,'Phone number is not valid');
    }
    else{
        setSuccessFor(phone_number);
    }
    if(addressValue ==''){
        setErrorFor(address,'Address number cannot be blank');
    }
    else if(!isAddress(addressValue)){
        setErrorFor(address,'Address is not valid');
    }
    else{
        setSuccessFor(address);
    }
    if(date_of_birthValue==''){
        setErrorFor(date_of_birth,'Date of birth cannot be blank');
    }
    else if(!isDate(date_of_birthValue)){
        setErrorFor(date_of_birth,'Date of birth is not valid');
    }
    else{
        setSuccessFor(date_of_birth);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email){
    return /^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/.test(email);
}
function isPhoneN(phone_number){
    return /^(?:\+?88)?01[13-9]\d{8}$/.test(phone_number); 
}
function isAddress(address){
    return /[A-Z a-z]/.test(address);
}
function isDate(date_of_birth){
    return /[1-9\-]{4}[0-9\-]{2}[0-9\-]{2}/.test(date_of_birth);
}