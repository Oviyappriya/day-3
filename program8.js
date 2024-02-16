//Rotate an array by k times
//Anonymous function

let c=function(a,n,k)
{
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            b.push(parseInt(a[n + i - k] + " "));
        }
        else {
            b.push(parseInt((a[i - k]) + " "));
    }}
   console.log(b)
}
let Arr = [1, 2, 3, 4, 5];
let N = Arr.length;
let b=[];
let K = 2
c(Arr,N,K)
