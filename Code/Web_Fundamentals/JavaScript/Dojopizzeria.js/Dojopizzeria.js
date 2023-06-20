function pizzeria(crustType, sauce, cheese, toppings) {
    var pizza = {};
    pizza.bread = crustType;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}    
const crustArr = ["Thin Crust", "Deep Dish", "hand tossed", "Stuffed crust"];
const sauceArr = ["Red sauce", "BBQ Sauce", "Alfredo Sauce", "Spicy Red Sauce"];
const cheeseArr = ["Mozzarella", "Provolone", "Cheddar", "Parmesan", "feta"];
const topArr = ["Pepperoni", "Mushroom", "Italian sausage", "Onion", "olives"];

// console.log(pizzeria("Thin Crust","Red sauce","Mozzarella","Pepperoni"))
const jaydansPizza = pizzeria("Thin Crust","Red sauce","Mozzarella","Pepperoni");
const dojoPizza1 = pizzeria("Deep Dish","traditional",[cheeseArr[0]],[topArr[0],topArr[2]]);
// console.log(dojoPizza1);
const dojoPizza2 = pizzeria("hand tossed","Red sauce",[cheeseArr[0],cheeseArr[4]],[topArr[1],topArr[3], topArr[4]]);
// console.log(dojoPizza2);
const braxPizza = pizzeria(crustArr[0],sauceArr[0],cheeseArr[0],topArr[0])
const gordsPizza = pizzeria(crustArr[1],sauceArr[1],cheeseArr[4],[topArr[1],topArr[3],topArr[4]]);
console.log(gordsPizza, braxPizza);

function randomPizza(){
    var randomCrust = crustArr[Math.floor(Math.random()*crustArr.length)];
    var randomSauce = sauceArr[Math.floor(Math.random()*sauceArr.length)];
    var cheeserandom = cheeseArr[Math.floor(Math.random()*cheeseArr.length)];
    var toppingsRandom = topArr[Math.floor(Math.random()*topArr.length)];
    return pizzeria(randomCrust,randomSauce,cheeserandom,toppingsRandom);
};
console.log(randomPizza());