// Escreva uma função JavaScript para obter o primeiro elemento de um
// array. Passar um parâmetro 'n' retornará os primeiros 'n' elementos do
// array.

const a = new Array('a', 'b', 'c', 'd', 'e', 'f');

let n = 3;

function nPrimeirosElementos(n){  
    for (let i = 0; i < n; i++) {
        console.log(a[i]);
    }
}

nPrimeirosElementos(n);