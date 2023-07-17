# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database


class User:
    def __init__(self, data):
        self.user_id = data['user_id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.user_email = data['user_email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('users_db').query_db(query)
        # Create an empty list to append our instances of users
        users = []
        # Iterate over the db results and create instances of users with cls.
        for user in results:
            users.append(cls(user))
        return users
    
    @classmethod
    def get_one(cls,user_id):
        query = "SELECT * FROM users WHERE user_id = %(user_id)s"
        return connectToMySQL('users_db').query_db(query,{'user_id': user_id})[0]    

    @classmethod
    def update(cls,data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name=%(last_name)s, user_email=%(user_email)s WHERE user_id = %(user_id)s"
        return connectToMySQL('users_db').query_db(query, data)    


    @classmethod
    def destroy(cls,user_id):
        query = """DELETE FROM users
                   WHERE user_id = %(user_id)s;"""
        # print(connectToMySQL('users_db').query_db(query,{'user_id': user_id}))
        return connectToMySQL('users_db').query_db(query,{'user_id': user_id})

    # class method to save our user to the database
    @classmethod
    def save(cls, data):
        query = "INSERT INTO users ( first_name , last_name , user_email , created_at, updated_at ) VALUES ( %(first_name)s , %(last_name)s , %(user_email)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('users_db').query_db(query, data)