const tabuadaDiv = document.getElementById('tabuada');
const resultadoDiv = document.getElementById('resultado');
const contadorDiv = document.getElementById('contador');
const nomeInput = document.getElementById('nome');
const multiplicadorInput = document.getElementById('multiplicador');
const verificarButton = document.getElementById('verificar');
const resetarButton = document.getElementById('resetar');

let pontos = 0;
let nome = '';
let multiplicador = 10;
const totalQuestoes = 10;

function gerarTabuada() {
    tabuadaDiv.innerHTML = ''; // Limpa a tabuada anterior
    multiplicador = parseInt(multiplicadorInput.value) || 10; // Garante que o multiplicador seja um número

    for (let i = 0; i <= totalQuestoes; i++) {
        const div = document.createElement('div');
        div.innerHTML = `Quanto é ${multiplicador} x ${i}? <input type="number" id="resposta-${i}">`;
        tabuadaDiv.appendChild(div);
    }
}

function verificarRespostas() {
    nome = nomeInput.value;
    pontos = 0;

    for (let i = 0; i <= totalQuestoes; i++) {
        const respostaInput = document.getElementById(`resposta-${i}`);
        const respostaCorreta = multiplicador * i;

        if (respostaInput.value === '') {
            respostaInput.classList.add('incorreto');
        } else if (parseInt(respostaInput.value) === respostaCorreta) {
            respostaInput.classList.remove('incorreto');
            respostaInput.classList.add('correto');
            pontos++;
        } else {
            respostaInput.classList.add('incorreto');
        }
    }

    const porcentagemAcerto = (pontos / (totalQuestoes + 1)) * 100; // Total de questões inclui 0
    resultadoDiv.textContent = `Parabéns, ${nome}! Você acertou ${pontos} de ${totalQuestoes + 1} questões. Sua porcentagem de acerto foi de ${porcentagemAcerto.toFixed(2)}%.`;
    contadorDiv.textContent = `Total de acertos: ${pontos}`;
}

multiplicadorInput.addEventListener('blur', gerarTabuada);
verificarButton.addEventListener('click', verificarRespostas);

resetarButton.addEventListener('click', () => {
    gerarTabuada();
    resultadoDiv.textContent = '';
    contadorDiv.textContent = 'Total de acertos: 0';
    nomeInput.value = '';
    pontos = 0;
});

gerarTabuada(); // Gera a tabuada inicial
