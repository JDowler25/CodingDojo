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

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
    
    # other methods
    
    def make_deposit(self, amount):
        self.account.deposit(amount)
    
    def make_withdraw(self,amount):
        self.account.withdraw(amount)
    
    def display_user_balance(self):
        print("User:", self.name)
        self.account.display_account_info()

user1 = User("Jaydan", "jaydan@design.com")

user1.make_deposit(1000000.00)
user1.make_withdraw(100000)
user1.display_user_balance()
