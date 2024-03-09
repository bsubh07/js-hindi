function loginUserMessage(username){
    if(!username)// => if(username == undefined)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1)// => rest operator
{
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));// => val1 = 200, val2 = 400, rest are stored into num1

const user = {
    username: "Subh",
    price: 300
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(
    {
        useranme:"Subh",
        price: 400
    }
)

