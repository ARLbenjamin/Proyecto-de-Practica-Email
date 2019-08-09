//variables

const email= document.querySelector('#email');
const asunto= document.querySelector('#asunto');
const mensaje= document.querySelector('#mensaje');
const enviar= document.querySelector('#enviar');
const formulario= document.querySelector('#enviar-mail');
//eventos

events();

function events(){
//deshavilitr enviado
document.addEventListener('DOMContentLoaded', iniciaApp);

// validar capos del formulario
email.addEventListener('blur', validar);
asunto.addEventListener('blur', validar);
mensaje.addEventListener('blur', validar);
enviar.addEventListener('click', sendEmail);

}

//funciones

function iniciaApp(){

    enviar.disabled= true;
}

function validar(){

validarLongitud(this);
console.log(email.value.indexOf('@'));
//console.log(this.value);
if(this.type=== 'email'){ 
  if(this.value.indexOf('@') !== -1){
    this.style.borderBottomColor= 'green';
    this.classList.remove('error');
  } else{
    this.style.borderBottomColor= 'red';
    this.classList.add('error');
    enviar.disabled= true;
  
  }
}

if(email.value.length > 0 && asunto.value.length > 0 && mensaje.value.length > 0){
if(email.value.indexOf('@') !== -1){
    enviar.disabled= false;
}
} else{
    enviar.disabled= true;
}

}

function validarLongitud(campo){

   
    if(campo.value.length > 0){

    campo.style.borderBottomColor= 'green';
    campo.classList.remove('error');
    
    } else{

    campo.style.borderBottomColor= 'red';
    campo.classList.add('error');

    }
}

function sendEmail(e){
e.preventDefault();

const gifSpiner= document.querySelector('#spinner');
gifSpiner.style.display= 'block';
enviar.disabled= true;

//se crea el gif de envio

const enviado= document.createElement('img');
enviado.src = 'img/mail.gif';
enviado.style.display= 'block';

//agregamos el gif y le damos un tiempo de ejecucion
setTimeout(function(){
  gifSpiner.style.display='none';

document.querySelector('#loaders').appendChild(enviado); 


}, 5000);



}