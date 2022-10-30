// Escreva um programa JavaScript para remover itens duplicados de um
// array (ignore a diferenciação entre maiúsculas e minúsculas).

let a = new Array('a','a','b','b', 1, 2,3,1).map(colocarMaiuscula);

console.log("Array antes de remover os itens duplicados: " + a);

function colocarMaiuscula(item){
    if(typeof item === "string"){
        return item.toUpperCase();
    }else{
        return item;
    } 
}

for(let i = 0; i < a.length; i++){
    for(let j = i+1; j < a.length; j++){
        if (a[i] === a[j]){
            a.splice(j, 1);
        } 
    }
}

console.log("Array depois de remover os itens duplicados: " + a);