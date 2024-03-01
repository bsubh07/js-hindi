// Primitive (call by value)

/* => 7 types : 
String
Number
Boolean
null(empty)
undefined(which value can be declared into it not decided yet)
Symbol(to create any component unique)
BigInt (any scientific value or large value which cant be handled by int)
*/

// Reference (non primitive)

/* 
Array
Objects
Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 34567892341563382n // => BigInt

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    Name: "Subh",
    Age: 23,
}

const myFunction = function(){
    console.log("Hey Subh")
}