"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let inputValor = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let soma = 0;
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.setAttribute('disabled', '');
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.setAttribute('disabled', '');
inputValor.addEventListener('input', habilitaBotoes);
function habilitaBotoes() {
    botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.removeAttribute('disabled');
    botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.removeAttribute('disabled');
}
function somarAoSaldo(inputValor) {
    if (inputValor) {
        soma += inputValor;
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(inputValor.value));
        if (campoSaldo) {
            campoSaldo.innerHTML = String(soma);
        }
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        if (campoSaldo) {
            botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.setAttribute('disabled', '');
            botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.setAttribute('disabled', '');
            inputValor.value = '';
            campoSaldo.innerHTML = '';
            soma = 0;
            inputValor.focus();
        }
    });
}
