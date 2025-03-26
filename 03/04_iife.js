//immediately invoked function expression->no pollution from global scope , to protect it from pollution of global scope

(function chai(){
    //named iife
    console.log(`db connected`);        //if we apply a parenthesis it automatically becomes a block
    
})(); //now its is getting executed , fn getting wrapped in ()
//if we envoke iife then we must remember to end it ; normally done by code editor but still
((name)=>{
    //simple iife
    console.log(`db connected 2 ${name}`);//using arrow function
    
})("piyush")//remove name and "piyush" passed as parameter to form simplle iife