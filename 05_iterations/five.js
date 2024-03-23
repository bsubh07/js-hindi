const language = ["js", "ruby", "python", "java","cpp"]

language.forEach( function (item){
    console.log(item);
})

language.forEach( (item)=> {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}

language.forEach(printMe)

language.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item)=>{

    console.log(item.languageName);
} )