const inputNumero = document.getElementById('inputNumero');
const botaoNumero = document.getElementById('botaoNumero');
const outNumero = document.getElementById('outNumero');

function numeroParOuImpar() {
    
    let numero = inputNumero.value;

    if ((numero < 0 || numero == '') || isNaN(numero)) {
        alert('Digite um número positivo válido, para saber se é par ou impar!');
        inputNumero.value = '';
        inputNumero.focus();
        return;

    } else if (numero % 2 !== 0) {
        outNumero.textContent = `O número ${numero} é Ímpar`;
    } else {
        outNumero.textContent = `O número ${numero} é Par`;
    }

}

botaoNumero.addEventListener('click', numeroParOuImpar);