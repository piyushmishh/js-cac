//obj looping

const myobj={
    js:'javascript',
    cp:'comp programming',
    rb:'ruby'
}

// for (const key in myobj) { //forin looop
//     console.log(key);//gives keys
//     console.log(myobj[key]);//gives values
//     console.log(`${key} is shortcut for ${myobj[key]}`);
    
    
// }

//for in llooop on array
const programming=["js","op","cpp","html"]

for (const key in programming) {
    console.log(key);//gives keys or indexes
    console.log(programming[key]);//gives values or array elements
}


// map is not iterable with forin loop

//obj:forin
// array:forof 