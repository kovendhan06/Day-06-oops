//Fix the code to sum the number in that array

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
let newsum = num.reduce(sum)
console.log(newsum);