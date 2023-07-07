class BankAccount:
    accounts = []

    def __init__(self, int_rate, balance=0):
        self.interest_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print("Balance: $" + str(self.balance))
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.interest_rate
        return self

    @classmethod
    def print_all_accounts_info(cls):
        for account in cls.accounts:
            account.display_account_info()

account1 = BankAccount(0.01, 1000)
account2 = BankAccount(0.01, 500)

account1.deposit(100).deposit(200).deposit(300).withdraw(150).yield_interest().display_account_info()

account2.deposit(50).deposit(100).withdraw(20).withdraw(30).withdraw(40).withdraw(50).yield_interest().display_account_info()

BankAccount.print_all_accounts_info()
