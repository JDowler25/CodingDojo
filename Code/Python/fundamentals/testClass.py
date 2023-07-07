# blueprint -> defines what a User is...
class User:
    def __init__(self):
        self.first_name = "Jaydan"
        self.last_name = "Dowler"
        self.age = 26
    pass

#  creating of that instance of the class
jaydan = User()
joe= User()


# print that instance
print(jaydan.first_name)
print(jaydan.last_name)
