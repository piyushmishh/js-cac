var c=300//global scopee
let a=300                          //{}->used to start and end a scope
if(true){
    let a=10        //local scope
    const b=20
    var c=30
    //console.log(a);
    
}


//console.log(a);//it is not defined outside
//console.log(b);//b also not available
//console.log(a);//prints 30 means c has been defined outside but we know it was defined in if 

//NESTED SCOPE
function one(){
   const username="piyush"
   function two(){
    const website="yt"
    console.log(username);
    
   }
   //console.log(website); variables defined inside a fn cant be accessed outside
   //parent variable can be accessed inside a child function
   two()
   
}
//one()
if(true){
    const username="piyu"
    if(username=="piyu"){
        const website="yt"
        console.log(username + website); //prints the value of username and website 
    }
}

//++++++++++++++++++++++++++interesting discusion
console.log(prints(5));//here the value 6 is being printed and the code is running

function prints(value){  
     return value+1
}

console.log(addtwo(5));//here the function is giving error bcoz the way this function has been declared

const addtwo=function(num){  //other way of writing function,here the value is being stored in const sddtwo
    return num+2
}


