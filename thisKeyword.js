// "This" is a special keyword in js that refers to the
// current execution context(who is calling function).
// its value changes depending on how a function is called.

const person={
    name:'Tabrez',
    greet(){
        console.log(`Hello,my name is ${this.name}`)
    }
}

person.greet()

//When you call person.greet(), this points to the person object (left of the dot)