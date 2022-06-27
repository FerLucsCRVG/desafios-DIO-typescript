//Desafio 1
interface Employee{
    code:number,
    name:string
}

let employee:Employee = {
    name:"Fernando Lucas",
    code:2
};

//Desafio 2
enum Profissao{
    PADEIRO,
    ATRIZ
}

interface Pessoa{
    nome:string,
    idade:number,
    profissao:Profissao
}

let pessoa1:Pessoa = {
    nome:"Maria",
    idade:29,
    profissao:Profissao.ATRIZ
}

let pessoa2:Pessoa = {
    nome:"Roberto",
    idade:19,
    profissao:Profissao.PADEIRO
}

let pessoa3:Pessoa = {
    nome:"Laura",
    idade:32,
    profissao:Profissao.ATRIZ
}

let pessoa4:Pessoa = {
    nome:"Carlos",
    idade:19,
    profissao:Profissao.PADEIRO
}

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
