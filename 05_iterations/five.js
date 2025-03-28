// foreach loop

const coding=['js','ruby','java','python']
                  
// coding.forEach( function  (val) {
//        console.log(val);
       
// })

// coding.forEach( (val) => {   //write a function tooo
//        console.log(val);
       
// })

// function printme(item){
//     console.log(item);
                                  //we can pass other function also
// }

// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{ //parameters that can be passed in these are shown
//        console.log(item,index,arr);
       
// })


//array of obj
const mycoding=[
       {
              languagename:"js",
              languagefilename:".js"

       },
       {
              languagename:"python",
              languagefilename:".py"

       },
       {
              languagename:"c plus plus",
              languagefilename:".cpp"

       }
]

mycoding.forEach((item)=>{
       console.log(item.languagename);//acccessing parts of obj in array using foreach loop
       
})