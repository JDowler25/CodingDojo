public class Gorilla extends Mammal {
    public void throwSomething() {
        System.out.println("Watch out!");
        System.out.println("The Gorilla has thrown something!");
        setEnergyLevel(getEnergyLevel() - 5);
    }

    public void eatBananas() {
        System.out.println("The Gorilla is satisfied after eating a banana.");
        setEnergyLevel(getEnergyLevel() + 10);
    }

    public void climb() {
        System.out.println("The Gorilla is climbing a tree!");
        setEnergyLevel(getEnergyLevel() - 10);
    }
}
