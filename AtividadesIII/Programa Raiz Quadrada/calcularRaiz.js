const inputNumero = document.getElementById('inputNumero');
const botaoRaiz = document.getElementById('botaoRaiz');
const outRaiz = document.getElementById('outRaiz');

function calcularRaiz() {
    
    let numero = Number(inputNumero.value);
    let raiz = Math.sqrt(numero);

    if ((inputNumero.value == 0 || inputNumero.value == '' ) || isNaN(numero)) {
        alert('Digite um n�mero para calcular a raiz quadrada!');
        inputNumero.focus();
        return;
    } else if (raiz == Math.floor(raiz)) {
        outRaiz.textContent = `A raiz quadrada de ${numero} � ${raiz}`;
    } else {
        outRaiz.textContent = `O n�mero ${numero} n�o possui raiz quadrada`;
    }
    
}
botaoRaiz.addEventListener('click', calcularRaiz);