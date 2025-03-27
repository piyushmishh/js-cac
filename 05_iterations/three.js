//for of loop
["","",""]//array of strings
[{},{},{}]//array of objects

// const arr=[1,2,3,4,5]
// for (const num of arr) { //element>iterator//object means kis cheez ki upar loop lagana hn
//     console.log(num);
    
// }

// const greetings=["hw","po","op","ip"]
// for (const i of greetings) {
//     console.log(i);
    
// }
// const name="piyush kumar mishra"
// for (const char of name) {
//     console.log(`enery char in my name is "${char}"`);
    
// }

//MAPS //obj holding key value pair

const map=new Map()
map.set('IN',"India")
map.set('ENG',"England")

// console.log(map);
// for (const [i] of map) {
//     console.log(i);//prints both if written i in map
//        //prints value of map[i] if written [i] in map
//     //if  [key,value] then prints both 
    
// }

const myObj={
    'game1':'nfs',
    'game2':'got'
}

// for (const element of myObj) {
//     console.log(element);      //objects are not iteratable wrt forof loop
    
// }