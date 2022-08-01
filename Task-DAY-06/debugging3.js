//Fix the code to Sum of all numbers using IIFE function

(function (arr) 
{
var sum=0;
 for (var i = 0; i < arr.length; i++)
 {
 sum = sum + arr[i];
 }
 console.log(sum);

})([9,8,5,6,4,3,2,1],0);


