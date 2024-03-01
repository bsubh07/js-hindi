console.log(2>1)
console.log("02">1) // => conversion has been done

console.log(null>0) // =>false
console.log(null==0) // =>false
console.log(null>=0) // =>true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2); // => checks datatype as well

/*
we should avoid writing this type of code(line 4 to line 10)
*/