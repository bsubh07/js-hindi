// Immediately Invoked Functions Expressions (IIFE)

(function one(){
    // named IIFE
    console.log(`DB CONNECTED`);
})() ;// whenever two iifes are written , one must add ';' at the end of the first iife

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})(`Subhankar`) ;
