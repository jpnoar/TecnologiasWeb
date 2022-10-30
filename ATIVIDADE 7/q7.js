// Escreva um programa JavaScript para localizar o item mais frequente
// de um array.

const a = new Array('banana', 'banana', 'maca', 'cama','maca','banana');

let aux = 0;
let maisFrequente = null;


for(let i = 0; i < a.length; i++){
    let ocorrencia = 1;
    
    for(let j = i+1; j < a.length; j++){

        if (a[i] === a[j]){
            ocorrencia++;
        }

    }

    if(ocorrencia > aux){

        maisFrequente = a[i];
        aux = ocorrencia;

    }
}

console.log("Dentro do array dado, o item mais frequente é: " +  maisFrequente);