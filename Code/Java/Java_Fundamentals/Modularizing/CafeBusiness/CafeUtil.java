import java.util.ArrayList;

public class CafeUtil {

    public int getStreakGoal() {
        int sum = 0;
        for (int i = 0; i <= 10; i++) {
            sum += i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices) {
        double total = 0.0; 
        for(double price: prices){
            total += price;
        }
        return total;
    }

    public void displayMenu(ArrayList<String>menuitems){
        for(int i = 0; i < menuitems.size(); i++){
            System.out.println(i + " " + menuitems.get(i));
        }
    }

    public void addCustomer(ArrayList<String>customers){
        System.out.println("Please enter your name:");
        String username = System.console().readLine();
        System.out.println("Hello," + username + "!");
        int waitLine = customers.size();
        System.out.println("There are " + waitLine + " people in front of you");
        customers.add(username);
        System.out.println(customers);
    }
}
