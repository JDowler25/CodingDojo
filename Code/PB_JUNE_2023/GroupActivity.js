/* ------------------ group activity -----------

    write a for-loop that starts at year 1996 and ends in 2023
    on every year (iteration) have it log the year and the string "JS is awesome!"
    on every 10 years, log "happy decade of JS!"
    when you reach the end, log "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈"

    ex. "1996 JS is awesome"
        "1997 JS is awesome"
        ...
        "2004 JS is awesome"
        "2005 JS is awesome"
        "happy decade of JS!"
        "2007 JS is awesome"
        ....
        "2022 JS is awesome"
        "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈"

 */
// for loop for iter. through years icrem. by 1
for(let i = 1996; i <= 2023; i++){
    //left side condition is checking if the year is a decade by dividing by 10, if their is a remainder of 0 then the year is a decade.
    //ride side condition is checking if i is not = to 1996 
    if((i - 1996)%10 == 0 && i != 1996){
        console.log("happy decade of JS")
        //Check if i is equal to 2023 if true console.log
    }else if(i == 2023){
        console.log("happy 27 years of JS")
        //Catching every year adding + "_Js is awesome"
    }else{
        console.log(i + " JS is awesome")
    }
} 
/*
var num = 2023-1996
for(let i = 0; i <= num; i++){
    if(i%10==0 && i > 0){
        console.log("happy decade of JS")
    } else if(i != num){
        console.log((i+1996) + " JS is awesome")
    }else{
        console.log("happy 27 years")
    }
} */