# import the function that will return an instance of a connection
#       folder  folder  file                    function
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_user
from flask_app import DATABASE
# model the class after the users table from  database

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instruction = data['instruction']
        self.date_made = data['date_made']
        self.under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']


    @classmethod
    def create(cls,data):
        query = "INSERT INTO recipes(name, description, instruction, date_made, under_30, user_id) VALUES(%(name)s, %(description)s, %(instruction)s, %(date_made)s, %(under_30)s, %(user_id)s);"
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    

    @classmethod
    def get_recipes(cls):
        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.user_id;"
        results = connectToMySQL(DATABASE).query_db(query)
        all_recipes = []
        for recipe in results:
            recipe_instance = cls(recipe)
            user_data = {
                **recipe,
                'id': recipe['users.id'],
                'created_at': recipe['users.created_at'],
                'updated_at': recipe['users.updated_at']
            }
            user_instance = model_user.User(user_data)
            recipe_instance.user = user_instance
            all_recipes.append(recipe_instance)
        return all_recipes
    
    @classmethod
    def get_one_recipe(cls,id):
        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.user_id Where recipes.id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query,{'id': id})
        one_recipe = cls(results[0])
        for recipe in results:
            # recipe_instance = cls(recipe)
            user_data = {
                **recipe,
                'id': recipe['users.id'],
                'created_at': recipe['users.created_at'],
                'updated_at': recipe['users.updated_at']
            }
            user_instance = model_user.User(user_data)
            one_recipe.user = user_instance
        return one_recipe
    
    @classmethod
    def update(cls,data):
        query = """UPDATE recipes SET name=%(name)s,description=%(description)s,instruction=%(instruction)s,date_made=%(date_made)s,under_30=%(under_30)s WHERE id = %(id)s;"""
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    
    @staticmethod
    def required_fields(data):
        is_valid = True
        if len(data['name']) < 2:
            is_valid = False
        if len(data['description']) < 1:
            is_valid = False
        if len(data['instruction']) < 1:
            is_valid = False
        if int(data['under_30']) > 1 or int(data['under_30']) < 0:
            is_valid = False
        return is_valid