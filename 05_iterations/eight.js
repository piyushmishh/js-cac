//reduce method

const mynums=[1,2,3]

const mytotall=mynums.reduce((acc,curval)=>{
      console.log(`acc:${acc} and curval:${curval}`);
      
      return acc+curval
} , 0)//giving acc as 0(intial value)
console.log(mytotall);

//above we only used it for arrays

//now using it on objects

const shopingcart=[
    {
        itemname:"jscourse",
        price:2999
    },
    {
        itemname:"cscourse",
        price:3999
    },
    {
        itemname:"cpcourse",
        price:8999
    }

]

const sum=shopingcart.reduce((acc,item)=>acc+item.price,0)
console.log(sum);
