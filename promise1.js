const orderPizza=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const pizzaAail=false
        if(pizzaAail){
            resolve("Pizza is available")
        }else{
            reject("Sorry, out of stock!")
        }
    },4000)
})

orderPizza
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("order completed!")
})

///////// Three states
// Pending
// Fulfill(resolve)
// Reject
