const score=400
//javascript usually defines datatypes impliitly (dynamic lang)
//but for explicit datatype definition

const balance =new Number(100)
console.log(balance);//it gets printed differently with the datatype
console.log(score);

console.log(balance.toString().length);//after making it string we can use the properties of string
console.log(balance.toString());
//tofiexed imp property

const discount=29.86668
console.log(discount.toFixed(2));//returns till 2 decimal places
console.log(discount.toPrecision(3));//compllicitated method
//read about precision

//to see no of zeroes properly
const hundereds=10000000000
console.log(hundereds.toLocaleString('en-IN'));//FOR INDIAN SYSTEM en-in || for us empty()

Number.MAX_VALUE//for max value and so many methods

/////**********8
//  MATHS */

console.log(Math);//oBJECT with properties-math
//so many properties
console.log(Math.abs(-413));//mod 
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.2));//4
console.log(Math.min(4,8,9,7));
//similarly for max

console.log(Math.random());//always give value between 0 and 1
console.log(Math.floor(Math.random()*10)+1);//*10 for random nos b/w 01 and 10 and adding 1 for nos b/w 1 and 10

//for getting values b/w max and min
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)) + min);







