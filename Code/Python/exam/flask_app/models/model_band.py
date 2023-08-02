from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_user
from flask_app import DATABASE

class Band:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.genre = data['genre']
        self.city = data['city']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def create(cls,data):
        query = """INSERT INTO bands(name, genre, city, user_id) VALUES(%(name)s, %(genre)s, %(city)s, %(user_id)s);"""
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    
    @classmethod
    def get_bands(cls):
        query = "SELECT * FROM bands JOIN users ON users.id = bands.user_id;"
        results = connectToMySQL(DATABASE).query_db(query)
        all_bands = []
        for band in results:
            band_instance = cls(band) 
            user_data = {
                **band,
                'id': band['users.id'],
                'created_at': band['users.created_at'],
                'updated_at': band['users.updated_at']
            }
            user_instance = model_user.User(user_data)
            band_instance.user = user_instance
            all_bands.append(band_instance)
        return all_bands
    
    @classmethod
    def get_user_bands(cls,data):
        query = "SELECT * FROM bands WHERE user_id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    
    @classmethod
    def get_one_band(cls,id):
        query = "SELECT * FROM bands JOIN users ON users.id = bands.user_id Where bands.id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query,{'id': id})
        one_band = cls(results[0])
        for band in results:
            user_data = {
                **band,
                'id': band['users.id'],
                'created_at': band['users.created_at'],
                'updated_at': band['users.updated_at']
            }
            user_instance = model_user.User(user_data)
            one_band.user = user_instance
        return one_band
    
    @classmethod
    def update(cls,data):
        query = """UPDATE bands SET name=%(name)s,genre=%(genre)s,city=%(city)s WHERE id = %(id)s;"""
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    
    @classmethod
    def delete(cls,data):
        query = "DELETE FROM bands WHERE id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    
    @staticmethod
    def required_fields(data):
        is_valid = True
        if len(data['name']) < 2:   
            is_valid = False
        if len(data['genre']) < 2:
            is_valid = False
        return is_valid