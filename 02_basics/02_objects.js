// singleton

// object literals

const JsUsers = {
    name: "Subh",
    age: 22,
    [mySym]: "myKey1", // symbol has to be used likr this in objects otherwise it'll return as a string
    location: "Kolkata",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUsers.location);
console.log(JsUsers["location"]);
// both return the same thing

const mySym = Symbol("key1")

JsUsers.age = 23;

Object.freeze(JsUsers)// => now no changes can be done in the object

