const mynums=[1,2,3,4,5,6,7,8,9]

//adding 10 to each number
// const newnums=mynums.map((num)=>num+10)
// console.log(newnums);

//chaining->can be done many timnes
const newnums=mynums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newnums);


