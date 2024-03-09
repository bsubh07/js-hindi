const user = {
    username: "Subh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    
}

user.welcomeMessage()
user.username = "Subhankar"
user.welcomeMessage()

console.log(this);// => refers to empty object

function one(){
    let username = "Subhankar"
    console.log(this);
    console.log(this.username);// 'this' is only be used inside an object
}

one()

const two = function (){
    let username = "Akash"
    console.log(this.username);
}
two()

const three = () => {
    let username = "Akash"
    console.log(this.username);
}
three()

const addTwo = (num1, num2) => ( num1 + num2)// => implicit return function

const sumTwo = (num1, num2) => ({username: "Subhankar"})

console.log(addTwo(3,4))
console.log(sumTwo(3,4))