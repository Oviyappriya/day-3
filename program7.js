//Remove duplicate element from array
//anonymous function
let array=[1,1,2,3,4,5,8,8];
let k=function (array){
   let dup = [...new Set(array)];
   console.log(dup);
 }
 k(array);
 //IIFE
 (function(array){
   let dup=[...new Set(array)]
   console.log(dup)
 })([1,2,3,4,5,5])
