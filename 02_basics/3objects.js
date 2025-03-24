//singleton->declared as literals singleton is not made
//if it is made from constructor it is made singleton(obj literals)

//object literals(declaration of object)

//Object.create->through constructor->singleton made

const mySym=Symbol("key1")//IQ->take a symbol,add to object keys and print it
//heres how
const jsuser={
    name:"piyush",
    "full name":"piyush kumar mishra",
    //mySym:"mykey1",//not the proper way here itnis not used as symbol , here it is used as string,check by type of
    [mySym]:"mykey1",//correct way to do it
    age:90,
    email:"piyush@nit",
    isloggedin:false,
    lastlogindays:["monday","sunday"]
}

//HOW TO ACCCESS ELEMENTS OF OBJECTS
console.log(jsuser.email);//approach 1
console.log(jsuser["email"]);//approach 2 ->BETTER as we can access the key defined in ""only thru this method ex:accessing full name in next line
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);//how to access symbol from a obj

//hot to change values
jsuser.email="piyush@nitpatna"
//to lock a obj:no changes can bemade
//Object.freeze(jsuser)
jsuser.email="hinopo"
console.log(jsuser["email"]);
console.log(jsuser);//symbol is showed here||symbol key here

jsuser.greeting=function(){
    console.log("hello js user");
}
jsuser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);//referencing an obj this used for refernecing an obj
}

console.log(jsuser.greeting());//without brackeds it prints function(anonymous)
//with brackets it shows hello js user and undefined
console.log(jsuser.greetingtwo());


