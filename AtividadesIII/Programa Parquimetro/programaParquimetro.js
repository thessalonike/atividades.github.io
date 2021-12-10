const inputValorPago = document.getElementById('inputValorPagado');
const botaoParquimetro = document.getElementById('botaoParquimetro');
const outTempoDeUso = document.getElementById('outTempoDeUso');
const outTroco = document.getElementById('outTroco');

function programaParquimetro() {
    let valorPago = Number(inputValorPagado.value);
    let trocoDe30min = (valorPago - 1).toFixed(2);
    let trocoDe60min = (valorPago - 1.75).toFixed(2);
    let trocoDe120min = (valorPago - 3).toFixed(2);

    if ((inputValorPagado.value == '' || inputValorPagado.value < 1) || isNaN(valorPago)) {
        alert('Digite um valor mínimo de R$1.00 !');
        inputValorPago.value = '';
        inputValorPago.focus();
        return        
    }

    if (valorPago >= 1 && valorPago < 1.75) {
        outTempoDeUso.textContent = `Tempo: 30min`;
        outTroco.textContent = `Troco: ${trocoDe30min}`;
    } else if (valorPago >= 1.75 && valorPago < 3) {
        outTempoDeUso.textContent = `Tempo: 60min`;
        outTroco.textContent = `Troco: ${trocoDe60min}`;
    } else {
        outTempoDeUso.textContent = `Tempo: 120min`;
        outTroco.textContent = `Troco: ${trocoDe120min}`;
    }
}

botaoParquimetro.addEventListener('click', programaParquimetro);

