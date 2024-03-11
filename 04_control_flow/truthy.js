/*
falsy values =>

false, 0, -0, BigInt 0n,"", null, undefined, NaN

*/

/*
truthy values =>

"0", 'false', " ", [], {}, function(){}// empty functions

*/

// Checking whether the array is empty or not

const arr = []

if(arr.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1, val2, val3, val4 ;

val1 = 5 ?? 10
val2 = null ?? 20
val3 = undefined ?? 30

val4 = null ?? 30 ?? 40

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator => condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")