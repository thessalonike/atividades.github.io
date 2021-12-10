const inputNumero = document.getElementById('inputNumero');
const botaoNumero = document.getElementById('botaoNumero');
const outNumero = document.getElementById('outNumero');

function numeroParOuImpar() {
    
    let numero = inputNumero.value;

    if ((numero < 0 || numero == '') || isNaN(numero)) {
        alert('Digite um n�mero positivo v�lido, para saber se � par ou impar!');
        inputNumero.value = '';
        inputNumero.focus();
        return;

    } else if (numero % 2 !== 0) {
        outNumero.textContent = `O n�mero ${numero} � �mpar`;
    } else {
        outNumero.textContent = `O n�mero ${numero} � Par`;
    }

}

botaoNumero.addEventListener('click', numeroParOuImpar);