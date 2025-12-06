//Exercicio em Lógica com JS
// 1 string, number, booleano
const nome = "Emanuel";

console.log(nome);
console.log(typeof nome);

//number

const numero1 = 20;
const numero2 = 20;

const soma = numero1 +numero2;

console.log(soma);

//booleano

const aprovado = true;
console.log("O aluno está aprovado?");
console.log(aprovado);

//variavel com ',"", template strings

const texto = 'Emanuel';

console.log(texto);

const name = "Emanuel";

console.log(name);

//template strings

const txt = "Emanuel";
const mensagem = "mota";

console.log(`Olá! ${txt} ${mensagem}`)

//variavel usando let

let idade = 20;

console.log(idade);

idade = 25

console.log(idade);

//alterar o valor de uma variavel

// const numero = 30;

// numero = 35
// o erro apresentado e, atribuir novos valores a variaveis constantes.

// variavel numerica soma,subtraçao,multiplicaçao,divisao

let numero3 = 10;
let numero4 = 10;
let adicao = numero3 + numero4;
let resultAdicao = adicao - numero4;
let resulSubtraçao = resultAdicao * numero4;
let result = 50 / 10;
let rest = 50 % 10;

console.log(adicao);
console.log(resultAdicao);
console.log(resulSubtraçao);
console.log(result);
console.log(rest);

//variavel nota

const nota = 8;

console.log(`A nota é maior que 7? ${nota > 7}`);

console.log(`A nota é igual a 10? ${nota === 10}`);

console.log(`A nota é menor que 5? ${nota < 5}`);

// variaveis booleanas

const acordouCedo = true;
const tomouCafe = false;

console.log(`A pessoa acordou cedo e tomou cafe? ${acordouCedo && tomouCafe} `);

console.log(`A pessoa acordou cedo ou tomou cafe? ${acordouCedo || tomouCafe} `);

console.log(`A pessoa não tomou cafe? ${!tomouCafe} `);

// variaveis undefined,nulo

const variavelUndefined = undefined;
const variavelNull = null;

console.log(`Tipo de variavelUndefined: ${typeof variavelUndefined}`);
console.log(`Tipo de variavelNull: ${typeof variavelNull}`);

// array

const sobreNome = ["manel", "mota","pontes","emanuel","vieira"];

console.log(sobreNome);

console.log(sobreNome [0]);
console.log(sobreNome [4]);

// substituindo o vlor de um array

sobreNome[3] = "Ednardo";

console.log(sobreNome)

// array com  numeros

const numeros = [10,20,30];

const add = numeros[0] + numeros[1] + numeros[2];

console.log(add)

// objeto com nome,idade,e cidade

const pessoa ={
    nome:"Emanuel",
    idade: 18,
    cidade: "fortaleza",
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);

// adicione profissao

pessoa.profissao = "programador"
console.log(pessoa);

// delete a propiedade idade

delete pessoa.idade;
console.log(pessoa);

// objeto representando produto

const produto ={
    nome: "Civic",
    preço: 18.000,
};

console.log(typeof produto.nome);
console.log(typeof produto.preço);

// array com alunos

const alunos =[
    {nome: "Manel", nota: 8},
    {nome: "Mota", nota: 7},
    {nome: "Pontes", nota: 10},
];

console.log(`A nota do segundo aluno é: ${alunos[1].nota}`);

// array com cada tipo (string, booleano, number)

const array = "manel";
const array2 = 18;
const temMoto = false; 

console.log(typeof array);
console.log(typeof array2);
console.log(typeof temMoto);

// template strings para exibir frase

const nome1 = "Emanuel";
const idade2 = 15;

console.log(`Meu nome é ${nome1} e tenho ${idade2} anos`);

// somando o saldo

let saldo = 100; 
let gasto = 30;

saldo = saldo - gasto;

console.log(`Seu saldo atualizado é: ${saldo}`);

// senhaCorreta e senhaDigitando

const senhaCorreta = "1234";
const senhaDigitada = "1234";

const senhaEstaCorreta = senhaDigitada === senhaCorreta;

console.log(`A senha está correta? ${senhaEstaCorreta}`);