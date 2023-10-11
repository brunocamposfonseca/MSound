function formatar(mascara, documento){
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)

    if (texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1);
    }
}

const form = document.getElementById('form')
const username = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confsenha = document.getElementById('confsenha')
const telefone = document.getElementById('telefone')
const datanasc = document.getElementById('data')
const cpf = document.getElementById('cpf')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()
    const confsenhaValue = confsenha.value.trim()
    const telefoneValue = telefone.value.trim()
    const datanascValue = datanasc.value.trim()
    const cpfValue = cpf.value.trim()

    if(usernameValue === '') {
        setErrorFor(username, 'Preencha esse campo')
    } else {
        setSuccessFor(username)
    }

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

    if(confsenhaValue === '') {
        setErrorFor(confsenha, 'Preencha esse campo')

    } else if(senhaValue !== confsenhaValue) { 
        setErrorFor(confsenha, 'Senhas não se coincidem')
    } else {
        setSuccessFor(confsenha)
    }

    if(telefoneValue === '') {
        setErrorFor(telefone, 'Preencha esse campo')

    } else if(telefoneValue.length < 11) { 
        setErrorFor(telefone, 'Complete o número de telefone')
    } else {
        setSuccessFor(telefone)
    }

    if(datanascValue === '') {
        setErrorFor(datanasc, 'Preencha esse campo')

    } else if(datanascValue.length < 10) { 
        setErrorFor(datanasc, 'Complete a data de nascimento')
    } else {
        setSuccessFor(datanasc)
    }

    if(datanascValue === '') {
        setErrorFor(datanasc, 'Preencha esse campo')
    } else if(datanascValue.length < 10) { 
        setErrorFor(datanasc, 'Complete a data de nascimento')
    } else {
        setSuccessFor(datanasc)
    }

    if(cpfValue === '') {
        setErrorFor(cpf, 'Preencha esse campo')
    } else if(cpfValue.length < 14) { 
        setErrorFor(cpf, 'Complete o CPF')
    } else {
        setSuccessFor(cpf)
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