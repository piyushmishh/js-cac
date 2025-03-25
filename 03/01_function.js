function saymyname(){
    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");
}

//saymyname()

// function add2nos(num1,num2){ //at defn of func:parameters are defined
//     console.log(num1+num2);
    
// }
//add2nos()//gives 

// add2nos(3,4)//at call values passed:arguments
// add2nos(7,"a")//gives otherwise thus checking reqd

function add2nos(num1,num2){ //at defn of func:parameters are defined
    let result=num1+num2
    return result
    
}
const result=add2nos(4,4)
console.log(result);

function loginusermsg(username){
    return `${username} just logged in`
}
console.log(loginusermsg("piyush"));//if piyush wasnt passed undefined logged in was o/p

