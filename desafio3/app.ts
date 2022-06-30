let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let inputValor = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let soma: number = 0;

botaoLimpar?.setAttribute('disabled', '');
botaoAtualizar?.setAttribute('disabled', '');
inputValor.addEventListener('input', habilitaBotoes);

function habilitaBotoes () {
    botaoAtualizar?.removeAttribute('disabled');
    botaoLimpar?.removeAttribute('disabled');
}

function somarAoSaldo(inputValor: number) {
    if (inputValor) {
        soma += inputValor;
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(inputValor.value));
        if(campoSaldo) {
            campoSaldo.innerHTML = String(soma);
        }
    });
}

if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        if(campoSaldo) {
            botaoLimpar?.setAttribute('disabled', '');
            botaoAtualizar?.setAttribute('disabled', '');
            inputValor.value = '';
            campoSaldo.innerHTML = '';
            soma = 0;
            inputValor.focus();
        }
    });
}
