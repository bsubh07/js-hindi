const language = ["js", "ruby", "python", "java","cpp"]

const values = language.forEach( (item)=>{
    console.log(item);
} )
console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4 )

console.log(newNums);

const latestNums = myNums.filter( (num) => {
    return num > 5;
} )

console.log(latestNums);

const nums = []

myNums.forEach( (num) => {
    if (num>5) {
        nums.push(num)
    }
} )

console.log(nums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const myBooks = books.filter( (item) => item.genre === 'Science' )

console.log(myBooks);

const specialBooks = books.filter ( (item) => item.publish >= 2000)

console.log(specialBooks);