public class Bat extends Mammal{
    public void fly(){
        System.out.println("The Bat is flying!");
        setEnergyLevel(getEnergyLevel() - 50);
    }

    public void eatHumans(){
        System.out.println("The Bat is satified from the taste of human blood.");
        setEnergyLevel(getEnergyLevel() + 25);

    }

    public void attackTown(){
        System.out.println("The Bat is attacking the Town!");
        setEnergyLevel(getEnergyLevel() - 100);
    }
    
}
