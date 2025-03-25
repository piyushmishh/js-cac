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
//console.log(loginusermsg("piyush"));//if piyush wasnt passed undefined logged in was o/p

//how to  manage infinite parameters
//like in shopping kart to keep on adding product cose being put in the cart
// //function calculatecartprice(...num1){  ///...->rest operator and spread op
//     return num1
// }
function calculatecartprice(val1,val2,...num1){
    return num1
}//200 goes to val1,900 to val2,800 and 1000 to num1

console.log(calculatecartprice(200,900,800,1000));

//object passed in function
const user={
    username:"piyu",
    price:900
}
function handleobj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobj(user)
//or
handleobj({
    username:"samu",
    price:90000
})

//array passed in object
const mynewarray=[900,800,700,600]
function return2ndvalue(array){
    return array[1]
}
console.log(return2ndvalue(mynewarray));


