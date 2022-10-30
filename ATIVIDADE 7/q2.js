// Escreva uma função JavaScript para clonar um array.

let a = ["a", "b", "c"];

function clonarArray(a) {
    const clone = new Array()
    
    for(const element of a){
        clone.push(element)
    }
    return clone; 
}

console.log(clonarArray(a))