"use strict";
let employee = {
    name: "Fernando Lucas",
    code: 2
};
//Desafio 2
var Profissao;
(function (Profissao) {
    Profissao[Profissao["PADEIRO"] = 0] = "PADEIRO";
    Profissao[Profissao["ATRIZ"] = 1] = "ATRIZ";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.ATRIZ
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.PADEIRO
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.ATRIZ
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.PADEIRO
};
//Desafio 3
/*let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as InnerHTML;



function somarAoSaldo(soma:number) {
    let resultado = Number(campoSaldo.innerHTML) + soma;
    campoSaldo.innerHTML = String(resultado)
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
*/
//Desafio 4
//NÃO CONCLUÍDO
