const inputNumero = document.getElementById('inputNumero');
const botaoNumeroDecrescente = document.getElementById('botaoNumeroDecrescente');
const outNumero = document.getElementById('outNumero');

function programaNumerosDecrescentes() {
    
    let numero = Number(inputNumero.value);
    let numerosDecrescentes = '';
    let ultimoNumero = '';

    if (inputNumero.value == '' || isNaN(numero)) {
        alert('Digite um número');
        inputNumero.value = '';
        inputNumero.focus();
        return;
    }
    for (let index = numero; index > 1; index--) {
        numerosDecrescentes += `${index}, `;
    }
    for (let index = numero - 1; index > 0 ; index--) {
        ultimoNumero = `${index}`;
    }

    outNumero.textContent = `Entre ${numero} e 1: ${numerosDecrescentes} ${ultimoNumero}.`;
}

botaoNumeroDecrescente.addEventListener('click', programaNumerosDecrescentes);