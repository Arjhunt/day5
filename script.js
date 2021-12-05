// odd numbers in an array

let arr=[1,3,4,5,6,789,76,56,74, 11, 22]
var arrfn=(function(arr){
    
    return (arr.filter((ele)=>{
        
        return arr%2!=0

    }))
})
(arr);
console.log("the odd numbers in this array is" + " " +arrfn);


//Convert all the strings to title caps in a string array

let strarr=["arjhun", "giri", "dhanush"]

let strfn=(function(strarr){

    return (strarr.map((item)=>{
        return item.toUpperCase();
    }))
})(strarr);
console.log("Uppercase " + strfn);


//Sum of all numbers in an array

let arr1=[1,2,3,4,5]

let arrfn1=(function(arr1){

    return( arr1.reduce((total, num)=>{

        return(total + num)

    }))
})(arr1)

console.log(arrfn1);


//prime number in an arry

let primearr= (function(arr){

      return(  arr.filter((item)=>{

            for(i=2;i<item;i++){
                if(item%i===0)
                return false
            }
            return true
        }))
})(arr)
console.log( primearr);


//palindrome

let resultPallindromeArray = (function (arr) {

    return (arr.filter((item) => {

        let temp = item + ""

        if ((temp.split('').reverse().join('')) === item + "")
            return true

        return false

    }))
})(arr);

console.log("Pallindrome array: " + resultPallindromeArray)


//Remove duplicates from an array
let arrayWithDup = [22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9]

let arrw=( (arrayWithDup, index)=>{

    return[...new Set(arrayWithDup)]
})(arrayWithDup)
console.log(arrw);

//Rotate an array by k times



let arrforrotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation, 3)

console.log("Array k times: " + resultArrayShifted)