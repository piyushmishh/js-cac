//dates
let mydate= new Date()
console.log(mydate);//2025-03-23T01:31:23.804Z
console.log(mydate.toString());//Sun Mar 23 2025 07:02:16 GMT+0530 (India Standard Time) 
console.log(mydate.toDateString());//Sun Mar 23 2025
console.log(mydate.toLocaleDateString());//23/3/2025
console.log(typeof mydate);//obj

let mycreateddate=new Date(2025,2 ,24)//month cnt starts from 0 is js
console.log(mycreateddate.toString());

let otherdateandtime=new Date(2025,2,24,5,3)
console.log(otherdateandtime.toLocaleString());

let date=new Date("02-24-2025")//another way of writing date
console.log(date.toLocaleString());

let mytimestmp=Date.now()
console.log(mytimestmp);//gives timestamp from 1970

console.log(mycreateddate.getTime());
//for conversion to sec 
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getMonth()+1);//all the get methods are here
console.log(newDate.getDate());


