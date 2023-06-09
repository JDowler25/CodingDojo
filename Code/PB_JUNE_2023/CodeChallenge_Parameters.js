//creating a function to account for every case possible. 
function greeting(name,timeOfDay){
    //if name is not equal to Count Dooku greet name with time of day. This will take into account for different namesto be greeted.
    if(name != "Count Dooku"){
        console.log("Good " + timeOfDay, name)
        //else greet Count Dooku.
    }else{
        console.log("I'm coming for you, Dooku!")
    }
}
//invoke function
greeting("Anakin", "Morning")
greeting("Count Dooku","Night")
greeting("John", "Noon")