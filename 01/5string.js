const name="hi"
const repocnt=900

console.log(name+repocnt+"days");//old fashioned way of concatenating strings

console.log(`hello my name id ${name} and repcnt is ${repocnt}`);
//modern way of concatenating strings
// it is called STRING INTERPOLATION

const gamename=new String ("piyushmishh")//another way of declaring string

console.log(gamename[0]);
console.log(gamename.__proto__);//shows that empty obj

console.log(gamename.length);
console.log(gamename.toUpperCase());//the string does not gets changed as it is primitive type
console.log(gamename.charAt(5));
console.log(gamename.indexOf("y"));

//go thru string methods in mdn docs

//SUBSTRING AND SLICE
const newstring=gamename.substring(0,4)
console.log(newstring);//4th value not included

const anotherstring = gamename.slice(0,8)//neg value ->starts from reverse
console.log(anotherstring);

//TRIM
const newstring1="   hi    no one"
console.log(newstring1);
console.log(newstring1.trim());//trims of starting spaces and ending spaces only

// replce
const url="https://piyushrocksmishra"
console.log(url.replace("rocks" , "shocks"));

console.log(url.includes("hi"))

//KEEP ON DEVLOPING IDEAS ON STRING,S METHODS OR  FUNCTIONS 
//GOOD FOR BACKEND
//search like "split javascript mdn"

// split returns an array of strings splitted by seperator


