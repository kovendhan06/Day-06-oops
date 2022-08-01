//Fix the code to Sum of the digits present in the number

let n = "123";
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
    if(i == 0){
        sum+=parseInt(n.substr(i,i+1));
    }
    else{
        sum+=parseInt(n.substr(i,i));
    }
    
 }
 return sum;
}