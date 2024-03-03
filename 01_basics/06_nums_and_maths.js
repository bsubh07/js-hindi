const score = 400;

const balance = new Number (100)
console.log(balance.toString()) //=>converted the number to a string
console.log(balance.toFixed(3)) //=>decimal value upto 3 digits

const otherNumber = 123.984

console.log(otherNumber.toPrecision(3)) //=>gives us roundoff upto 3 decimal
const largeNumber = 100000000

console.log(largeNumber.toLocaleString('en-IN'))

//++++++++++ Maths +++++++++

console.log(Math);

console.log(Math.abs(-6));
console.log(Math.round(5.9));
console.log(Math.floor(5.9))// => gives us 
console.log(Math.ceil(7.9))

console.log(Math.min(4,6,2,9));
console.log(Math.max(7,2,8,4))
console.log(Math.random()); // => gives value ranging from 0 to 1
console.log(Math.random()*10+1)

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min ) // => varies from (10-20)