const arr = [2, 3, 8, 1, 0]

const arr2 = new Array(3, 6, 9, 0)

// Array Methods

arr.push(7)// => adds 7 at the end of the array

console.log(arr);

arr.pop()// => removes last element from the array

arr.unshift(8)// => adds element at the beginning of the array

console.log(arr.includes(8));// => whether the element present in the array or not

console.log(arr.indexOf(7));

const arr3 = arr.join()

console.log(arr3);

// slice, splice

console.log("A", arr);

const arr4 = arr.slice(1,3)// => returns index 1 and 2

console.log(arr4)
console.log("B", arr);

const arr5 = arr.splice(1,3)// => removes the elements from the actual array from 1 index to 3 index
console.log("C", arr); 
console.log(arr5);

const marvel_char = ["thor", "Itonman", "Spiderman"]
const dc_char = ["superman", "flash", "batman"]

marvel_char.push(dc_char)// => takes the second array as 4th element
console.log(marvel_char)
marvel_char.concat(dc_char)// => returns a new combined array

const all_new_char = [...marvel_char, ...dc_char]// => returns same thing as concat but can combine more than two arrays

const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const newArr2  = newArr.flat(Infinity)// => this creates an array with the elements of subarrays
console.log(newArr2);

console.log(Array.isArray("Subh"));// => returns whether it is an array or not
console.log(Array.from("Subh"));// => this converts anything to an array
console.log(Array.from({name: "Subh"})); // IMPORTANT// couldn't able to convert this to an array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))