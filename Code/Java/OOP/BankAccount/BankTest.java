public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();

        System.out.println(BankAccount.getAccounts());

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        account1.deposit("checking", 1000.0);
        System.out.println(account1.getCheckingBalance()); 
        account2.deposit("savings", 500.0);
        System.out.println(account2.getSavingsBalance());
        account3.deposit("checking", 200.0);
        System.out.println(account3.getCheckingBalance());
        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        account1.withdraw("checking", 200.0);
        System.out.println(account1.getCheckingBalance()); 
        account2.withdraw("savings", 500.0);
        System.out.println(account2.getSavingsBalance());
        account3.withdraw("checking", 300.0);
        System.out.println(account3.getCheckingBalance());

        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.println("Number of Bank Accounts: " + BankAccount.getAccounts());
        System.out.println("Total Money in Bank: $" + BankAccount.getTotalMoney());
    }
}
