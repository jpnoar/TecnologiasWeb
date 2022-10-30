// Escreva um programa JavaScript que aceite um número como entrada
// e insira traços (-) entre cada dois números pares. Por exemplo, se você
// aceitar 025468, a saída deve ser 0-254-6-

let num = 134785666823488;

let a = num.toString().split("").map(Number)

function ehPar(num) {
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

for (let i = 0; i < a.length-1; i++) {
    if(ehPar(a[i]) && ehPar(a[i+1]))
        a.splice(i+1, 0, "-");
}

a = a.join("");

console.log(a)  

