const tinderUser = new Object()// singleton object

const tinderUser2 = {}// non-singleton object

// console.log(tinderUser);
// console.log(tinderUser2);

tinderUser.id = "123abc"
tinderUser.name = "Subhankar"
tinderUser.isLoggedIn = false

const regularUser ={
    email: "sensubh@gmail.com",
    fullname: {
        firstname: "Subhankar",
        lastname: "Sen"
    }
}
console.log(regularUser.fullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3); 

const obj4 ={...obj1, ...obj2}

const users =[
    {
        id:1,
        email: "s@gmail.com"
    },
    {
        
        id:2,
        email: "sdf@gmail.com"
    },


]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));// keys and values are arranged like array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// is the key present or not


const course = {
    coursename: "js basics",
    instructor: "MDN"
}

const {instructor} = course// destructuring of object
console.log(instructor);

// randomusermeapi
// json formatter