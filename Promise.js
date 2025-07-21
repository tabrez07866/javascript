/*
A way to handle asynchronous tasks in JavaScript — tasks that take time, like getting data from a server.

A Promise has 3 states:

1) Pending → Waiting for the result ("Your order is being prepared")

2) Fulfilled (Resolved) → Success ("Here’s your food!")

3) Rejected → Failed ("Sorry, we’re out of that dish")

*/




//Creating a Promise

const orderPizza=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        isPizzaReady=false

        if(isPizzaReady){
            resolve("Pizza is ready!")
        }else{
            reject("Sorry, Pizza is not ready!")
        }
    },6000)
})


//Using the promise

orderPizza
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Order completed.")
})

/*
Why Use Promises?
Avoid "Callback Hell" (Too many nested callbacks → hard to read)
Better Error Handling (.catch makes errors easier to manage)
Chaining Operations (Do multiple async tasks in order)
*/


//Chaining promise

function checkOven(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Oven is hot "),100)
    })
}

function backePizza(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Pizza is baked!"),2000)
    })
}

checkOven()
.then((data)=>{
    console.log(data)
    return backePizza();  //waits for this to finish 
}).then((result)=>{
    console.log(result)
})