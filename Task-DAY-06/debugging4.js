//Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
    for (var i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
}
   
ano(arr);

