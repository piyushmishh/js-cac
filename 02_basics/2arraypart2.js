const marvelheroes=["thor","ironman","spiderman"]
const dcheroes=["superman","flash","batman"]

//marvelheroes.push(dcheroes)//array is pushed into an array
//console.log(marvelheroes);
//console.log(marvelheroes[3][2])//accesing dcheroes value from marvelheroes

//const allheroes=marvelheroes.concat(dcheroes)//arrays are merged properly into but has to be stored at a new memory locn
//console.log(allheroes);

//another METHOD TO MERGE TWO ARRAYS
const allnewheroes=[...marvelheroes,...dcheroes]
console.log(allnewheroes);

//concat for 2 arrays only but thru spread multiple arrays can be merged

const another_array=[1,2,3,[4,5],[5,[6,7]]]
const real_another_array=another_array.flat(Infinity)//to handle array in arrays problem
console.log(real_another_array);


console.log(Array.isArray("hitesh"))
console.log(Array.from("Piyush"));///converts it into an array
console.log(Array.from({name:"Piyush"}));//return an empty string
//Iq->as we have to specify array has to be made of keys or values otherwise if it will not make an array it will return an empty array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

//read about Array.isarray/from/of