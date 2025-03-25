const user={
    username:"piyush",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);//this is used to refer to the current context , to access the variables of this scope
        console.log(this);//this talks about the current context means on running it is showing us the current object
        
    }

}

// user.welcomeMessage()//simply prints the line
// user.username="sam"//changing the current contxt or simply values 
// user.welcomeMessage()//running if the value has been changed..as in the code we have printed the value of current context by using this keyword

//console.log(this);//here there is node env thus it is referring to empty as there is no context in global scope

//in brwoser the global object is WINDOW object thus on console log this in browser it gives windows


// //using this in function
// function chai(){
//     console.log(this);//it will give various things
//     console.log(this.username);//it is givin undefined,thus this context is only being able to use in obj only , not in function
// }
// chai()

//declaration of fn using arrow

// const chai=function(){
//     let username="hi"
//     console.log(this.username);//it prints undefined 
    
// }
// chai()

const chai=()=>{
    let username="piyush"
    console.log(this.username);//diff b/w above function and arrorw function:IQ
    //here also it is givin undefined 
}
//chai()

///+++++++++++++++++++

// const add2=(num1,num2)=>{
//     return num1+num2         //basic arrow function
// }

// const add2=(num1,num2)=>num1+num2    //implicit return is this , explicit when return keyword is used
//const add2=(num1,num2)=>(num1+num2)     //if curly braces used return keyword should be used and parenthesis used non return 
//console.log(add2(3,4));

//obj with arrow
//const add2=(num1,num2)=> ({username:"piyu"})//it should be wrapped in parenthesis



