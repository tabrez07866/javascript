//Call Apply Bind
//These three methods help you control what this refers to in a function. They're like different ways to "borrow" a function and use it with different objects.

function greet(city){
    console.log(`Hi,I'm ${this.name} from ${city}`)
}

const user={name:'Tabrez'}

greet.call(user,'Lucknow') //call:"Hi,I'm Tabrez from Lucknow

greet.apply(user,['Delhi']) //call:"Hi,I'm Tabrez from Delhi

const bound=greet.bind(user)
bound('Chennai')

/* 
call() - Call Immediately with Arguments
apply() - Call Immediately with Array of Arguments
bind() - Create a New Bound Function
*/