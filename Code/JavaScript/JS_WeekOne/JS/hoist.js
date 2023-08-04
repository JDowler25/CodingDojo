// 1
console.log(hello);
var hello = 'world';

// ANSWER:
// var hello;
// console.log(hello);
// hello = 'world';


// 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// ANSWER:
// var needle;
/* function test(){
    var needle ='magnet';
    console.log(needle);
} */
// needle = 'haystack';
// test(); logs 'magnet'


// 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// ANSWER:
// // var brendan;
// /* function print(){
//     brendan = 'only okay';
//     console.log(brendan)
// } */
// brendan = 'super cool';
// console.log(brendan)// "super cool"


// 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// ANSWER:
// var food;
/* function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
} */
// food = 'chicken';
// console.log(food); // "chicken"
// eat(); // "half-chicken"




// 5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// ANSWER:
// var mean;
// var food;
// mean(); TypeError: mean is not a function
/* mean = function(){
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
} */
// console.log(food); // undefined


// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// ANSWER:
// var genre; 
// console.log(genre); undefined
// genre = "disco";
/* function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
} */
// rewind(); //'rock' and 'r&b'
// console.log(genre); // 'disco'

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// ANSWER:
// dojo;
// console.log(dojo); // san jose
// function learn() {
    //     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// learn(); // 'seattle' and 'burbank'
// console.log(dojo); 'san jose' 


// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}