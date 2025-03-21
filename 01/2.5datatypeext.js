// datatype primitive and non primitive 

// primitive -7 types all call by value means a copy is passed not the actual data locn

  // string , number boolean ,null(ekdm khali) , undefined,Symbol ,bigint

// reference type(non primitive)

// Array, objects, function

// JS is dynamically typed language ts is static
// Reason:as we never define the datatype of varibale in js 

const score=100
conscores=100.3
const logeedin=false
let usereamil; //here undefined is the datatype of the variable

const id=Symbol('123')
const anotherid=Symbol('123') //here on obs it is seen that in both same value has been passed
// but functionality of symbol is to make them different
//thus both contains different value
console.log(id==anotherid);//return false

const heroes=["ca","ia","bp"] //array refernce type

let myObj={
    name:"piyush",     //Object type - anything under obj is curly braces
    age:21,            //datatype can be anything
}

const myFunction=function(){
    console.log("hello");        //function
}

console.log(typeof myObj);

//*** IMPORTANT
//interview : typeof(null)===object , undefined ka ud hin , symbol ka symbol
// every non primitive type return obj as its datatype when typeof is used for it 
// function ka obj function aata hn 
//*** */












