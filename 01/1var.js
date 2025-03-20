// var let and const used to allocate memory 
// ctrl+/ for write and then commenting it

const accountId = 132 //const value cant be changed
let accountEmail = "pkm@gmail" //instead we use "let"
var accountPass="12345" // has block and functional scope problem gets used at diff places
accountCity="Mumbai" //can be declared without using any type but not prefered
let accountState;//store value as Undefined

 /*
 prefer not to use var
 */


// accountId=2 not allowed as const type
accountEmail="abc.com"
accountPass="213"
accountCity="patna"
//  for console . log shorcut write log+enter 
console.log(accountId);
console.table([accountId,accountEmail,accountPass, accountCity,accountState]) //for multiple printing
