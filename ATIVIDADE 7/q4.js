// Escreva uma função JavaScript para obter o último elemento de um
// array. Passar um parâmetro 'n' retornará os últimos 'n' elementos do
// array.

const a = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g');

let n = 3;

function nUltimosElementos(n){  
    for (let i = a.length-n; i <= a.length-1; i++) {
        console.log(a[i])   
    }
}

nUltimosElementos(n);


