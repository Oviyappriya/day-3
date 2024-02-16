//Return all the palindromes in an array
//anonymous function
let A=["madam","noon","mom","sister"]
let def=function(A){
    for(let i=0;i<A.length;i++){
    let b=A[i].split("").reverse().join('')
    if(b==A[i])
     console.log("Palindrome")
    else
     console.log("not a palindrom")
}}
def(A)
//Arrow function 
let arr=(A)=>{
    for(let i=0;i<A.length;i++){
    let b=A[i].split("").reverse().join('')   
    if(b==A[i])
     console.log("Palindromes")
    else
     console.log("not a palindrom")
}}
    arr(["madam","noon","sister","mom"])
const Palindromes = (words) =>
    words.filter((word) =>
    word.split("").reverse().join("") === word);
    console.log(Palindromes(["hello", "noon","madam"]))
//IIEF
(function(A){
    for(let i=0;i<A.length;i++){
    let b=A[i].split("").reverse().join('')
    if(b==A[i])
     console.log("Palindromes")
    else
     console.log("not a palindrom")
    }})(["madam","noon","sister","mom"])
    