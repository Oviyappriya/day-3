//Convert all the strings to title caps in a string array
//anonymous function
 let a="oviya is great"
 let def=function(a){
   a = a.toLowerCase().split(' ')
   
    for(let i=0;i<a.length;i++){
     a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1)
     }
    return a.join(' ')
}
 console.log(def(a))
//IIFE
(function (str) {
   str = str.toLowerCase().split(' ');
   for (let i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
     } 
     console.log(str.join(' '));
     
   })("oviya is great")
  
//arrow function
let titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}

console.log(titleCase("i am oviya")); 