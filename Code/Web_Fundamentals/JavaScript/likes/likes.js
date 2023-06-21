// create a function that increases the number of likes
function increaseLikes(id){
    let likesCount = document.getElementById(id);
    likesCount.innerText++;
    console.log(likesCount);
}