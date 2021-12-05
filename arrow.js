// odd numbers in an array

let numberArray = [43,57,37,23,8,6,37,8,1,1]


    console.log(numberArray.filter((item)=>{
        return item%2 !==0;
    }))

//Convert all the strings to title caps in a string array
let str=["raj", "nav", "tan"]

str.map((item)=>{
    console.log(item.toUpperCase()); 
    
})

//Sum of all numbers in an array

let sum=numberArray.reduce((total, item)=>{

    return(total + item);

})
console.log(sum);

//Return all the prime numbers in an array

let primee=numberArray.filter((item)=>{

    for(i=2;i<item;i++){
        if(item%i===0)
        return false
    }
    return true
})
console.log(primee);