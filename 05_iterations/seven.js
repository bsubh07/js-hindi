const myNumbers =[1,2,3,4,5,6,7]

newNums = myNumbers
.map( (num) => {return num * 10} )
.map( (num) => {return num + 1} )
.filter( (num) => num>30 )

console.log(newNums);

