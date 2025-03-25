//how to make using a constructor and singleton
//const tinderUser=new Object()//gives an empty object ->singleton object
const tinderUser={}//same as above->not a singleobject object

tinderUser.id="123abc"
tinderUser.name="piyush"
tinderUser.isloggedin=false
console.log(tinderUser);

//nested objects
const regularuser={
    email:"piyush@gmail",
    fullname:{
        userfullname:{
             firstname:"piyush",
             lastname:"mishra"
        }
    }
}
console.log(regularuser.fullname.userfullname.lastname);//?for checking if full name existes or not

//hot to merge two arrays
const obj1={1:"a",2:"b",3:"c"
}
const obj2={4:"d",5:"e",6:"f"}
//const obj3={obj1,obj2}object ke andar object
//const obj3=Object.assign({},obj1,obj2)//obj1,obj2 would perform the same but this is preferred good || here {} is the target
const obj3={...obj1,...obj2}//best
console.log(obj3);


//array of objects
const users=[
    {
        id:1,email:"piyush@hmail"
    },
    {
        id:2,email:"piyush@mmail"
    }
]

console.log(Object.keys(tinderUser));//array of keys
console.log(Object.values(tinderUser));

const course={
    coursename:"js",
    price:"90",
    instructor:"piyush"
}

//destructuring of object
// course.instructor->way to acces value
const {instructor:inst}=course//another way
console.log(inst);

//json
// {
//     "name":"piyush",
//     "coursename":"js in eng",
//     "price":"free"
// }

//or
// [
//     {},  //json in array format
//     {},
//     {}
// ]