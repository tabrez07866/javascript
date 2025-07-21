//Deep clone ==>>Deep cloning creates a completely independent copy of an object where all nested properties are also copied, not just references. Here's a detailed explanation of the common methods and their limitations.



//Method 1: JSON.parse(JSON.stringify()) - The Quick Way

const obj={a:1,b:{c:2}}

console.log(JSON.stringify(obj))

console.log(JSON.parse(JSON.stringify(obj)))

const deepClone=JSON.parse(JSON.stringify(obj))
deepClone.b.c=42

console.log(obj.b.c)
console.log(deepClone.b.c)

/*
JSON.stringify() converts the object to a JSON string

JSON.parse() converts the string back to a new object
 */


/*
Limitations

❌ Functions are removed (they can't be stringified)

❌ undefined values are removed

❌ Date objects become strings

❌ RegExp objects become empty objects

❌ Circular references (object references itself) cause errors


const problemObj = {
  date: new Date(),
  func: () => console.log('hello'),
  undef: undefined,
  regex: /abc/g,
  self: null // Will set up circular reference
};
problemObj.self = problemObj;

const badClone = JSON.parse(JSON.stringify(problemObj));

Result:
{
  date: "2023-05-15T12:00:00.000Z" (string, not Date),
  regex: {}, (empty object)
  self: "[Circular]" (or throws error)
}
// func and undef are missing
*/


//Method 2: Structured Clone - The Modern Way (Node.js and browsers)

const obj1={a:1,b:{c:2}}

const deepclone=structuredClone(obj1)

console.log(deepclone)




