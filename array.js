//flat array

const arr = [1, [2, [3, 4]], 5];
const flat=arr.flat(Infinity)   //infinity is depth
console.log(flat)

//output: [ 1, 2, 3, 4, 5 ]


const deeplyNested = [1, [2, [3, [4, [5]]]]];

// Flatten with depth 1 (default):
console.log(deeplyNested.flat(1)); 
// Output: [1, 2, [3, [4, [5]]]]

// Flatten with depth 2:
console.log(deeplyNested.flat(2)); 
// Output: [1, 2, 3, [4, [5]]]

// Flatten completely (using Infinity):
console.log(deeplyNested.flat(Infinity)); 
// Output: [1, 2, 3, 4, 5]


//using recursion 
//const arr1 = [1, [2, [3, 4]], 5];

// function flatten(arr){
//    return arr.reduce((acc,val)=>{
//     Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),[]
//    })
// }

// newArr=flatten(arr1)
// console.log(newArr)

//check array
console.log(Array.isArray(arr))