
const isUserLoggedIn = true
const temperature = 30

if(isUserLoggedIn){
    console.log("executed");
}

if(temperature<35){
    console.log("temperature less than 35");
}
else{
    console.log("temperature greater than 35");
}

const score = 200

if(score>100){
    const power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test");

if (balance<500) {
    console.log("less than");
} else if(balance<750){
    console.log("less than 750");
} else if(balance<1200){
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy item");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

