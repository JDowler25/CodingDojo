
public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;
    private String accountNumber;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount() {
        this.checkingBalance = 0.0;
        this.savingsBalance = 0.0;
        accounts++;
    }

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }

    public static int getNumberOfAccounts() {
        return accounts;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }

    public String getAccountNumber() {
        return this.accountNumber;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings
    // account
    public void deposit(String accountType, double amount) {
        if (amount > 0) {
            if (accountType.equals("checking")) {
                checkingBalance += amount;
            } else if (accountType.equals("ssaving")) {
                savingsBalance += amount;
            }
            totalMoney += amount;
            System.out.println("Deposit $" + amount + " into " + accountType + " account.");
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    // withdraw
    // - users should be able to withdraw money from their checking or savings
    // account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    public void withdraw(String accountType, double amount) {
        if (amount > 0) {
            if (accountType.equals("checking")) {
                if (checkingBalance >= amount) {
                    checkingBalance -= amount;
                    totalMoney -= amount;
                    System.out.println("Withdrawn $" + amount + " from " + accountType + " account.");
                } else {
                    System.out.println("Insufficient funds in checking account.");
                }
            } else if (accountType.equals("savings")) {
                if (savingsBalance >= amount) {
                    savingsBalance -= amount;
                    totalMoney -= amount;
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
