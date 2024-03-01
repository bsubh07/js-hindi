const name = "Subh"
const repoCount = 2

console.log(name + " value " + repoCount)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // String Interpolation

const gameName = new String('Subhankar')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.toUpperCase())
console.log(gameName.length)
console.log(gameName.charAt(5)) // => which character at that index
console.log(gameName.indexOf('a')) // => character index

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "   Subhankar   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://subh.com/subh%70sen"
console.log(url.replace('70%','-'))

console.log(url.includes('real'));

const gameName1 = "subh-ank-ar-sen"

console.log(gameName1.split('-'));