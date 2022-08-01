//Write a code to print elements in the inner arrays

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
//var str_all=0;
var mystr="";
for (var i = 0; i < numsArr.length; i++) {
    for(var j = 0 ; j < numsArr[i].length;j++ ){
        mystr+=numsArr[i][j];
    }
}
 
     //str_all +=inner_array[j]

console.log(mystr);