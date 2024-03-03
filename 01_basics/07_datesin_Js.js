let myDate = new Date()
console.log(myDate.toString())

console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023, 8, 28)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now() // => returns miliseconds since 1st jan,1970

console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth());