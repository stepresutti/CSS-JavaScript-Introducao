// // Declaração de variaveis

// // var nome = 159
// var nome = 'thiago'
// let idade = "thiago" // let it change
// const lalala = 'lalalala' // constant
// let nome

//DOM
// document.getElementById('nome') //um unico elemento
// document.getElementsByClassName('contato')
// document.getElementsByName()
// document.getElementsByTagName('input')
// document.getElementsByTagNameNS()
// let botao = document.querySelector('#nome')
// document.querySelectorAll('.nome')

let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let button = document.querySelector('#envio')
let msg = document.querySelector('#msg')

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let txtNome = document.querySelector('#txtNome');
txtNome.innerHTML = '&nbsp;';

let txtEmail = document.querySelector('#txtEmail');
txtEmail.innerHTML = '&nbsp;';

let txtAssunto = document.querySelector('#txtAssunto');
let count = 0;
txtAssunto.innerHTML = `Quantidade de caracteres: ${count}/100`;
// txtAssunto.innerHTML = 'Quantidade de caracteres: ' + count + ' /100';

function validaNome() {
  if (nome.value.length >= 3) {
    nome.style.borderBottom = '3px solid var(--green)';
    nome.style.color = 'var(--green)';
    txtNome.innerHTML = 'Nome válido';
    nomeOk = true;
  } else {
    nome.style.borderBottom = '3px solid var(--dark-red)';
    nome.style.color = 'var(--dark-red)';
    txtNome.innerHTML = 'Nome inválido';
    nomeOk = false;
  }
}

// function validaEmail() {
//   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
//     email.style.borderBottom = '3px solid var(--dark-red)';
//     email.style.color = 'var(--dark-red)';
//     txtEmail.innerHTML = 'email inválido';
//     emailOk = false;
//   } else {
//     email.style.borderBottom = '3px solid var(--green)';
//     email.style.color = 'var(--green)';
//     txtEmail.innerHTML = 'email válido';
//     emailOk = true;
//   }
// }

function validaEmail() {
  let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

  if (email.value.match(regex)){
    email.style.borderBottom = '3px solid var(--green)';
    email.style.color = 'var(--green)';
    txtEmail.innerHTML = 'email válido';
    emailOk = true;
  } else {
    email.style.borderBottom = '3px solid var(--dark-red)';
    email.style.color = 'var(--dark-red)';
    txtEmail.innerHTML = 'email inválido';
    emailOk = false;
  }
}

function validaAssunto() {
  count = assunto.value.length;
  txtAssunto.innerHTML = `Quantidade de caracteres: ${count}/100`;

  if (assunto.value.length <= 100) {
    assunto.style.borderBottom = '3px solid var(--green)';
    assunto.style.color = 'var(--green)';
    assuntoOk = true;
  } else {
    assunto.style.borderBottom = '3px solid var(--dark-red)';
    assunto.style.color = 'var(--dark-red)';
    assuntoOk = false;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    button.style.backgroundColor = 'var(--green)'
    msg.innerHTML = 'formulário enviado'
    // alert('deu bom')
    setTimeout('document.location.reload(true)', 2000)
  } else {
    msg.innerHTML = 'Preencha o formulário corretamente antes de enviar...'
    // alert('deu ruim')
    setTimeout('document.location.reload(true)', 2000)
  }
}

window.addEventListener('keyup', ()=>{
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    button.style.backgroundColor = 'var(--green)'
  } else {
    button.style.backgroundColor = 'var(--dark-red)'
  }
})

function timer() {
  msg.innerHTML = 'Aguarde, enviando sua mensagem via pombo correio'
  setTimeout('enviar()', 2500)
}

function dark() {
  document.body.classList.toggle('light')
}