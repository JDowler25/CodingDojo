class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName() {
        console.log('My name is ${this.name}.')
    }
    
    showStats() {
        console.log('Name: ${this.name}')
        console.log('Strength: ${this.strength}')
        console.log('Speed: ${this.speed}')
    }
    
    drinkSake() {
        this.health += 10;
        console.log('Health: ${this.health}')
    }
}

class Sensei extends Ninja {
    constructor(name) {
        this.name = name;
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
