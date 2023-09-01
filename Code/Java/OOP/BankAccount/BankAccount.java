public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount() {
        BankAccount.accounts++;
        this.checkingBalance = 0.0;
        this.savingsBalance = 0.0;
    }

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }

    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }

    public static int getAccounts() {
        return BankAccount.accounts;
    }

    public static double getTotalMoney() {
        return BankAccount.totalMoney;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings
    // account
    public void deposit(String accountType, double amount) {
        if( accountType == "checking") {
            this.checkingBalance += amount;
        } else if ( accountType == "savings") {
            this.savingsBalance += amount; 
        }
        BankAccount.totalMoney += amount;
    }


     // withdraw
    // - users should be able to withdraw money from their checking or savings
    // account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    public void withdraw(String accountType, double amount) {
        if (amount > 0) {
            if (accountType == "checking") {
                if (checkingBalance >= amount) {
                    checkingBalance -= amount;
                    BankAccount.totalMoney -= amount;
                    System.out.println("Withdrawn $" + amount + " from " + accountType + " account.");
                } else {
                    System.out.println("Insufficient funds in checking account.");
                }
            } else if (accountType == "savings") {
                if (savingsBalance >= amount) {
                    savingsBalance -= amount;
                    BankAccount.totalMoney -= amount;
                    System.out.println("Withdrawn $" + amount + " from " + accountType + " account.");
                } else {
                    System.out.println("Insufficient funds in savings account.");
                }
            } else {
                System.out.println("Invalid account type.");
            }
        } else {
            System.out.println("Invalid withdrawn amount.");
        }
    }
    // getBalance
    // - display total balance for checking and savings of a particular bank account
    public void getBalance() {
        System.out.println("Checking Account Balance: $" + checkingBalance);
        System.out.println("Savings Account Balance: $" + savingsBalance);
    }
} 
