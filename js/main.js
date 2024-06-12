'use strict';

const input = document.querySelector('.js_input');
const btn = document.querySelector('.js_btn');
const tip = document.querySelector('.js_tip'); //pista
const attempt = document.querySelector('.js_attempts'); //intentos
let contador = 0;

function getRandomNumber(max) { 
    return parseInt(Math.random() * max); 
}

const numeroAleatorio = getRandomNumber(100);
console.log(`El numero aleatorio es: ${numeroAleatorio}`);

btn.addEventListener('click',(ev) => {
    if (input.value < 1 ||  input.value > 100){
        contadorPista('Pista: El número debe estar entre el 1 y el 100');
    } else if (input.value > numeroAleatorio) {
        contadorPista('Pista: Demasiado alto');
    } else if (input.value < numeroAleatorio) {
        contadorPista('Pista: Demasiado bajo');
    } else {
        tip.innerHTML = 'Has ganado campeona!!!';
    }
})
function contadorPista(pista) {
    tip.innerHTML = pista
    contador++
    attempt.innerHTML = `Número de intentos es: ${contador}`;
}

tip.innerHTML = 'Pista: Escribe el número y dale a prueba';
attempt.innerHTML = `Número de intentos es: ${contador}`;