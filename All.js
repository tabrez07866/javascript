//closure
function outer(greet){
      let count=0
      return function inner(){
         count++
         console.log(count)
      }
}

let counter=outer()
counter()
counter()


function outerr(greet){

      return function innerr(){
      console.log();
      
      }


}

//Promise

//creating promise

const getPizza=new Promise((resolve,reject)=>{
      const pizzaAvail=false
      setTimeout(()=>{
            if(pizzaAvail){
                  resolve("pizza is here")
            }else{
                  reject("Sorry,Pizza is not avail")
            }
      },200)
})

//using of promise

getPizza
.then((data)=>{
      console.log(data)
})
.catch((error)=>{
      console.log(error)
})
.finally(()=>{
      console.log("Order completed")
})

//same above code with async await
//creation part will be same

async function orderpizza() {
    try{
         const data=await getPizza
         console.log(data)
    } catch(err){
     console.log(err)
    } finally{
      console.log("Order completed")
    }    
}
orderpizza()

//currying

function add(a){
      return function(b){
            return function(c){
                 console.log(a+b+c)
            }
      }

}

add(2)(3)(4)

const addd=(a)=>b=>c=>console.log(a+b+c)

addd(2)(3)(4)


//hoisting

console.log(a)
var a=10
console.log(a)
greet()

function greet(){
      console.log("Welcome")
}


