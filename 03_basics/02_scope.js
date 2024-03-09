let a = 300

if(true){
    let a =10
    const b = 20
    var c = 30// generally avoid var
    console.log("INNER :", a);// => local scope
}


// console.log(a);// => global scope
// // console.log(b);
// console.log(c);

function one(){
    const username = "Subh"

    function two(){
        const website = "MDN"
        console.log(username);
    }
    //console.log(website);// => will throw error
    two()
}

one()

if(true){
    const username = "Subhankar"
    if(username == "Subhankar"){
        const website = "MDN"
        console.log(username + website);
    }
    //console.log(website);// will throw error coz website is present in previous scope
}

//console.log(username);// will throw error again

// +++++++++++++++ interesting ++++++++++++++++++

addOne(6)

function addOne(num)// => functions
{
    return num + 1
}

//addTwo(7)// => will throw error coz it is hold into a variable

const addTwo = function(num)// => expressions
{
    return num + 2
}

addTwo(8)
