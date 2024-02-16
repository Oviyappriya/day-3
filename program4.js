//Return all the prime numbers in an array
//Anonymous Function:
let numArray=[1,2,3,4,5,6,7,8]
let prime=function(numArray){
     numArray = numArray.filter((number) => {
     for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
            }
            return true;
            });
        console.log(numArray);
        }
prime(numArray)
 // IIFE 
(  
function(numArray){
numArray = numArray.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
        }
        return true;
        });
        console.log(numArray);
        })([1,2,3,4,5,6,7,8])
  //  Arrow Function :
let primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
        }
        return true;
        });
        console.log(numArray);
        };primeNumber([1,2,3,4,5,6,7,8])