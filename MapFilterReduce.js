//Map ==>> map method creates a new array by applying a  function to each element of the original array.
/*
How it works:

1) Iterates through each element in the array

2) Applies the callback function to each element

3) Returns a new array with the transformed elements

4) Does not modify the original array
*/

const arr=[1,2,3,4]

const doubledArr=arr.map((num)=>num*2)

console.log(doubledArr)

const user=[
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
]

const userName=user.map((user)=>user.name)
console.log(userName)

const userAge=user.map((user)=>user.age)
console.log(userAge)

const userAgeAfter5year=user.map(user=>({
    ...user,
    age:user.age+5
}))

console.log(userAgeAfter5year)






//Filter ==>> the filter() creates new array with all elements that pass a test implemented by provided function

/*
How it works:

Iterates through each element in the array

Applies the callback function (which should return a boolean)

Includes the element in the new array if the callback returns true

Returns a new array (possibly smaller than the original)

Does not modify the original array
*/

const numbers=[1,2,3,4,5,6]

const evenNumbers=numbers.filter(number=>number%2===0)

console.log(evenNumbers)

const products=[
     { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Phone', price: 699, inStock: false },
  { id: 3, name: 'Tablet', price: 499, inStock: true },
  { id: 4, name: 'Monitor', price: 299, inStock: true }
]

const availableProduct=products.filter(product=>product.inStock===true)

console.log(availableProduct)


const affordableProduct=products.filter(product=>product.price<500)

console.log(affordableProduct)




//Reduce ===>> the reduce() method executes a reducer function on each element of the array,resulting in a single value.

/*
How it works:

Iterates through each element in the array

Maintains an accumulator that's passed between iterations

The callback returns the updated accumulator

Can be used to transform an array into any single value (number, string, object, etc.)

Does not modify the original array

*/

const values=[1,2,3,4]
const sum=values.reduce((acc,num)=>acc+num,0)  // 0 is initial accumulator value
console.log(sum)

const cartItems = [
  { id: 1, name: 'Shirt', price: 25, quantity: 2 },
  { id: 2, name: 'Pants', price: 40, quantity: 1 },
  { id: 3, name: 'Shoes', price: 80, quantity: 1 }
];

const total=cartItems.reduce((sum,item)=>
    sum + (item.price*item.quantity),0
)
console.log(total)



////////////////////////////////

const people = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Chicago' },
  { name: 'Charlie', age: 35, city: 'New York' },
  { name: 'Diana', age: 28, city: 'Chicago' }
];

const groupByCity=people.reduce((acc,person)=>{
    if(!acc[person.city]){
        acc[person.city]=[]
    }
    acc[person.city].push(person)
    return acc
},{})

console.log(groupByCity)


/*
When to Use Each

Use map() when you need to transform each element in an array

Use filter() when you need to select a subset of elements based on a condition

Use reduce() when you need to compute a single value from an array or transform it into a different structure

*/