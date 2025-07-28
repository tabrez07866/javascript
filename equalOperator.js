//Basic
console.log(5=='5') //true  => checks only value
console.log(5==='5') //false => checks value as well as datatype


//Number vs String
console.log(0=='') //true (empty string coerces to 0)
console.log(0==='') //false

//Boolean vs number
console.log(1==true) //true(true coerces to 1)
console.log(1===true) //false

while("hsgdhsg"){
  console.log("falsey")
  break;
}


//Null vs undefined
console.log(null==undefined) //true(special case)
console.log(null===undefined) //false

//Objects and Primitives
console.log({} == {});    // false (different objects)
// console.log({} === {});  // false

//Arrays
console.log([] == false); // true (empty array coerces to 0, false to 0)
// console.log([] === false); // false

//Zero Comparisons

console.log(0 == false);  // true
console.log(0 === false); // false
console.log('0' == false); // true
console.log('0' === false); // false

//NaN comparison
console.log(NaN == NaN);  // false (special case)
console.log(NaN === NaN); // false

//String and Boolean
console.log('true' == true);  // false ('true' becomes NaN, true becomes 1)
console.log('1' == true);     // true ('1' becomes 1, true becomes 1)

//Special cases
console.log(null == undefined);  // true
console.log(null == 0);          // false
console.log(undefined == 0);     // false
console.log(' \t\r\n ' == 0);    // true (whitespace string coerces to 0)