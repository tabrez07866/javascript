//Variables and function declaration are moved to 
//to the top of their scope during compile phase


// 1) Memory Allocation(Scans the code & search variable and function) 
// 2) Execution (In this phase code executed line by line)




console.log(a)  //undefined(not error,because of hoisting)
var a=5

foo()

function foo(){
    console.log("Hello")
}



var poo=()=>{
    console.log("hello")
}
poo()
  

//Basic hoisting




console.log(a)   //undefined ()
var a=5
console.log(a)


//Variables without initialization

console.log(y) //undefined
var y
console.log(y) //undefined
y=10
console.log(y) //10


// Multiple declarations
var a=1
console.log(a,b)  //1,undefined
var b=2


//function declaration hoisting

sayHello()

function sayHello(){
    console.log("hello")
}

//Function expression (not hoisted)

try {
    sayHi()
} catch (e) {
    console.log(e.message)    
}

var sayHi=function(){
    console.log("Hi")
}

 

//Variable vs function

console.log(typeof greet)  //function(function are hoisted first)
var  greet="Hello"

function greet(){
    return "hi"
}

console.log(typeof greet)  //"String"


//Let and const(no hoisting in same way)

console.log(z) // ReferenceError: Cannot access 'z' before initialization
let z=10



//Class hoisting(not hoisted)


try {
  const p = new Person(); // ReferenceError: Cannot access 'Person' before initialization
} catch (e) {
  console.log(e.message);
}

class Person {}