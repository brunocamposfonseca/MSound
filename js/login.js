const form = document.getElementById('form')
const email = document.getElementById('email')
const senha = document.getElementById('senha')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()

    if(emailValue === '') {
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        setSuccessFor(email)
    }
   
    if(senhaValue === '') {
        setErrorFor(senha, 'Preencha esse campo')
    } else if(senhaValue.length < 8) { 
        setErrorFor(senha, `Uma senha forte deve ter: 
        * Ter no mínimo 8 Caractéres 
        * Ter no mínimo 1 letra Maiúscula 
        * Ter no mínimo 1 letra Minúscula 
        * Ter no mínimo 1 Número
        * Ter no mínimo 1 Caractére especial`)
    } else {
        setSuccessFor(senha)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'div4-boxinput-main error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'div4-boxinput-main success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}