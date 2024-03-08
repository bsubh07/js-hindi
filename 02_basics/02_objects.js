// singleton

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Subh",
    age: 22,
    [mySym]: "myKey1", // SYMBOL has to be used like this in objects otherwise it'll return as a string
    location: "Kolkata",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.location);
console.log(JsUser["location"]);
// both return the same thing


console.log(JsUser[mySym]);

JsUser.age = 23;

Object.freeze(JsUser)// => now no changes can be done in the object

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());