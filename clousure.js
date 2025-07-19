//closure is a function that remember its outer
//variables even after that outer function has returned

function outer(){
    let count=0
    return function inner(){
        count++
        console.log(count)
    }
}

const counter=outer()

counter()
counter()