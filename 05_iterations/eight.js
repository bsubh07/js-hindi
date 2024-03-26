const myNums = [1,2,3]

const myTotal = myNums.reduce(function(accumulator,currentValue) {
    console.log(`acc:${accumulator} and currVal:${currentValue}`);
    return accumulator + currentValue
}, 0)

console.log(myTotal);

const myNumbers = myNums.reduce((accumulator,currentValue) => accumulator+currentValue, 0)

console.log(myNumbers);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 10999
    }
]

const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator+item.price,0 )

console.log(priceToPay);