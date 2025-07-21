/*
Currying ==> Transforming a function with multiple
             arguments into a series of unary 
             functions.
*/

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(5)(3)(2))

const add =a => b =>a+b

console.log(add(5)(3))