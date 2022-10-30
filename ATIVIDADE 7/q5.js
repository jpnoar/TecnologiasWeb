// Escreva um programa JavaScript simples para unir todos os elementos
// de um array em uma string.

const a = new Array('era', 'uma', 'vez', 1, 2, 3);


function juntarEmString(a){
    let c = a.join(" ");
    return c;
}


console.log(juntarEmString(a));