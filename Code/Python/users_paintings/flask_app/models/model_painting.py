from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_user
from flask_app import DATABASE
from flask import flash

class Painting:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.description = data['description']
        self.price = data['price']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def create(cls,data):
        query = """INSERT INTO paintings(title, description, price, user_id) VALUES(%(title)s, %(description)s, %(price)s, %(user_id)s);"""
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    
    @classmethod
    def get_paintings(cls):
        query = "SELECT * FROM paintings JOIN users ON users.id = paintings.user_id;"
        results = connectToMySQL(DATABASE).query_db(query)
        all_paintings = []
        for painting in results:
            painting_instance = cls(painting) 
            user_data = {
                **painting,
                'id': painting['users.id'],
                'created_at': painting['users.created_at'],
                'updated_at': painting['users.updated_at']
            }
            user_instance = model_user.User(user_data)
            painting_instance.user = user_instance
            all_paintings.append(painting_instance)
        return all_paintings
    
    @classmethod
    def get_user_paintings(cls,data):
        query = "SELECT * FROM paintings WHERE user_id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    
    @classmethod
    def get_one_painting(cls,id):
        query = "SELECT * FROM paintings JOIN users ON users.id = paintings.user_id Where paintings.id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query,{'id': id})
        one_painting = cls(results[0])
        for painting in results:
            user_data = {
                **painting,
                'id': painting['users.id'],
                'created_at': painting['users.created_at'],
                'updated_at': painting['users.updated_at']
            }
            user_instance = model_user.User(user_data)
            one_painting.user = user_instance
        return one_painting
    
    @classmethod
    def update(cls,data):
        query = """UPDATE paintings SET title=%(title)s,description=%(description)s,price=%(price)s WHERE id = %(id)s;"""
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    
    @classmethod
    def delete(cls,data):
        query = "DELETE FROM paintings WHERE id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    
    @staticmethod
    def required_fields(data):
        is_valid = True
        if len(data['title']) < 2: 
            flash("Title is not long enough!")  
            is_valid = False
        if len(data['description']) < 2:
            flash("Description is not long enough!")  
            is_valid = False
        if int(data['price']) < .01:
            flash("Price must be greater than $0.00!")  
            is_valid = False
        return is_valid