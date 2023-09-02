public class ZookeeperTest {
    public static void main(String[] args) {
        Mammal mammal = new Mammal();
        Gorilla gorilla = new Gorilla();
        Bat bat = new Bat();


        mammal.displayEnergy();

        gorilla.throwSomething();
        gorilla.displayEnergy();

        gorilla.throwSomething();
        gorilla.displayEnergy();

        gorilla.throwSomething();
        gorilla.displayEnergy();

        gorilla.eatBananas();
        gorilla.displayEnergy();
        
        gorilla.eatBananas();
        gorilla.displayEnergy();
        
        gorilla.climb();
        gorilla.displayEnergy();
        
        bat.attackTown();
        bat.displayEnergy();

        bat.attackTown();
        bat.displayEnergy();

        bat.attackTown();
        bat.displayEnergy();
        
        bat.eatHumans();
        bat.displayEnergy();

        bat.eatHumans();
        bat.displayEnergy();
        
        bat.fly();
        bat.displayEnergy();
        
        bat.fly();
        bat.displayEnergy();
    }
}
