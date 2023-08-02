from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE, bcrypt
from flask import flash
import re
EMAILREGEX = re.compile(r'^[a-zA-Z0-9.+-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$ %^&*-]).{8,}$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.password = data['password']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def create(cls, data):
        query = """INSERT INTO users (first_name, last_name, email, password)
                VALUES (%(first_name)s, %(last_name)s,%(email)s,%(password)s);"""
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result
    

    @classmethod
    def get_one(cls,userid):
        query = "SELECT * FROM users WHERE id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query,{'id': userid})
        print('*'*100)
        print(results)
        if results:
            return cls(results[0])
        else:
            return None
    

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        results = connectToMySQL(DATABASE).query_db(query,data)
        print(results)
        if results:
            return cls(results[0])
        else:
            return False
        

    @staticmethod
    def registration(data):
        is_valid = True
        potiental_user = User.get_by_email({'email': data['email']})
        if potiental_user:
            is_valid = False
        else:
            if len(data['first_name']) < 3:
                is_valid = False
            if len(data['last_name']) < 3:
                is_valid = False
            if len(data['email']) < 5:
                is_valid = False
            if len(data['password']) < 3:
                is_valid = False
            if not EMAILREGEX.match(data['email']):
                is_valid = False
        return is_valid
    

    @staticmethod
    def login_validator(data):
        is_valid = True
        potential_user = User.get_by_email({'email': data['email']})
        if potential_user:
            if not bcrypt.check_password_hash(potential_user.password, data['password']):
                flash("Incorrect Password")
                is_valid = False
        else:
            flash("Email is not registerd")
            is_valid = False
        return is_valid

