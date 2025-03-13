"use strict";

console.log("Oi");

// Responsáveis por guardar dados na memória.
var nome = "Thales";
var idade = 28;
var PossuiFaculdade = true;


console.log(nome, idade, PossuiFaculdade);

// DRY (Don't repeat yourself)
var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;
console.log(precoTotal);

// Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
var nome2 = "Vinicius", idade2 = 24, PossuiFaculdade;

// Pode declarra ela e não atribuir valor inicialmente.

var precoAplicativo;

// Hoisting, são movidas para cima do código, porém o valro atribuído não é movido.

console.log(nome3);
var nome3 = "Thales";
// Retorna undefined

var profissao = "Desenvolvedor";
console.log(profissao);
// Retorna Designer


// É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const

var idade4 = 28;
idade4 = 29;

let preco1 = 50;
preco1 = 25;

const possuiFaculdade1 = true;
possuiFaculdade1 = false;
// Retorna um erro