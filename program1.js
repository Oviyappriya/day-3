//Print odd number in arrays
//anonymous function 
let arr=[1,2,3,4,5,6,7]
let x=function(arr){
    for(const element of arr){
        if(element%2!=0)
        console.log(element);
    }
};
x(arr)
//ITEE
(function(arr){
    for(const element of arr){
        if(element%2!=0)
        console.log (element);
          }
    })([1,2,3,4,5,6,7])

//arrow function
let odd=(arr1)=>{
    for(const element of arr1){
        if(element%2!=0){
            console.log(element)
        }
    }
}
odd([1,2,3,4,5,6,7]);