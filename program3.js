//Sum of all numbers in an array
////anonymous function 
let a=[1,2,3,4,5]
let count=0
let x=function(a){
   for(let i of a){
    count+=i;
    };
    return count;
    }
    console.log(x(a));
//IIFE
(function(a1){
    let count1=0
        for(const element of a1){
         count1+=element;
         };
         console.log(count1);
        })([1,2,34,5])
//arrow function
 let sum=(arr2)=>{
    let count1=0
        for(const element of arr2){
         count1+=element;
         };
         console.log(count1);
 }
 sum([1,2,3,4,5])

    


