class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strenth = 3;
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
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
