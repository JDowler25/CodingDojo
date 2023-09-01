public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        account1.deposit("checking", 1000.0);
        account2.deposit("savings", 500.0);
        account3.deposit("checking", 200.0);

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        account1.withdraw("checking", 200.0);
        account2.withdraw("savings", 500.0);
        account3.withdraw("checking", 300.0);
        
        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.println("Number of Bank Accounts: " + BankAccount.getNumberOfAccounts());
        System.out.println("Total Money in Bank: $" + BankAccount.getTotalMoney());
    }
}
