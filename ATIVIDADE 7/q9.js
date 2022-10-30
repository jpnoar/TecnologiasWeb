// Existem dois arrays com valores individuais, escreva um programa
// JavaScript para calcular a soma de cada valor de índice individual dos
// arrays fornecidos.

let a = new Array(1, 5, 6, 8, 12, 15);
let b = new Array(44, 15, 30, 20, 20, 15);
let c = new Array();

for(let i = 0; i < a.length; i++){
    c.push(a[i]+b[i]);
}

console.log("Arrays resultante dos valores somados: " + c);
