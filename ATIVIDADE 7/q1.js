// Escreva uma função JavaScript para verificar se uma `entrada` é um array ou não.

const a = new Array();
let b = 2;

function ehArray(entrada) {
    return Array.isArray(entrada);
}

//Testando a função para um array
console.log(ehArray(a));
//Testando a função para não array
console.log(ehArray(b));