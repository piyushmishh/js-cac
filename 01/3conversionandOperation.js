let score="33abc" //declaring a string 

console.log(typeof(score));  //checking that its string

let valueinNumber=Number(score); //conversion of string to a number


console.log(typeof(valueinNumber)); //now converting string into number

/*
here lies a problem 
if we take score as 33abc HOW COME IT GETS CONNECTED TO A NUMBER
as this is not an number
simply what if string contains smthing which is not a number
*/
console.log(valueinNumber)//NaN ->o/p  means not a number

//"33"->33
//"33abc"->NaN
//TRUE->1
//false->0
//1->true and vice versa
//""->false to boolean



