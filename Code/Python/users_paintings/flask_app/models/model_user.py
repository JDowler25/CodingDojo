from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE, bcrypt
from flask import flash
import re
EMAILREGEX = re.compile(r'^[a-zA-Z0-9.+-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+$')

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.password = data['password']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    #----------CREATE USER-------------
    @classmethod
    def create(cls, data):
        query = """INSERT INTO users (first_name, last_name, email, password)
                VALUES (%(first_name)s, %(last_name)s,%(email)s,%(password)s);"""
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result
    

    #----------Get One-------------
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
    
    #----------Registration Validation-------------
    
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
        if len(data['first_name']) < 2:
            flash("First name min 2 characters!")
            is_valid = False
        if len(data['last_name']) < 2:
            flash("Last name min 2 characters!")
            is_valid = False
        if len(data['password']) < 8:
            flash("Password min 8 characters!")
            is_valid = False
        if not data['password'] == data['confirm_password']:
            flash("Password must match!")
            is_valid = False
        if len(data['email']) < 5:
            flash("Email is invalid!")
            is_valid = False
        elif not EMAILREGEX.match(data['email']):
            flash("Email is invalid!")
            is_valid = False
        else:
            potiental_user = User.get_by_email({'email': data['email']})
            if potiental_user:
                is_valid = False
        return is_valid
    

    #----------Login Validation-------------
    @staticmethod
    def login_validator(data):
        is_valid = True
        potential_user = User.get_by_email({'email': data['email']})
        if potential_user:
            if not bcrypt.check_password_hash(potential_user.password, data['password']):
                flash("Incorrect Password")
                is_valid = False
        else:
            flash("Email is not registered")
            is_valid = False
        return is_valid

