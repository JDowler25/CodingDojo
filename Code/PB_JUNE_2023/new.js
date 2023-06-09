// A
/*
for(var i=22; i>5; i--) {
    console.log(i);
    i -= 4;
}
// i will decr. by one, while also being subtracted by 4 until i becomes less than 5. [22,17,12,7]
// B. PREDICT THE OUTPUT::
var i = 11;
if(i % 2 == 0) {
    console.log("even");
} else {
    console.log(i);
}
*/
//C. Complete the function in the code below to return the average of all of the values of an array.
var arr= [3, 6, 5, 9, 2];
// Return: 5
function findAverage(arr) {
    var currentSum = 0;
    for( let i = 0; i < arr.length; i++){currentSum += arr[i];}
    return currentSum / arr.length;
}
console.log(findAverage(arr))