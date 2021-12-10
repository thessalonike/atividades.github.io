const inputLadoA = document.getElementById('inputLadoA');
const inputLadoB = document.getElementById('inputLadoB');
const inputLadoC = document.getElementById('inputLadoC');
const botaoVerificarLados = document.getElementById('botaoVerificarLados');
const outVerificado = document.getElementById('outVerificado');
const outTipoDeTriangulo = document.getElementById('outTipoDeTriangulo');

function programaLadosDoTriangulo() {
    
    let ladoA = Number(inputLadoA.value);
    let ladoB = Number(inputLadoB.value);
    let ladoC = Number(inputLadoC.value);

    if ((inputLadoA.value == 0 || inputLadoA.value == '') || (inputLadoB.value == 0 || inputLadoB.value == '') || (inputLadoC.value == 0 || inputLadoC.value == '') || isNaN(ladoA, ladoB, ladoC)) {

        alert('Digite para os lados do Triângulos números válido');
        inputLadoA.value = '';
        inputLadoB.value = '';
        inputLadoC.value = '';
        inputLadoA.focus();
        return;

    } else if ((ladoA > ladoB + ladoC) || (ladoC > ladoB + ladoA) || (ladoB > ladoA + ladoC)) {
        outVerificado.textContent = `Esses Lados não podem formar um triângulo ! Escolha novamente os lados`;
        inputLadoA.value = '';
        inputLadoB.value = '';
        inputLadoC.value = '';
        inputLadoA.focus();
        return;
    }
    if ( (ladoA == ladoB) && (ladoC == ladoB) ) {

        outVerificado.textContent = `Esses Lados formam um triângulo`;
        outTipoDeTriangulo.textContent = `Tipo de Triângulo: Equilátero`;

    } else {
        if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoC == ladoB)) {

            outVerificado.textContent = `Esses Lados formam um Triângulo`;
            outTipoDeTriangulo.textContent = `Tipo de Triângulo: Isósceles`;

        } else {

            outVerificado.textContent = `Esses Lados formam um triângulo`;
            outTipoDeTriangulo.textContent = `Tipo de Triângulo: Escaleno`;

        }
    }

}

botaoVerificarLados.addEventListener('click', programaLadosDoTriangulo);