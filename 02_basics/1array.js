//array->are resizable,mixed datatypes
// interview:js copy opern:creates shallow copies(share the same ref point ) means change in copy leads to change in original arr 

//HOW TO DECLARE AN ARRAY
const myarr=[0,1,2,3,4,5]//different types of datatypes can be stored
const myheroes=["ps","io","po"]
const myarr2=new Array(1,2,3,4)

console.log(myarr2[3]);

//ARRAY METHODS

myarr.push(8)
console.log(myarr);
myarr.pop()

myarr.unshift(900)//adds an element to the starting of an array
myarr.shift()
myarr.shift()//removes the first element of any array

console.log(myarr.includes(900));//consist a particular element or not

console.log(myarr.indexOf(15));//-1
const newarr=myarr.join()//join converts into a string

console.log(myarr);
console.log(newarr);//datatype->string

//slice , splice

console.log("a",myarr);
const myn1=myarr.slice(1,3)//3 not included
console.log((myn1));
console.log("b",myarr);

const myn2=myarr.splice(1,3)//splice opn manipulates origianl array
console.log(myn2);//that is to say it divides arr into two parts 
console.log(myarr);//one with the indexed in splice opn and other excluding them

/*
slice(a,b)->gives elements from a to b-1 from an array
spice(a,b)->manipulates the array from a to b(included) index
*/

//####in opn of array beaware of functions which manipuate our array



