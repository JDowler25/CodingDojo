// Create Variable for program to determine if a guest can ride the rollercoaster
var minimum_age = 10;
var minimum_height = 42;
// Create user prompt to get their height
var riderHeight = 42.5;
var riderAge = 19;
// Use conditional to determine if rider is able to ride the coaster and console.log the appropriate message.
// Stretch Feature 1 the conditional statement to require both height (>=42 inches) and age (>=10 years old).
if((riderHeight >= minimum_height)&&(riderAge >= minimum_age)) {
    console.log("Get on that ride,Kiddo.");
} //Stretch Feature 2 conditional statement to require that either the height requirement (>=42 inches) or the age requirement (>=10 years old) must be met in order for the console.log to say "Get on that ride, kiddo!".
/*else if (riderAge >= minimum_age) {
    console.log("Get on that ride,Kiddo."); 
}*/
else{
    console.log("Sorry Kiddo. Maybe next year.");
}
